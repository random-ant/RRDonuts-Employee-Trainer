import { useContext } from "react";
import { OrderContext, QuantityContext } from "../helpers/context";
import useMods from "./useMods";
import getItem from "../helpers/menuItems";

export class OItem {
  constructor(id, name, quantity, price, mods = [], memo = "") {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.mods = mods;
    this.memo = memo;
  }
}

export default function useOrder() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { currItemQuantity, setCurrItemQuantity } = useContext(QuantityContext);
  const { getModifications, getMemo, clearModsAndMemo } = useMods();

  /**
   * Adds an item to the cart. Automatically gets the needed modifications and memo, then resets them.
   * 
   * @param {number} itemID The ID of the item to add to the cart.
   * @param {string} itemName The name that will displayed in the cart. If left empty, it will use the name stored in the menuItem.js file.
   * @param {number} quantityMultiplier How much of the item to add. Default is 1.
   * @returns {void}
   */
  const addToCart = (itemID, quantityMultiplier = 1) => {

    // if drink needs to be converted to a LARGE, then add 1 to the ID
    if (getItem(itemID).display_name.includes("REG") && getModifications().includes("large")) {
      itemID++;
    }

    const item = getItem(itemID);
    const itemName = getItem(itemID).display_name;
    const amountToAdd = quantityMultiplier * currItemQuantity;
    const itemObj = new OItem(
      itemID,
      itemName,
      amountToAdd,
      item.price,
      getModifications(),
      getMemo()
    );

    // remove the current stored modifcations and memo
    clearModsAndMemo();

    // check if item already exists in userOrder
    let orderContainsItem = false;
    for (let i = 0; i < userOrder.length; i++) {
      if (userOrder[i].name === item.display_name) {
        orderContainsItem = true;
        break;
      }
    }

    // if item already exists in userOrder, update existing quantity
    if (orderContainsItem) {
      setUserOrder(
        userOrder.map((orderItem) => {
          if (orderItem.name === item.display_name)
            return {
              ...orderItem,
              quantity: orderItem.quantity + amountToAdd,
            };
          else return orderItem;
        })
      );
    } else {
      // otherwise, add it to cart
      setUserOrder([...userOrder, itemObj]);
    }

    // reset currItemQuantity after ordering something
    setCurrItemQuantity(1);
  };

  /**
   * Modify the memos of items from the order given their indices in userOrder. Automatically gets the memo.
   * 
   * @param {Array.<number>} itemIndices  - An array of the indices of all items to delete. Each index is the position in userOrder the item is contained at.
   */
  const modifyItemMemos = (itemIndices) => {
    const currMemo = getMemo();
    setUserOrder(
      userOrder.map((item, index) => {
        if (itemIndices.includes(index)) {
          console.log(item);
          return { ...item, memo: currMemo };
        }
        else return item;
      }
      ));
  }

  /**
   * Deletes a certain amount of each given item from the order. If a given item goes to 0, it is removed completely.
   * 
   * @param {Array.<number>} itemIndices  - An array of the indices of all items to delete. Each index is the position in userOrder the item is contained at.
   * @param {number} quantity - The amount of each item to delete. Default is 1.
   * @returns {void}
   */
  const deleteItems = (itemIndices, quantity = 1) => {
    // subtract quantity from each item in userOrder at the given indices
    setUserOrder(
      userOrder.map((item, index) => {
        if (itemIndices.includes(index)) {
          return { ...item, quantity: item.quantity - quantity };
        }
        return item;
      })
    );

    // remove items with quantity <= 0 from userOrder
    setUserOrder((prevOrder) => {
      return prevOrder.filter((item) => item.quantity > 0);
    });
  }

  return { addToCart, modifyItemMemos, deleteItems };
}

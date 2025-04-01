import { useContext } from "react";
import { OrderContext, QuantityContext } from "../helpers/context";
import getItem from "../helpers/menuItems";

export class OItem {
  constructor(id, name, quantity, price, memo = "") {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.memo = memo;
  }
}

export default function useOrder() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { currItemQuantity, setCurrItemQuantity } = useContext(QuantityContext);

  const addToCart = (itemID, quantityMultiplier = 1) => {
    const item = getItem(itemID);
    const amountToAdd = quantityMultiplier * currItemQuantity;
    const itemObj = new OItem(itemID, item.display_name, amountToAdd, item.price);

    let orderContainsItem = false;
    for (let i = 0; i < userOrder.length; i++) {
      if (userOrder[i].name === item.display_name) {
        orderContainsItem = true;
        break;
      }
    }

    if (orderContainsItem) {
      // if item already exists in userOrder, update existing quantity
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

  return { addToCart };
}

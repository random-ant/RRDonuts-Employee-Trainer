import { useContext } from "react";
import { OrderContext, QuantityContext } from "../../helpers/context";
import "./menu.css";

export class Item {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.memo = "";
    this.separate = false;
    this.boxed = false;
    this.addChocolate = false;
    this.addPowder = false;
    this.noIce = false;
    this.easyIce = false;
    this.bag = false;
    this.noAction = false;
  }
}

export default function MenuItem({ color = "rgb(235, 235, 235)", children }) {
  const { order, setOrder } = useContext(OrderContext);
  const { itemQuantity, setItemQuantity } = useContext(QuantityContext);

  const addToCart = (name) => {
    const itemObj = new Item(name, itemQuantity);
    const objString = JSON.stringify(itemObj);

    let orderContainsItem = false;
    for (let i = 0; i < order.length; i++) {
      if (order[i].name === name) {
        orderContainsItem = true;
        break;
      }
    }

    if (orderContainsItem) {
      // if item already exists in order, update existing quantity
      setOrder(
        order.map((item) => {
          if (item.name === name)
            return { ...item, quantity: item.quantity + itemQuantity };
          else return item;
        })
      );
    } else {
      // otherwise, add it to cart
      setOrder([...order, itemObj]);
    }

    // reset itemQuantity after ordering something
    setItemQuantity(1);
  };

  return (
    <button
      className="menu-item"
      onClick={() => addToCart(children)}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}

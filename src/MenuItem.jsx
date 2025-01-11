import { useContext } from "react";
import { OrderContext, QuantityContext } from "./context";
import "./menu.css";

export default function MenuItem({ color = "rgb(235, 235, 235)", children }) {
  const { order, setOrder } = useContext(OrderContext);
  const { itemQuantity, setItemQuantity } = useContext(QuantityContext);

  const addToCart = () => {
    const newMap = new Map(order);
    if (newMap.has(children)) {
      newMap.set(children, newMap.get(children) + itemQuantity);
    } else {
      newMap.set(children, itemQuantity);
    }
    setOrder(newMap);
  };

  return (
    <button
      class="menu-item"
      onClick={addToCart}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}

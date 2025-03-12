import useOrder from "../../hooks/useOrder";
import getItem from "../../helpers/menuItems";
import "./menu.css";

export default function MenuItem({ itemID, color = "rgb(208, 208, 208)" }) {
  const { addToCart } = useOrder();
  const item_name = getItem(itemID).display_name;

  return (
    <button
      className="menu-item"
      onClick={() => addToCart(itemID)}
      style={{ backgroundColor: color }}
    >
      {/* {itemID}: <br /> */}
      {item_name}
    </button>
  );
}

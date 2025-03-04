import useOrder from "../../hooks/useOrder";
import "./menu.css";
import getItem from "../../helpers/menuItems";

export default function MenuItem({ itemID, color = "rgb(235, 235, 235)" }) {
  const { addToCart } = useOrder();
  const item_name = getItem(itemID).display_name;

  return (
    <button
      className="menu-item"
      onClick={() => addToCart(itemID)}
      style={{ backgroundColor: color }}
    >
      {item_name}
    </button>
  );
}

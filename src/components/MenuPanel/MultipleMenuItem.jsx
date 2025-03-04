import useOrder from "../../hooks/useOrder";
import "./menu.css";

export default function MultipleMenuItem({
  itemID,
  multiplier,
  display_name,
  color = "rgb(235, 235, 235)",
}) {
  const { addToCart } = useOrder();

  return (
    <button
      className="menu-item"
      onClick={() => addToCart(itemID, multiplier)}
      style={{ backgroundColor: color }}
    >
      {display_name}
    </button>
  );
}

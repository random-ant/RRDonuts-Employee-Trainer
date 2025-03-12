import useOrder from "../../hooks/useOrder";
import "./menu.css";

export default function MultipleMenuItem({
  itemID,
  display,
  multiplier = 12,
  color = "rgb(208, 208, 208)",
}) {
  const { addToCart } = useOrder();

  return (
    <button
      className="menu-item"
      onClick={() => addToCart(itemID, multiplier)}
      style={{ backgroundColor: color }}
    >
      {display}
    </button>
  );
}

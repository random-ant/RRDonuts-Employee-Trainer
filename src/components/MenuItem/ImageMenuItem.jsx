import useOrder from "../../hooks/useOrder";
import "./menu-item.css";

export default function ImageMenuItem({ itemID, itemName, src, bgColor }) {
  const { addToCart } = useOrder();
  const path = `./drinks-logos/${src}`;

  return (
    <button
      className="menu-item"
      onClick={() => addToCart(itemID, 1)}
      style={{
        backgroundImage: `url(${path})`,
        backgroundColor: bgColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "none",
        borderRadius: 0,
      }}
      src={path}
    />
  );
}

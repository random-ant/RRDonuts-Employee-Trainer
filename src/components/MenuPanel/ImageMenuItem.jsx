import useOrder from "../../hooks/useOrder";
import "./menu.css";

export default function ImageMenuItem({ itemID, src, bgColor }) {
  const { addToCart } = useOrder();
  const path = `static/drinks-logos/${src}`;

  return (
    <button
      className={"menu-item " + ""}
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

import useOrder from "../../hooks/useOrder";
import getItem from "../../helpers/menuItems";
import "./menu.css";

function deconstructRGB(rgbColor) {
  const values = rgbColor
    .substring(4, rgbColor.length - 1)
    .split(",")
    .map(Number);
  return {
    red: values[0],
    green: values[1],
    blue: values[2],
  };
}

function calculateTextColor(bgColor) {
  const { red, green, blue } = deconstructRGB(bgColor);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  console.log(brightness);
  return brightness > 150 ? "black" : "white";
}

export default function MenuItem({
  itemID,
  display = "",
  isDozen = false,
  color = "rgb(232, 230, 230)",
  className = "",
}) {
  const { addToCart } = useOrder();
  let item_name = getItem(itemID).display_name;
  if (display) item_name = display;

  let multiplier = 1;
  if (isDozen) multiplier = 12;

  return (
    <button
      className={"menu-item " + className}
      onClick={() => addToCart(itemID, multiplier)}
      style={{
        backgroundColor: color,
        color: calculateTextColor(color),
      }}
    >
      {/* {itemID}: <br /> */}
      {item_name}
    </button>
  );
}

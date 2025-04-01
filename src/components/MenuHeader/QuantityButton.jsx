import { useContext } from "react";
import { QuantityContext } from "../../helpers/context";
import "./menu-header.css";

function QuantityButton({ count }) {
  const { currItemQuantity, setCurrItemQuantity } = useContext(QuantityContext);

  return (
    <button
      className={`header-button ${currItemQuantity == count ? "active-header-button" : ""}`}
      onClick={() => {
        if (currItemQuantity == count) {
          setCurrItemQuantity(1);
        } else {
          setCurrItemQuantity(+count);
        }
      }}
    >
      {count}
    </button>
  );
}

export default QuantityButton;

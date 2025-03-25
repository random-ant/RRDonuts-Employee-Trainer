import { useContext } from "react";
import { QuantityContext } from "../../helpers/context";
import "./menu.css";

export default function MenuHeader() {
  return <QuantitySelectHeader />;
}

function QuantitySelectHeader() {
  return (
    <div className="quantity-select-container">
      <QuantityButton count={2} />
      <QuantityButton count={3} />
      <QuantityButton count={4} />
      <QuantityButton count={5} />
      <QuantityButton count={6} />
      <QuantityButton count={7} />
      <QuantityButton count={8} />
      <QuantityButton count={9} />
      <button id="memo-button">MEMO</button>
    </div>
  );
}

function QuantityButton({ count }) {
  const { currItemQuantity, setCurrItemQuantity } = useContext(QuantityContext);

  return (
    <button
      className={`quantity-button ${currItemQuantity == count ? "active-quantity" : ""}`}
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

import { useContext } from "react";
import { QuantityContext } from "./context";
import DonutPage from "./DonutPage";
import "./menu.css";

export default function MenuPanel() {
  return (
    <>
      <div className="menu-container">
        <div className="quantity-select-container">
          <QuantityButton>2</QuantityButton>
          <QuantityButton>3</QuantityButton>
          <QuantityButton>4</QuantityButton>
          <QuantityButton>5</QuantityButton>
          <QuantityButton>6</QuantityButton>
          <QuantityButton>7</QuantityButton>
          <QuantityButton>8</QuantityButton>
          <QuantityButton>9</QuantityButton>
          <button>MEMO</button>
        </div>

        <DonutPage />

        <div className="menu-page-select">
          <button id="credit-card">CREDIT CARD</button>
          <button id="donuts">DONUTS</button>
          <button id="cake-donuts">CAKE DONUTS</button>
          <button id="filled">FILLED DONUTS</button>
          <button id="fritters">FRITTERS & TWISTS</button>
          <button id="baked">BAKED ITEMS</button>
          <button id="close-check">CLOSE CHECK</button>
          <button id="kolaches">KOLACHES</button>
          <button id="cakes-pies">CAKES PIES</button>
          <button id="cookies">COOKIES BREAD</button>
          <button id="merch">MERCH</button>
          <button id="drinks">DRINKS</button>
        </div>
      </div>
    </>
  );
}

function QuantityButton({ children }) {
  const { itemQuantity, setItemQuantity } = useContext(QuantityContext);

  return (
    <button class="quantity-button" onClick={() => setItemQuantity(+children)}>
      {children}
    </button>
  );
}

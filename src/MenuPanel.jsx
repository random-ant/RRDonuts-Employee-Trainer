import { useState, useContext } from "react";
import { QuantityContext } from "./context";
import {
  DonutPage,
  CakeDonutsPage,
  FilledDonutsPage,
  FrittersTwistsPage,
} from "./MenuPages";
import "./menu.css";

export default function MenuPanel() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <DonutPage />;
      case 2:
        return <CakeDonutsPage />;
      case 3:
        return <FilledDonutsPage />;
      case 4:
        return <FrittersTwistsPage />;
    }
  };

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

        <div class="menu-buttons-container">{renderPage()}</div>

        <div className="menu-page-select">
          <button id="credit-card">CREDIT CARD</button>
          <button onClick={() => setCurrentPage(1)} id="donuts">
            DONUTS
          </button>
          <button onClick={() => setCurrentPage(2)} id="cake-donuts">
            CAKE DONUTS
          </button>
          <button onClick={() => setCurrentPage(3)} id="filled">
            FILLED DONUTS
          </button>
          <button onClick={() => setCurrentPage(4)} id="fritters">
            FRITTERS & TWISTS
          </button>
          <button onClick={() => setCurrentPage(5)} id="baked">
            BAKED ITEMS
          </button>
          <button id="close-check">CLOSE CHECK</button>
          <button onClick={() => setCurrentPage(6)} id="kolaches">
            KOLACHES
          </button>
          <button onClick={() => setCurrentPage(7)} id="cakes-pies">
            CAKES PIES
          </button>
          <button onClick={() => setCurrentPage(8)} id="cookies">
            COOKIES BREAD
          </button>
          <button onClick={() => setCurrentPage(9)} id="merch">
            MERCH
          </button>
          <button onClick={() => setCurrentPage(10)} id="drinks">
            DRINKS
          </button>
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

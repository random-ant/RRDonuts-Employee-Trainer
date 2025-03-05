import { useState, useContext } from "react";
import { QuantityContext } from "../../helpers/context";
import { DonutPage, CakeDonutsPage, FilledDonutsPage, FrittersTwistsPage } from "./MenuPages";
import "./menu.css";

export default function MenuPanel() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <DonutPage />;
      // case 2:
      //   return <CakeDonutsPage />;
      // case 3:
      //   return <FilledDonutsPage />;
      // case 4:
      //   return <FrittersTwistsPage />;
    }
  };

  return (
    <div className="menu-container-outer">
      <div className="menu-container">
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

        <div className="menu-buttons-container">{renderPage()}</div>

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

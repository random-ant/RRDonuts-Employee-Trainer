import { useState } from "react";
import QuantitySelectHeader from "./QuantitySelectHeader";
import {
  DonutPage,
  CakeDonutsPage,
  FilledDonutsPage,
  FrittersTwistsPage,
  BakedItemsPage,
} from "../MenuPages/TopRowPages";
import {
  KolachesPage,
  CakesPiesPage,
  CookieBreadPage,
  MerchPage,
  DrinksPage,
} from "../MenuPages/BottomRowPages";
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
      case 5:
        return <BakedItemsPage />;
      case 6:
        return <KolachesPage />;
      case 7:
        return <CakesPiesPage />;
      case 8:
        return <CookieBreadPage />;
      case 9:
        return <MerchPage />;
      case 10:
        return <DrinksPage />;
    }
  };

  return (
    <div className="menu-container-outer">
      <div className="menu-container">
        <QuantitySelectHeader />
        <div className="menu-buttons-container">{renderPage()}</div>

        <div className="menu-page-select">
          <button id="credit-card" className="disabled-button">
            CREDIT CARD
          </button>
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
          <button id="close-check" className="disabled-button">
            CLOSE CHECK
          </button>
          <button onClick={() => setCurrentPage(6)} id="kolaches">
            KOLACHES
          </button>
          <button onClick={() => setCurrentPage(7)} id="cakes-pies">
            CAKES / PIES / DELIVERIES
          </button>
          <button onClick={() => setCurrentPage(8)} id="cookies">
            COOKIES / BREAD
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

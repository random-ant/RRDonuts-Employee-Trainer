import { useContext } from "react";
import MenuHeader from "./MenuHeader";
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
  CakesPage,
  CookieBreadPage,
  MerchPage,
  DrinksPage,
  HotCoffeePage,
  ColdCoffeePage,
} from "../MenuPages/BottomRowPages";
import "./menu.css";
import { CurrMenuPageContext } from "../../helpers/context";

export default function MenuPanel() {
  const { currMenuPage, setCurrMenuPage } = useContext(CurrMenuPageContext);

  const renderPage = () => {
    switch (currMenuPage) {
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
      case 7.5:
        return <CakesPage />;
      case 8:
        return <CookieBreadPage />;
      case 9:
        return <MerchPage />;
      case 10:
        return <DrinksPage />;
      case 11:
        return <HotCoffeePage />;
      case 12:
        return <ColdCoffeePage />;
    }
  };

  return (
    <div className="menu-container-outer">
      <div className="menu-container">
        <MenuHeader />
        <div className="menu-buttons-container">{renderPage()}</div>

        <div className="menu-page-select">
          <button id="credit-card" className="disabled-button">
            CREDIT CARD
          </button>
          <button onClick={() => setCurrMenuPage(1)} id="donuts">
            DONUTS
          </button>
          <button onClick={() => setCurrMenuPage(2)} id="cake-donuts">
            CAKE DONUTS
          </button>
          <button onClick={() => setCurrMenuPage(3)} id="filled">
            FILLED DONUTS
          </button>
          <button onClick={() => setCurrMenuPage(4)} id="fritters">
            FRITTERS & TWISTS
          </button>
          <button onClick={() => setCurrMenuPage(5)} id="baked">
            BAKED ITEMS
          </button>
          <button id="close-check" className="disabled-button">
            CLOSE CHECK
          </button>
          <button onClick={() => setCurrMenuPage(6)} id="kolaches">
            KOLACHES
          </button>
          <button onClick={() => setCurrMenuPage(7)} id="cakes-pies">
            CAKES / PIES / DELIVERIES
          </button>
          <button onClick={() => setCurrMenuPage(8)} id="cookies">
            COOKIES / BREAD
          </button>
          <button onClick={() => setCurrMenuPage(9)} id="merch">
            MERCH
          </button>
          <button onClick={() => setCurrMenuPage(10)} id="drinks">
            DRINKS
          </button>
        </div>
      </div>
    </div>
  );
}

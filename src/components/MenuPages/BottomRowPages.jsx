import { useContext } from "react";
import MenuItem from "../MenuItem/MenuItem";
import ImageMenuItem from "../MenuItem/ImageMenuItem";
import MemoButton from "../MenuHeader/MemoButton";
import { CurrMenuPageContext } from "../../helpers/context";
import "./menuPages.css";

export function KolachesPage() {
  return (
    <div className="kolache-container">
      <div className="kolache-section">
        <h2>Regular Kolache</h2>
        <div className="kolache-items">
          <MenuItem itemID={601} />
          <MenuItem itemID={602} color="rgb(159, 0, 0)" />
          <MenuItem isDozen itemID={601} display="DOZ REG PLAIN" />
          <MenuItem isDozen itemID={602} display="DZN REG CHEESE" color="rgb(159, 0, 0)" />
        </div>
      </div>

      <div className="separator"></div>

      <div className="kolache-section">
        <h2>Large Kolache</h2>
        <div className="kolache-items">
          <MenuItem itemID={603} color="rgb(247,212,33)" />
          <MenuItem itemID={604} color="rgb(117,204,55)" />
          <MenuItem isDozen itemID={603} display="DOZ LG CHEESE SAUS" color="rgb(247,212,33)" />
          <MenuItem
            isDozen
            itemID={604}
            display="DZN LG JAL/CHZ SAUS"
            color="rgb(117,204,55)"
          />
        </div>
      </div>
    </div>
  );
}

export function CakesPiesPage() {
  const { setCurrMenuPage } = useContext(CurrMenuPageContext);

  return (
    <div className="default-container">
      <MenuItem itemID={701} />
      <MenuItem itemID={702} />
      <button
        className="menu-item"
        style={{ backgroundColor: "rgb(0, 225, 255)" }}
        onClick={() => setCurrMenuPage(7.5)}
      >
        CAKES
      </button>
      <div className="spacer" />
      <MenuItem itemID={703} />
      <MenuItem itemID={704} color="rgb(247,105,26)" />
      <MenuItem itemID={705} color="rgb(166, 118, 94)" />
      <div className="spacer" />
      <MenuItem itemID={706} />
      <button className="menu-item disabled-button">DELIVERY</button>
      <button className="menu-item disabled-button">UNIFORM PURCHASE</button>
    </div>
  );
}

export function CakesPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={751} />
      <MenuItem itemID={752} />
      <MenuItem itemID={753} />
      <div className="spacer" />
      <MenuItem itemID={754} />
      <MenuItem itemID={755} />
      <MenuItem itemID={756} />
      <MenuItem itemID={757} />
      <MenuItem itemID={758} />
      <MenuItem itemID={759} />
      <MenuItem itemID={760} />
      <MenuItem itemID={761} />
      <MenuItem itemID={762} />
      <MenuItem itemID={763} />
    </div>
  );
}

export function CookieBreadPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={801} />
      <MenuItem itemID={802} />
      <MenuItem itemID={803} />
      <MenuItem itemID={804} />

      <MenuItem isDozen itemID={801} display="DOZ PLAIN T-C" />
      <MenuItem isDozen itemID={802} display="DZ POWDERED T-C" />
      <MenuItem isDozen itemID={803} display="DZ ICED TEACAKES" />
      <MenuItem itemID={805} />
      <MenuItem className="offset-left" itemID={806} />
      <MenuItem className="offset-left" itemID={807} color="rgb(247,105,26)" />
      <MenuItem className="offset-left" itemID={808} />
    </div>
  );
}

export function MerchPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={901} />
      <MenuItem itemID={902} />
      <MenuItem itemID={903} />
      <MenuItem itemID={904} />
      <MenuItem itemID={905} />
      <MenuItem itemID={906} />
      <MenuItem itemID={907} />
      <MenuItem itemID={908} />
      <MenuItem itemID={909} />
      <MenuItem itemID={910} />
      <MenuItem itemID={911} />
      <MenuItem itemID={912} />
      <MenuItem itemID={913} />
      <MenuItem itemID={914} />
      <MenuItem itemID={915} />
    </div>
  );
}

export function DrinksPage() {
  const { setCurrMenuPage } = useContext(CurrMenuPageContext);

  return (
    <div className="drinks-container">
      <div className="drinks-section">
        <MenuItem itemID={1001} display="COFFEE" color="rgb(132,82,60)" />
        <MenuItem itemID={1001} display="DECAF COFFEE" color="rgb(232, 85, 6)" />
        <div className="spacer" />
        <button
          className="menu-item"
          onClick={() => setCurrMenuPage(11)}
          style={{ backgroundColor: "rgb(161, 216, 255)" }}
        >
          HOT FLAVORED COFFEES
        </button>
        <button
          className="menu-item"
          onClick={() => setCurrMenuPage(12)}
          style={{ backgroundColor: "rgb(161, 216, 255)" }}
        >
          ICED COFFEES
        </button>
      </div>
      <div className="drinks-section">
        <ImageMenuItem itemID={1003} itemName="AQUAFINA" src="Aquafina.svg" />
        <MenuItem itemID={1051} display="ORANGE JUICE" color="rgb(255, 199, 108)" />
        <MenuItem itemID={1051} display="APPLE JUICE" color="rgb(247, 229, 31)" />
        <MenuItem itemID={1051} display="WHITE MILK" color="rgb(255, 255, 255)" />
        <MenuItem itemID={1051} display="CHOC MILK" color="rgb(132,82,60)" />
        <MenuItem itemID={1051} display="STRAW MILK" color="rgb(237,186,211)" />
      </div>
      <div className="drinks-section">
        <ImageMenuItem itemID={1003} itemName="PEPSI" src="Pepsi.svg" />
        <ImageMenuItem itemID={1003} itemName="DIET PEPSI" src="Diet-Pepsi-Logo.svg" />
        <ImageMenuItem itemID={1003} itemName="PEPSI ZERO" src="Pepsi_zerosugar_logo.png" />
        <ImageMenuItem itemID={1003} itemName="DR PEPPER" src="dr-pepper.png" bgColor="black" />
        <ImageMenuItem itemID={1003} itemName="DIET DR PEPPER" src="dr-pepper-diet-vector-logo.svg" />
      </div>
      <div className="drinks-section">
        <ImageMenuItem itemID={1003} itemName="SIERRA MIST" src="Sierra_mist_logo.png" />
        <ImageMenuItem itemID={1003} itemName="MOUNTAIN DEW" src="Mountain_Dew_logo.svg" bgColor="rgb(148, 201, 61)" />
        <MenuItem itemID={1003} display="LEMONADE" color="rgb(255, 244, 123)" />
        <MenuItem itemID={1005} display="SWEET TEA" color="rgb(255, 166, 133)" />
        <MenuItem itemID={1005} display="1/2 TEA" color="rgb(249, 231, 187)" />
        <MenuItem itemID={1005} display="UNSWEET TEA" color="rgb(247, 229, 31)" />
      </div>
      <div className="drinks-section">
        <MenuItem itemID={1003} display="ROOT BEER" color="rgb(232, 85, 6)" />
        <MenuItem itemID={1003} display="GATORADE" color="rgb(1, 142, 1)" />
        <MenuItem itemID={1052} />
        <MenuItem itemID={1053} />
        <MenuItem itemID={1054} />
        <MemoButton />
      </div>
    </div>
  );
}

export function HotCoffeePage() {
  return (
    <div className="default-container">
      <MenuItem display="HOT CARAMEL MOCHA" itemID={1011} />
      <MenuItem display="HOT CARAMEL" itemID={1011} />
      <MenuItem display="HOT MOCHA" itemID={1011} />
      <div className="spacer" />
      <MenuItem display="HOT VANILLA" itemID={1011} />
      <MenuItem display="HOT WHITE CHOC" itemID={1011} />
      <MenuItem display="HOT PUMPKIN" itemID={1011} color="rgb(247,105,26)" />
      <MenuItem display="HOT PEPPERMINT WHITE CHOC" itemID={1011} color="rgb(251, 35, 35)" />
    </div>
  );
}

export function ColdCoffeePage() {
  return (
    <div className="default-container">
      <MenuItem display="" itemID={1007} />
      <MenuItem display="" itemID={1007} />
      <div className="spacer" />
      <MenuItem display="" itemID={1007} color="rgb(251, 35, 35)" />
      <MenuItem display="" itemID={1007} />
      <MenuItem display="" itemID={1007} />
      <MenuItem display="" itemID={1007} />
      <div className="spacer" />
      <MenuItem display="" itemID={1007} />
      <MenuItem display="" itemID={1007} />
      <MenuItem display="" itemID={1009} />
    </div>
  );
}

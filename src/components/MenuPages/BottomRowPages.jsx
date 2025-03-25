import { useContext } from "react";
import MenuItem from "../MenuPanel/MenuItem";
import ImageMenuItem from "../MenuPanel/ImageMenuItem";
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
          <MenuItem isDozen itemID={603} display="DOZ REG PLAIN" color="rgb(247,212,33)" />
          <MenuItem isDozen itemID={604} display="DZN REG CHEESE" color="rgb(117,204,55)" />
        </div>
      </div>
    </div>
  );
}

export function CakesPiesPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={701} />
      <MenuItem itemID={702} />
      <button
        className="menu-item disabled-button"
        style={{ backgroundColor: "rgb(0, 225, 255)" }}
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

export function CakesPage() {}

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
        <MenuItem itemID={1001} color="rgb(132,82,60)" />
        <MenuItem itemID={1002} color="rgb(232, 85, 6)" />
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
        <ImageMenuItem itemID={1003} src="Aquafina.svg" />
        <MenuItem itemID={1004} color="rgb(255, 199, 108)" />
        <MenuItem itemID={1005} color="rgb(247, 229, 31)" />
        <MenuItem itemID={1006} color="rgb(255, 255, 255)" />
        <MenuItem itemID={1007} color="rgb(132,82,60)" />
        <MenuItem itemID={1008} color="rgb(237,186,211)" />
      </div>
      <div className="drinks-section">
        <ImageMenuItem itemID={1009} src="Pepsi.svg" />
        <ImageMenuItem itemID={1010} src="Diet-Pepsi-Logo.svg" />
        <ImageMenuItem itemID={1011} src="Pepsi_zerosugar_logo.png" />
        <ImageMenuItem itemID={1012} src="dr-pepper.png" bgColor="black" />
        <ImageMenuItem itemID={1013} src="dr-pepper-diet-vector-logo.svg" />
      </div>
      <div className="drinks-section">
        <ImageMenuItem itemID={1014} src="Sierra_mist_logo.png" />
        <ImageMenuItem itemID={1015} src="Mountain_Dew_logo.svg" bgColor="rgb(148, 201, 61)" />
        <MenuItem itemID={1016} color="rgb(255, 244, 123)" />
        <MenuItem itemID={1017} color="rgb(255, 166, 133)" />
        <MenuItem itemID={1018} color="rgb(249, 231, 187)" />
        <MenuItem itemID={1019} color="rgb(247, 229, 31)" />
      </div>
      <div className="drinks-section">
        <MenuItem itemID={1020} color="rgb(232, 85, 6)" />
        <MenuItem itemID={1021} color="rgb(1, 142, 1)" />
        <MenuItem itemID={1022} />
        <MenuItem itemID={1023} />
        <MenuItem itemID={1024} />
      </div>
    </div>
  );
}

export function HotCoffeePage() {
  return (
    <div className="default-container">
      <MenuItem itemID={1101} />
      <MenuItem itemID={1102} />
      <MenuItem itemID={1103} />
      <div className="spacer" />
      <MenuItem itemID={1104} />
      <MenuItem itemID={1105} />
      <MenuItem itemID={1106} color="rgb(247,105,26)" />
      <MenuItem itemID={1107} color="rgb(251, 35, 35)" />
    </div>
  );
}

export function ColdCoffeePage() {
  return (
    <div className="default-container">
      <MenuItem itemID={1151} />
      <MenuItem itemID={1152} />
      <div className="spacer" />
      <MenuItem itemID={1153} color="rgb(251, 35, 35)" />
      <MenuItem itemID={1154} />
      <MenuItem itemID={1155} />
      <MenuItem itemID={1156} />
      <div className="spacer" />
      <MenuItem itemID={1157} />
      <MenuItem itemID={1158} />
      <MenuItem itemID={1159} />
    </div>
  );
}

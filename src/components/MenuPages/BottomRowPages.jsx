import MenuItem from "../MenuPanel/MenuItem";
import MultipleMenuItem from "../MenuPanel/MultipleMenuItem";
import "./menuPages.css";

export function KolachesPage() {}

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
      <div className="spacer" />
      <div className="spacer" />
      <div className="spacer" />
      <div className="spacer" />
      <div className="spacer" />
      <div className="spacer" />
    </div>
  );
}

export function CakesPage() {}

export function CookieBreadPage() {}

export function MerchPage() {}

export function DrinksPage() {}

export function HotCoffeePage() {}

export function ColdCoffeePage() {}

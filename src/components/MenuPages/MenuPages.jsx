import MenuItem from "../MenuPanel/MenuItem";
import MultipleMenuItem from "../MenuPanel/MultipleMenuItem";
import "./menuPages.css";

export function DonutPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={101} color="rgb(216,134,73)" />
      <MenuItem itemID={102} color="rgb(132,82,60)" />
      <MenuItem itemID={103} color="rgb(237,186,211)" />
      <MenuItem itemID={104} color="rgb(192,125,70)" />
      <MultipleMenuItem itemID={101} display="DOZ RR" color="rgb(216,134,73)" />
      <MultipleMenuItem itemID={102} display="DOZ CHOC RR" color="rgb(132,82,60)" />
      <MultipleMenuItem itemID={103} display="DOZ STRAW" color="rgb(237,186,211)" />
      <MultipleMenuItem itemID={104} display="DOZ MAPLE" color="rgb(192,125,70)" />
      <MenuItem itemID={105} color="rgb(216,134,73)" />
      <MenuItem itemID={106} color="rgb(132,82,60)" />
      <MenuItem itemID={107} color="rgb(237,186,211)" />
      <MenuItem itemID={108} color="rgb(214,97,52)" />
      <MenuItem itemID={109} color="rgb(132,82,60)" />
      <MultipleMenuItem itemID={106} display="DOZ CHOC SPRINK" color="rgb(132,82,60)" />
      <MultipleMenuItem itemID={107} display="DOZ STRAW SPRINKLED" color="rgb(237,186,211)" />
      <MultipleMenuItem itemID={108} display="DOZ HOLES" color="rgb(214,97,52)" />
      <MenuItem itemID={110} color="rgb(132,82,60)" />
      <MultipleMenuItem itemID={111} display="CUSTOM: TODO" color="rgb(227,120,64)" />
      <MenuItem itemID={111} color="rgb(0,158,238)" />
      <MenuItem itemID={112} />
    </div>
  );
}

export function CakeDonutsPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={201} />
      <MenuItem itemID={202} color="rgb(132,82,60)" />
      <MenuItem itemID={203} color="rgb(0,81,237)" />
      <MenuItem itemID={204} />
      <MultipleMenuItem itemID={201} display="DOZ PLAIN CAKE" />
      <MultipleMenuItem itemID={202} display="DOZ CHOC CAKE" color="rgb(132,82,60)" />
      <MultipleMenuItem itemID={203} display="DOZ BLUEBERRY CAKE" color="rgb(0,81,237)" />
      <MultipleMenuItem itemID={204} display="DOZ SPICE CAKE" />
      <MenuItem itemID={205} color="rgb(255, 255, 255)" />
      <MenuItem itemID={206} color="rgb(221,168,129)" />
      <MenuItem itemID={207} />
      <MenuItem itemID={208} />
      <MultipleMenuItem itemID={205} display="DOZ POWDER CAKE" color="rgb(255, 255, 255)" />
      <MultipleMenuItem itemID={206} display="DOZ CINN SUGAR" color="rgb(221,168,129)" />
      <MultipleMenuItem itemID={207} display="DOZ DOUBLE CHOC CAKE" />
      <MultipleMenuItem itemID={208} display="DOZ CHOC DIP PLAIN CAKE" />
      <MenuItem itemID={209} color="rgb(159,109,234)" />
      <MenuItem itemID={210} />
      <MenuItem itemID={211} color="rgb(247,105,26)" />
      <MenuItem itemID={212} color="rgb(235,45,41)" />
    </div>
  );
}

export function FilledDonutsPage() {}

export function FrittersTwistsPage() {
  return (
    <div className="fritters-container">
      <MenuItem itemID={401} color="rgb(247,212,33)" />
      <MenuItem itemID={402} color="rgb(117,204,55)" />
      <MultipleMenuItem itemID={401} display="DZ TWIST" color="rgb(247,212,33)" />
      <MultipleMenuItem itemID={402} display="DZ FRITTER" color="rgb(117,204,55)" />
    </div>
  );
}

export function BakedItemsPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={501} />
      <MenuItem itemID={502} />
      <MenuItem itemID={503} color="" />
      <MenuItem itemID={504} color="" />
      <MenuItem itemID={505} />
      <MenuItem itemID={506} color="" />
      <MenuItem itemID={507} color="" />
      <MenuItem itemID={508} color="" />
      <MultipleMenuItem itemID={505} display="DOZ CREAM CHZ KOLACHE" />
      <MultipleMenuItem itemID={506} display="DOZ STRAWBERRY KOLACHE" />
      <MultipleMenuItem itemID={507} display="DOZ BLUEBERRY KOLACHE" />
      <MultipleMenuItem itemID={508} display="DOZ CHERRY KOLACHE" />
      <div className="spacer"></div>
      <MenuItem itemID={509} color="" />
      <MenuItem itemID={510} color="" />
      <div className="spacer"></div>
    </div>
  );
}

export function KolachesPage() {}

export function CakesPiesPage() {}

export function CakesPage() {
  return <div className="default-container">
    
  </div>;
}

export function CookieBreadPage() {}

export function MerchPage() {}

export function DrinksPage() {}

export function HotCoffeePage() {}

export function ColdCoffeePage() {}

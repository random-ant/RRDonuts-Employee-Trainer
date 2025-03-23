import MenuItem from "../MenuPanel/MenuItem";
import "./menuPages.css";
import "../MenuPanel/menu.css";

export function DonutPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={101} color="rgb(216,134,73)" />
      <MenuItem itemID={102} color="rgb(132,82,60)" />
      <MenuItem itemID={103} color="rgb(237,186,211)" />
      <MenuItem itemID={104} color="rgb(192,125,70)" />
      <MenuItem isDozen itemID={101} display="DOZ RR" color="rgb(216,134,73)" />
      <MenuItem isDozen itemID={102} display="DOZ CHOC RR" color="rgb(132,82,60)" />
      <MenuItem isDozen itemID={103} display="DOZ STRAW" color="rgb(237,186,211)" />
      <MenuItem isDozen itemID={104} display="DOZ MAPLE" color="rgb(192,125,70)" />
      <MenuItem itemID={105} color="rgb(216,134,73)" />
      <MenuItem itemID={106} color="rgb(132,82,60)" />
      <MenuItem itemID={107} color="rgb(237,186,211)" />
      <MenuItem itemID={108} color="rgb(214,97,52)" />
      <MenuItem itemID={109} color="rgb(132,82,60)" />
      <MenuItem isDozen itemID={106} display="DOZ CHOC SPRINK" color="rgb(132,82,60)" />
      <MenuItem isDozen itemID={107} display="DOZ STRAW SPRINKLED" color="rgb(237,186,211)" />
      <MenuItem isDozen itemID={108} display="DOZ HOLES" color="rgb(214,97,52)" />
      <MenuItem itemID={110} color="rgb(132,82,60)" />
      <MenuItem isDozen itemID={111} display="CUSTOM: TODO" color="rgb(227,120,64)" />
      <MenuItem itemID={111} color="rgb(0,158,238)" />
      <MenuItem itemID={112} />
    </div>
  );
}

export function CakeDonutsPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={201} />
      <MenuItem itemID={202} color="rgb(132, 82, 60)" />
      <MenuItem itemID={203} color="rgb(0,81,237)" />
      <MenuItem itemID={204} />
      <MenuItem isDozen itemID={201} display="DOZ PLAIN CAKE" />
      <MenuItem isDozen itemID={202} display="DOZ CHOC CAKE" color="rgb(132,82,60)" />
      <MenuItem isDozen itemID={203} display="DOZ BLUEBERRY CAKE" color="rgb(0,81,237)" />
      <MenuItem isDozen itemID={204} display="DOZ SPICE CAKE" />
      <MenuItem itemID={205} color="rgb(255, 255, 255)" />
      <MenuItem itemID={206} color="rgb(221,168,129)" />
      <MenuItem itemID={207} />
      <MenuItem itemID={208} />
      <MenuItem isDozen itemID={205} display="DOZ POWDER CAKE" color="rgb(255, 255, 255)" />
      <MenuItem isDozen itemID={206} display="DOZ CINN SUGAR" color="rgb(221,168,129)" />
      <MenuItem isDozen itemID={207} display="DOZ DOUBLE CHOC CAKE" />
      <MenuItem isDozen itemID={208} display="DOZ CHOC DIP PLAIN CAKE" />
      <MenuItem itemID={209} color="rgb(156, 98, 244)" />
      <MenuItem itemID={210} />
      <MenuItem itemID={211} color="rgb(247,105,26)" />
      <MenuItem itemID={212} color="rgb(235,45,41)" />
    </div>
  );
}

export function FilledDonutsPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={301} color="rgb(132,82,60)" />
      <MenuItem itemID={302} />
      <MenuItem itemID={303} color="rgb(249, 231, 187)" />
      <MenuItem itemID={304} color="rgb(197, 158, 255)" />

      <MenuItem isDozen itemID={301} display="DOZ ECLAIR" color="rgb(132,82,60)" />
      <MenuItem isDozen itemID={302} display="DOZ CREAM BISMARK" />
      <MenuItem isDozen itemID={303} display="DOZ BAVARIAN CREAM" color="rgb(249, 231, 187)" />
      <button className="disabled-button menu-item" id="filled-add-choc">
        Add Choc
      </button>
      <MenuItem itemID={305} color="rgb(247, 229, 31)" />
      <MenuItem itemID={306} color="rgb(189, 0, 0)" />
      <MenuItem itemID={307} color="rgb(248, 100, 100)" />
      <div className="spacer" />
      <MenuItem isDozen itemID={305} display="DOZ LEMON" color="rgb(247, 229, 31)" />
      <MenuItem isDozen itemID={306} display="DOZ STRAWBERRY FILLED" color="rgb(189, 0, 0)" />
      <MenuItem isDozen itemID={307} display="DOZ CHERRY" color="rgb(248, 100, 100)" />
    </div>
  );
}

export function FrittersTwistsPage() {
  return (
    <div className="fritters-container">
      <MenuItem itemID={401} color="rgb(247,212,33)" />
      <MenuItem itemID={402} color="rgb(117,204,55)" />
      <MenuItem isDozen itemID={401} display="DZ TWIST" color="rgb(247,212,33)" />
      <MenuItem isDozen itemID={402} display="DZ FRITTER" color="rgb(117,204,55)" />
    </div>
  );
}

export function BakedItemsPage() {
  return (
    <div className="default-container">
      <MenuItem itemID={501} />
      <MenuItem itemID={502} />
      <MenuItem itemID={503} color="rgb(76, 171, 254)" />
      <MenuItem itemID={504} color="rgb(254, 212, 0)" />
      <MenuItem itemID={505} />
      <MenuItem itemID={506} color="rgb(251, 35, 35)" />
      <MenuItem itemID={507} color="rgb(21, 103, 255)" />
      <MenuItem itemID={508} color="rgb(255, 124, 124)" />
      <MenuItem isDozen itemID={505} display="DOZ CREAM CHZ KOLACHE" />
      <MenuItem
        isDozen
        itemID={506}
        display="DOZ STRAWBERRY KOLACHE"
        color="rgb(251, 35, 35)"
      />
      <MenuItem
        isDozen
        itemID={507}
        display="DOZ BLUEBERRY KOLACHE"
        color="rgb(21, 103, 255)"
      />
      <MenuItem isDozen itemID={508} display="DOZ CHERRY KOLACHE" color="rgb(255, 124, 124)" />
      <div className="spacer" />
      <MenuItem itemID={509} color="rgb(225, 174, 255)" />
      <MenuItem itemID={510} color="rgb(247,105,26)" />
      <div className="spacer" />
    </div>
  );
}

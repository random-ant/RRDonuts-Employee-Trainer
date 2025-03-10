import MenuItem from "./MenuItem";
import MultipleMenuItem from "./MultipleMenuItem";
import "./menu.css";

export function DonutPage() {
  return (
    <div className="donut-container">
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
    <div className="donut-container">
      <MenuItem>PLAIN CAKE</MenuItem>
      <MenuItem color="rgb(132,82,60)">CHOCOLATE CAKE</MenuItem>
      <MenuItem color="rgb(0,81,237)">BLUEBERRY CAKE</MenuItem>
      <MenuItem>SPICE CAKE</MenuItem>
      <MenuItem>DOZ PLAIN CAKE</MenuItem>
      <MenuItem color="rgb(132,82,60)">DOZ CHOC CAKE</MenuItem>
      <MenuItem color="rgb(0,81,237)">DOZ BLUEBERRY CAKE</MenuItem>
      <MenuItem>DOZ SPICE CAKE</MenuItem>
      <MenuItem>POWDERED CAKE</MenuItem>
      <MenuItem color="rgb(221,168,129)">CINNAMON SUGAR</MenuItem>
      <MenuItem>DOUBLE CHOC CAKE</MenuItem>
      <MenuItem>CHOP DIP PLAIN CAKE</MenuItem>
      <MenuItem>DOZ POWDER CAKE</MenuItem>
      <MenuItem color="rgb(221,168,129)">DOZ CINN SUGAR</MenuItem>
      <MenuItem>DOZ DOUBLE CHOC CAKE</MenuItem>
      <MenuItem>DOZ CHOC DIP PLAIN CAKE</MenuItem>
      <MenuItem color="rgb(159,109,234)">DOZ MIXED CAKE</MenuItem>
      <MenuItem>*OPEN DONUT*</MenuItem>
      <MenuItem color="rgb(247,105,26)">PUMPKIN CAKE</MenuItem>
      <MenuItem color="rgb(235,45,41)">RED VELVET CAKE</MenuItem>
    </div>
  );
}

export function FilledDonutsPage() {}

export function FrittersTwistsPage() {
  return (
    <div className="fritters-container">
      <MenuItem color="rgb(247,212,33)">CINNAMON TWIST</MenuItem>
      <MenuItem color="rgb(117,204,55)">APPLE FRITTER</MenuItem>
      <MenuItem color="rgb(247,212,33)">DZ TWIST</MenuItem>
      <MenuItem color="rgb(117,204,55)">DZ FRITTER</MenuItem>
    </div>
  );
}

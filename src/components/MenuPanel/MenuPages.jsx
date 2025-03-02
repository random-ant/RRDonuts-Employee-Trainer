import MenuItem from "./MenuItem";
import "./menu.css";

export function DonutPage() {
  return (
    <>
      <div className="donut-container">
        <MenuItem color="rgb(216,134,73)">GLAZED RR</MenuItem>
        <MenuItem color="rgb(132,82,60)">CHOCOLATE RR</MenuItem>
        <MenuItem color="rgb(237,186,211)">STRAW ICED</MenuItem>
        <MenuItem color="rgb(192,125,70)">MAPLE</MenuItem>
        <MenuItem color="rgb(216,134,73)">DOZ RR</MenuItem>
        <MenuItem color="rgb(132,82,60)">DOZ CHOC RR</MenuItem>
        <MenuItem color="rgb(237,186,211)">DOZ STRAW</MenuItem>
        <MenuItem color="rgb(192,125,70)">DOZ MAPLE</MenuItem>
        <MenuItem color="rgb(216,134,73)">TX GLAZED</MenuItem>
        <MenuItem color="rgb(132,82,60)">CHOC SPRINKLED</MenuItem>
        <MenuItem color="rgb(237,186,211)">STRAW SPRINKLED</MenuItem>
        <MenuItem color="rgb(214,97,52)">SINGLE HOLE</MenuItem>
        <MenuItem color="rgb(132,82,60)">TX CHOCOLATE</MenuItem>
        <MenuItem color="rgb(132,82,60)">DOZ CHOC SPRINK</MenuItem>
        <MenuItem color="rgb(237,186,211)">DZN STRAW SPRINKLED</MenuItem>
        <MenuItem color="rgb(214,97,52)">DOZ HOLES</MenuItem>
        <MenuItem color="rgb(132,82,60)">TX 1/2 CHOCOLATE</MenuItem>
        <MenuItem color="rgb(227,120,64)">1 DZ 6 GLAZED/6 CHOC</MenuItem>
        <MenuItem color="rgb(0,158,238)">DOZ MIXED DONUTS</MenuItem>
        <MenuItem>GRANULATED RR</MenuItem>
      </div>
    </>
  );
}

export function CakeDonutsPage() {
  return (
    <>
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
        <MenuItem> *OPEN DONUT*</MenuItem>
        <MenuItem color="rgb(247,105,26)">PUMPKIN CAKE</MenuItem>
        <MenuItem color="rgb(235,45,41)">RED VELVET CAKE</MenuItem>
      </div>
    </>
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

import MenuItem from "./MenuItem";
import "./menu.css";

export default function DonutPage() {
  return (
    <>
      <div class="donut-container">
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
        <MenuItem color="">GRANULATED RR</MenuItem>
      </div>
    </>
  );
}

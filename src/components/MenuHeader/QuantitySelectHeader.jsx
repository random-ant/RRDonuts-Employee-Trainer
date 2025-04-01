import QuantityButton from "./QuantityButton";
import MemoButton from "./MemoButton";
import "./menu-header.css";

function QuantitySelectHeader() {
  return (
    <div className="quantity-select-container">
      <QuantityButton count={2} />
      <QuantityButton count={3} />
      <QuantityButton count={4} />
      <QuantityButton count={5} />
      <QuantityButton count={6} />
      <QuantityButton count={7} />
      <QuantityButton count={8} />
      <QuantityButton count={9} />
      <MemoButton />
    </div>
  );
}

export default QuantitySelectHeader;

import useOrder from "../../hooks/useOrder";
import "./prices.css";

export default function PriceList() {
  const { getSubtotal, getPriceDiscount } = useOrder();

  const subtotal = getSubtotal();
  const priceDiscount = getPriceDiscount();
  const tax = 0;
  const finalPrice = subtotal - priceDiscount + tax;

  return (
    <div className="price-container">
      <div className="price-label">Subtotal:</div>
      <div className="price-cost">${subtotal.toFixed(2)}</div>

      <div className="price-label">Discount:</div>
      <div className="price-cost" style={{ color: "rgb(212, 0, 0)" }}>
        – ${getPriceDiscount().toFixed(2)}
      </div>

      <div className="price-label">Tax:</div>
      <div className="price-cost">${tax.toFixed(2)}</div>

      <div className="price-label">Total:</div>
      <div className="price-cost">${finalPrice.toFixed(2)}</div>

      <div className="price-label final-price-row">Balance Due:</div>
      <div className="price-cost final-price-row">${finalPrice.toFixed(2)}</div>
    </div>
  );
}

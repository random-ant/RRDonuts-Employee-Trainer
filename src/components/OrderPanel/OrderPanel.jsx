import { useContext } from "react";
import { OrderContext, SelectedItemsContext } from "../../helpers/context";
import "./orders.css";

export default function OrderPanel() {
  const { userOrder } = useContext(OrderContext);
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);

  function updateSelectedItems(itemIndex) {
    if (selectedItems.includes(itemIndex)) {
      // if already selected, remove from selected
      setSelectedItems(selectedItems.filter((item) => item != itemIndex));
    } else {
      // else, add to selected
      setSelectedItems([...selectedItems, itemIndex]);
    }
  }

  return (
    <>
      <div className="order-container">
        {userOrder.map((item, index) => (
          <div
            key={index}
            className={`order-item ${
              selectedItems.includes(index) ? "selected-item" : ""
            }`}
            onClick={() => updateSelectedItems(index)}
          >
            {item.quantity} {"\t"}
            {item.name}
            <div className="order-modifications">
              <p>{item.memo && item.memo}</p>
              <p>{item.separate && "SEPARATE"}</p>
              <p>{item.boxed && "BOXED"}</p>
              <p>{item.addChocolate && "CHOC"}</p>
              <p>{item.addPowder && "POWDER"}</p>
              <p>{item.bag && "BAG"}</p>
              <p>{item.noAction && "NO ACTION"}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

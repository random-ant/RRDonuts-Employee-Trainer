import { useContext } from "react";
import { OrderContext, SelectedItemsContext } from "../../helpers/context";
import "./options.css";

export default function OptionsPanel() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);

  const clickDelete = () => {
    setUserOrder(
      userOrder.filter((item, index) => !selectedItems.includes(index))
    );
    setSelectedItems([]);
  };

  return (
    <div className="option-container">
      <button>CANCEL ORDER</button>
      <button>NAME TAB</button>
      <button>NEW ORDER</button>
      <button onClick={clickDelete}>DELETE</button>
      <button>QUANTITY</button>
      <button>MODIFY</button>
      <button>TO TENDERS</button>
      <button>CREDIT CARD</button>
      <button>TO HOME</button>
      <button>FUNCTION</button>
    </div>
  );
}

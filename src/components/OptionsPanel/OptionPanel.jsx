import { useContext } from "react";
import { OrderContext, SelectedItemsContext } from "../../helpers/context";
import useOrder from "../../hooks/useOrder";
import NameButton from "./OptionButtons/NameButton";
import NewOrderButton from "./OptionButtons/NewOrderButton";
import SideQuantityButton from "./OptionButtons/SideQuantityButton";
import CancelOrderButton from "./OptionButtons/CancelOrderButton";
import "./options.css";

export default function OptionsPanel() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const { deleteItems, deleteOneItemInstance } = useOrder();

  const clickDelete = () => {
    // delete one of last item if nothing is selected
    if (selectedItems.length === 0 && userOrder.length > 0) {
      deleteItems([userOrder.length - 1]);
    } 
    // otherwise, remove all selected items
    else {
      deleteItems(selectedItems, 999999); 
      setSelectedItems([]);
    }
  };

  return (
    <div className="option-container-outer">
      <div className="option-container-inner">
        <button id="exit-button" className="disabled-button">
          EXIT
        </button>
        <CancelOrderButton />
        <NameButton />
        <NewOrderButton />
        <button id="delete-button" onClick={clickDelete}>
          DELETE
        </button>
        <SideQuantityButton />
        <button id="modify-button" className="disabled-button">
          MODIFY
        </button>
        <button id="tenders-button" className="disabled-button">
          TO TENDERS
        </button>
        <button id="credit-card-button" className="disabled-button">
          CREDIT CARD
        </button>
        <button id="to-home-button" className="disabled-button">
          TO HOME
        </button>
        <button id="function-button" className="disabled-button">
          FUNCTION
        </button>
      </div>
    </div>
  );
}

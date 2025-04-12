import { useState, useContext } from "react";
import { CurrMenuPageContext, ModsContext, SelectedItemsContext } from "../../helpers/context";
import useMods from "../../hooks/useMods";
import useOrder from "../../hooks/useOrder";
import Popup from "../Popup/Popup";
import "./menu-header.css";

function MemoButton() {
  const { mods } = useContext(ModsContext);
  const { currMenuPage } = useContext(CurrMenuPageContext);
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const { modifyItemMemos } = useOrder();
  const { setMemo } = useMods();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleClose = () => {
    // if items are selected in the order panel, set the memo for those items
    if (selectedItems.length > 0) {
      modifyItemMemos(selectedItems);
      setSelectedItems([]);
      setMemo(""); // clear the memo after setting it
    }

    // close the popup
    setPopupOpen(false); 
  }

  const handleInputChange = (event) => {
    var value = event.target.value;
    setMemo(value);
  };

  return (
    <>
      <button
        className="header-button memo-button"
        onClick={() => {
          setPopupOpen(true);
        }}
        style={{
          visibility: currMenuPage == 10 ? "hidden" : "visible",
        }}
      >
        MEMO
      </button>

      <Popup isOpen={isPopupOpen} onClose={handleClose}>
        <label>Enter Memo</label>
        <br />
        <input type="text" value={mods[mods.length - 1]} onChange={handleInputChange} />
      </Popup>
    </>
  );
}

export default MemoButton;

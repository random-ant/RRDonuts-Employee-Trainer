import { useState, useContext } from "react";
import { CurrMenuPageContext, ModsContext } from "../../helpers/Context";
import useMods from "../../hooks/useMods";
import Popup from "../Popup/Popup";
import "./menu-header.css";

function MemoButton() {
  const { mods } = useContext(ModsContext);
  const { currMenuPage } = useContext(CurrMenuPageContext);
  const { setMemo } = useMods();
  const [isPopupOpen, setPopupOpen] = useState(false);

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

      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <label>Enter Memo</label>
        <br />
        <input type="text" value={mods[mods.length - 1]} onChange={handleInputChange} />
      </Popup>
    </>
  );
}

export default MemoButton;

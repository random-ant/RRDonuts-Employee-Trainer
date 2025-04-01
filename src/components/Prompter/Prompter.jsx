import { useContext, useState } from "react";
import Popup from "../Popup/Popup";
import { SolutionContext } from "../../helpers/Context";
import "./prompter.css";

export default function Prompter() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { currSolution } = useContext(SolutionContext);

  return (
    <>
      <div className="prompt-container" onClick={() => setPopupOpen(true)}>
        <span className="customer-name-display">{currSolution.customer_name}</span>:{" "}
        {currSolution.prompt}
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <h3>Customer Order</h3>
        <br />
        <span className="customer-name-display">{currSolution.customer_name}</span>:{" "}
        {currSolution.prompt}
      </Popup>
    </>
  );
}

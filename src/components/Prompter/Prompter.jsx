import { useContext, useState } from "react";
import Popup from "../Popup/Popup";
import { SolutionContext } from "../../helpers/context";
import "./prompter.css";

export default function Prompter() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { currSolution } = useContext(SolutionContext);

  return (
    <>
      <div className="prompt-container" onClick={() => setPopupOpen(true)}>
        <span className="custName">{currSolution.customer_name}</span>: {currSolution.prompt}
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <h3>Customer Order</h3>
        <br />
        <span className="custName">{currSolution.customer_name}</span>: {currSolution.prompt}
      </Popup>
    </>
  );
}

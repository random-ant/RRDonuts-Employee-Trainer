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
        {currSolution.prompt}
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <p>This is a reusable popup component.</p>
      </Popup>
    </>
  );
}

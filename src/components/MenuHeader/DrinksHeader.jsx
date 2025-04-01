import MemoButton from "./MemoButton";
import useMods from "../../hooks/useMods";
import "./menu-header.css";

function DrinksHeader() {
  const { addModification, removeModification, hasModification } = useMods();

  return (
    <div className="drink-menu-header">
      <button className="header-button disabled-button">REGULAR</button>

      <MemoButton />

      <button
        className={"header-button " + (hasModification("large") ? "active-header-button" : "")}
        onClick={() => {
          if (hasModification("large")) removeModification("large");
          else addModification("large");
        }}
      >
        LARGE
      </button>
    </div>
  );
}

export default DrinksHeader;

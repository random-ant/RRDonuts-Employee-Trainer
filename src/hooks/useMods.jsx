import { useContext } from "react";
import { ModsContext } from "../helpers/context";

export default function useMods() {
  const { mods, setMods } = useContext(ModsContext);

  const addModification = (mod) => {
    if (hasModification(mod)) {
      // If the modification already exists, do nothing
      return;
    }

    // Otherwise, add the modification to the list in the 2nd to last position
    const newMods = [...mods];
    newMods.splice(newMods.length - 1, 0, mod);
    setMods(newMods);
    console.log("MODS", mods);
  };

  const removeModification = (mod) => {
    if (!hasModification(mod)) {
      // If the modification doesn't exist, do nothing
      return;
    }

    // Remove the modification from the list
    const newMods = mods.filter((m) => m.id !== mod.id);
    setMods(newMods);
  };

  const clearModsAndMemo = () => {
    setMods([""]); // Reset mods and memo
  };

  const getModifications = () => {
    return mods; // Exclude the last item (memo)
  };

  const getMemo = () => {
    return mods[mods.length - 1];
  };

  const setMemo = (newMemo) => {
    // change last index of mods
    setMods((prevMods) => {
      return prevMods.map((item, index) => {
        if (index == prevMods.length - 1) return newMemo;
        return item;
      });
    });
  };

  const hasModification = (mod) => {
    return mods.some((m) => m === mod);
  };

  return {
    addModification,
    removeModification,
    hasModification,
    getModifications,
    getMemo,
    setMemo,
    clearModsAndMemo,
  };
}

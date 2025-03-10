import { useContext } from "react";
import { OrderContext, SolutionContext } from "../helpers/context";
import { getRandSolution } from "../helpers/solutions";

export default function useSolution() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { currSolution, setCurrSolution } = useContext(SolutionContext);

  /**
   * Checks order against solution
   * @return {boolean} whether order matches solution or not
   */
  const checkOrder = () => {
    console.log(currSolution);
    var correct = true;
    for (const item of userOrder) {
      if (!currSolution.parts.has(item.id)) {
        // not in order
        correct = false;
        break;
      }

      const requirements = currSolution.parts.get(item.id);
      if (item.quantity != requirements.amount) correct = false;
    }

    if (correct) {
      // reset everything
      nextSolution();
    } else {
      //
    }

    return correct;
  };

  /**
   * Resets the state and randomizes to a new solution
   */
  const nextSolution = () => {
    setCurrSolution(getRandSolution());
    setUserOrder([]);
  };

  return { checkOrder, nextSolution };
}

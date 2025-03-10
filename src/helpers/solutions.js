const SOLUTION_LITERALS = [
  // customer_name, prompt, [[item_id, quantity, modifiers], ...[]]
  ["bob", "testing", [
    [101, 5, []],
    [106, 12, []]
  ]]
]

const SOLUTIONS = {};
for (let i=0; i<SOLUTION_LITERALS.length; i++) {
  const lit = SOLUTION_LITERALS[i];

  const inside_items = new Map();
  for (const item of lit[2]) {
    // [item_id] --> amount, modifiers
    inside_items.set(item[0], {
      amount: item[1],
      modifiers: item[2]
    })
  }

  const obj = {
    customer_name: lit[0],
    prompt: lit[1],
    parts: inside_items
  }
  SOLUTIONS[i] = obj;
}

export function getRandSolution() {
  const solutionID = Math.floor(Math.random() * SOLUTION_LITERALS.length);
  return getSolution(solutionID);
}

function getSolution(solutionID) {
  return SOLUTIONS[solutionID];
}
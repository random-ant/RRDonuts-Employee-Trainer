const SOLUTION_LITERALS = [
  // customer_name, prompt, [[item_id, quantity, modifiers], ...[]]
  ["bob", "TEST: name bob, 5x glazed, 12x chocolate sprinkled", [
    [101, 5, []],
    [106, 12, []]
  ]],
  ["", "Can I have 6 glazed donuts?", [
    [101, 6, []],
  ]],
  ["", "Can I have 6 glazed donuts and 6 chocolate donuts?", [
    [101, 6, []],
    [102, 6, []],
  ]],
  ["", "Can I have 4 glazed donuts, 4 chocolate donuts, and 4 strawberry iced donuts?", [
    [101, 4, []],
    [102, 4, []],
    [103, 4, []],
  ]],
  ["", "Can I have 3 glazed donuts, 2 blueberry cake donuts, 2 plain cake donuts, 2 chocolate cake donuts, and 2 spice cake donuts?", [
    [101, 3, []],
    [203, 2, []],
    [201, 2, []],
    [202, 2, []],
    [204, 2, []],
  ]],
  // ["", "Can I have 3 glazed donuts, 1dz donut holes, 2 white milks, and a regular iced latte?", [
  //   [101, 3, []],
  // ]],
  // ["", "Can I have a Texas-sized half-and-half donut, 2dz donut holes, 1 chocolate milk, and 1 regular sausage and cheese kolache?", [
  //   [101, 1, []],
  // ]],
  // ["", "Can I have 1 bavarian cream donut, 1 eclair, 1 cream bismark, 1 baked cinnamon roll, and 1 bottled water?", [
  //   [101, 1, []],
  // ]],
  // ["", "Can I have 3 glazed donuts, 3 maple donuts, 3 strawberry sprinkled donuts, 2 chocolate sprinkled donuts, 1 bavarian cream donut, 1dz donut holes, and 1 large Dr. Pepper?", [
  //   [101, 1, []],
  // ]],
  // ["", "Can I have 1 large jalapeno cheese kolache, 1 regular cheese kolache, 1 tx-sized cinnamon roll, and 1 regular coffee?", [
  //   [101, 1, []],
  // ]],
  // ["", "Can I have 1dz glazed donuts in two separate boxes?", [
  //   [101, 1, []],
  // ]],
  // ["", "Can I have 3 strawberry fruit kolaches, 2 glazed donuts, 2 blueberry fruit kolaches, 3 cream cheese kolaches, 2 maple donuts, and 3 regular cokes?", [
  //   [101, 1, []],
  // ]],
  // ["", "", [
  //   [101, 1, []],
  // ]],
  // ["", "", [
  //   [101, 1, []],
  // ]],

]

const SOLUTIONS = {};
for (let i = 0; i < SOLUTION_LITERALS.length; i++) {
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
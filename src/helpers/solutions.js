const SOLUTION_LITERALS = [
  // customer_name, prompt, [[item_id, quantity, [modifiers]], note/comment
  ["bob", "TEST: name bob, 5x glazed, 12x chocolate sprinkled", [
    [101, 5],
    [106, 12]
  ]],
  ["", "Can I have 6 glazed donuts?", [
    [101, 6],
  ]],
  ["", "Can I have 6 glazed donuts and 6 chocolate donuts?", [
    [101, 6],
    [102, 6],
  ]],
  ["", "Can I have 4 glazed donuts, 4 chocolate donuts, and 4 strawberry iced donuts?", [
    [101, 4],
    [102, 4],
    [103, 4],
  ]],
  ["", "Can I have 3 glazed donuts, 2 blueberry cake donuts, 2 plain cake donuts, 2 chocolate cake donuts, and 2 spice cake donuts?", [
    [101, 3],
    [203, 2],
    [201, 2],
    [202, 2],
    [204, 2],
  ], "Recognize the price break should be explained here. There are 10 donuts, the customer should be encouraged to order 2 more iced donuts/cake donuts for 8 cents."],
  ["", "Can I have 3 glazed donuts, 1dz donut holes, 2 white milks, and a regular iced latte?", [
    [101, 3],
    [108, 12],
    [1006, 2],
    [1154, 3, ["regular"]],
  ]],
  ["", "Can I have a Texas-sized half-and-half donut, 2dz donut holes, 1 chocolate milk, and 1 regular sausage and cheese kolache?", [
    [110, 1],
    [108, 24],
    [1007, 1],
    [602, 1],
  ], "Recognize that 2dz donut holes are being ordered so the order taker needs to ask if the customer wants them in separate bags (2bgs of 1dz) or to keep them in one bag."],
  ["", "Can I have 1 bavarian cream donut, 1 eclair, 1 cream bismark, 1 baked cinnamon roll, and 1 bottled water?", [
    [303, 1],
    [301, 1],
    [302, 1],
    [501, 1],
    [1022, 1],
  ]],
  ["", "Can I have 3 glazed donuts, 3 maple donuts, 3 strawberry sprinkled donuts, 2 chocolate sprinkled donuts, 1 bavarian cream donut, 1dz donut holes, and 1 large Dr. Pepper?", [
    [101, 3],
    [104, 3],
    [103, 3],
    [106, 2],
    [303, 1],
    [108, 12],
    [1012, 1, ["large"]],
  ], "Note: Recognize that there are 11 iced donuts. The price break rule also applies here. 11 donuts are $13.09 so tell the customer that if they add 1 more iced/cake donut it’ll be cheaper ($11.98). The bavarian cream donut doesn’t apply to the price break rule."],
  ["", "Can I have 1 large jalapeno cheese kolache, 1 regular cheese kolache, 1 tx-sized cinnamon roll, and 1 regular coffee?", [
    [604, 1],
    [602, 1],
    [502, 1],
    [1001, 1],
  ], "Recognize that they ordered a regular coffee and ask if they want to add any cream and sugar to their coffee."],
  ["", "Can I have 1dz glazed donuts in two separate boxes?", [
    [101, 12, ["MEMO: 2bx of 6 glazed donuts"]],
  ], "Need to type in the memo box '2bx of 6 glazed donuts'"],
  ["", "Can I have 3 strawberry fruit kolaches, 2 glazed donuts, 2 blueberry fruit kolaches, 3 cream cheese kolaches, 2 maple donuts, and 3 regular cokes?", [
    [506, 3],
    [101, 2],
    [507, 2],
    [505, 3],
    [104, 2],
    [1009, 3, ["regular"]],
  ], "Recognize that we don’t have coke. Offer Pepsi or Dr. Pepper instead. We don’t like saying we don’t have things without suggesting an alternative."],
]

const SOLUTIONS = {};
for (let i = 0; i < SOLUTION_LITERALS.length; i++) {
  const lit = SOLUTION_LITERALS[i];

  const inside_items = new Map();
  for (const item of lit[2]) {
    let mods = [];
    if (item.length > 2) {
      mods = item[2];
    }

    // [item_id] --> amount, modifiers
    inside_items.set(item[0], {
      amount: item[1],
      modifiers: mods
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
const SOLUTION_LITERALS = [
  {
    customer_name: "John",
    prompt: "Can I have 6 glazed donuts?",
    items: [
      { id: 101, quantity: 6 },
    ],
  },

  {
    customer_name: "Emily",
    prompt: "Can I have 6 glazed donuts and 6 chocolate donuts?",
    items: [
      { id: 101, quantity: 6 },
      { id: 102, quantity: 6 },
    ],
  },

  {
    customer_name: "Michael",
    prompt: "Can I have 4 glazed donuts, 4 chocolate donuts, and 4 strawberry iced donuts?",
    items: [
      { id: 101, quantity: 4 },
      { id: 102, quantity: 4 },
      { id: 103, quantity: 4 },
    ],
  },

  {
    customer_name: "Sarah",
    prompt: "Can I have 3 glazed donuts, 2 blueberry cake donuts, 2 plain cake donuts, 2 chocolate cake donuts, and 2 spice cake donuts?",
    prompt_note: "Mention the price break for adding 2 more iced/cake donuts for 8 cents. Assume the customer added 2 additional strawberry sprinkled donuts.",
    items: [
      { id: 101, quantity: 3 },
      { id: 203, quantity: 2 },
      { id: 201, quantity: 2 },
      { id: 202, quantity: 2 },
      { id: 204, quantity: 2 },
      { id: 107, quantity: 2 },
    ],
  },

  {
    customer_name: "David",
    prompt: "Can I have 3 glazed donuts, 1dz donut holes, 2 white milks, and a regular iced latte?",
    items: [
      { id: 101, quantity: 3 },
      { id: 108, quantity: 12 },
      { id: 1008, quantity: 2 },
      { id: 1069, quantity: 3 },
    ],
  },

  {
    customer_name: "Jessica",
    prompt: "Can I have a Texas-sized half-and-half donut, 2dz donut holes, 1 chocolate milk, and 1 regular sausage and cheese kolache?",
    prompt_note: "Ask if they want the 2dz donut holes in separate bags or one bag. Assume they wanted a separate bag.",
    items: [
      { id: 110, quantity: 1 },
      { id: 108, quantity: 24, modifiers: ["MEMO: separate"] },
      { id: 1009, quantity: 1 },
      { id: 602, quantity: 1 },
    ],
  },

  {
    customer_name: "Anthony",
    prompt: "Can I have 1 bavarian cream donut, 1 eclair, 1 cream bismark, 1 baked cinnamon roll, and 1 bottled water?",
    items: [
      { id: 303, quantity: 1 },
      { id: 301, quantity: 1 },
      { id: 302, quantity: 1 },
      { id: 501, quantity: 1 },
      { id: 1005, quantity: 1 },
    ],
  },

  {
    customer_name: "Laura",
    prompt: "Can I have 3 glazed donuts, 3 maple donuts, 3 strawberry sprinkled donuts, 2 chocolate sprinkled donuts, 1 Bavarian cream donut, 1dz donut holes, and 1 large Dr. Pepper?",
    prompt_note: "Mention that adding 1 more iced/cake donut will make the order cheaper because of the price break rule. Note Bavarian Cream doesn’t apply to price break. Assume the customer adds 1 extra glazed.",
    items: [
      { id: 101, quantity: 4 },
      { id: 104, quantity: 3 },
      { id: 107, quantity: 3 },
      { id: 106, quantity: 2 },
      { id: 303, quantity: 1 },
      { id: 108, quantity: 12 },
      { id: 1018, quantity: 1 },
    ],
  },

  {
    customer_name: "Daniel",
    prompt: "Can I have 1 large jalapeño cheese kolache, 1 regular cheese kolache, 1 TX-sized cinnamon roll, and 1 regular coffee?",
    prompt_note: "Ask if they want cream and sugar. Assume yes for both. You will need to use the MEMO modifier for this.",
    items: [
      { id: 604, quantity: 1 },
      { id: 602, quantity: 1 },
      { id: 502, quantity: 1 },
      { id: 1001, quantity: 1, modifiers: ["MEMO: cream sugar"] },
    ],
  },

  {
    customer_name: "Sophia",
    prompt: "Can I have 1dz glazed donuts in two separate boxes?",
    prompt_note: "Type in MEMO: “2bx of 6 glazed donuts.”",
    items: [
      { id: 101, quantity: 12, modifiers: ["MEMO: 2bx of 6 glazed donuts"] },
    ],
  },

  {
    customer_name: "Matthew",
    prompt: "Can I have 3 strawberry fruit kolaches, 2 glazed donuts, 2 blueberry fruit kolaches, 3 cream cheese kolaches, 2 maple donuts, and 3 regular Cokes?",
    prompt_note: "Mention that Coke isn’t available and offer Pepsi or Dr. Pepper instead. Assume they want Pepsi.",
    items: [
      { id: 506, quantity: 3 },
      { id: 101, quantity: 2 },
      { id: 507, quantity: 2 },
      { id: 505, quantity: 3 },
      { id: 104, quantity: 2 },
      { id: 1011, quantity: 3 },
    ],
  },

  {
    customer_name: "Keisha",
    prompt: "Can I have 2 glazed, 1dz donut holes, and 1 large Dr. Pepper?",
    items: [
      { id: 101, quantity: 2 },
      { id: 108, quantity: 12 },
      { id: 1018, quantity: 1 },
    ],
  },

  {
    customer_name: "Michael",
    prompt: "Can I have 1 TX glazed, 1 chocolate-covered, 1 large sausage & cheese kolache, and 1 bottled water?",
    items: [
      { id: 105, quantity: 1 },
      { id: 106, quantity: 1 },
      { id: 603, quantity: 1 },
      { id: 1005, quantity: 1 },
    ],
  },

  {
    customer_name: "Sophia",
    prompt: "Can I have 1 blueberry cake, 1 cinnamon roll, 1 Bavarian cream donut, and 1 large iced vanilla coffee?",
    items: [
      { id: 201, quantity: 1 },
      { id: 501, quantity: 1 },
      { id: 303, quantity: 1 },
      { id: 1076, quantity: 1 },
    ],
  },

  {
    customer_name: "Jamal",
    prompt: "Can I have 3 glazed, 1 apple fritter, 1 strawberry-filled donut, and 1 reg Pepsi?",
    items: [
      { id: 101, quantity: 3 },
      { id: 402, quantity: 1 },
      { id: 306, quantity: 1 },
      { id: 1011, quantity: 1 },
    ],
  },

  {
    customer_name: "Emily",
    prompt: "Can I have 1dz donut holes, 1 cream cheese fruit kolache, 1 lemon-filled donut, and 1 large hot black coffee?",
    items: [
      { id: 108, quantity: 12 },
      { id: 505, quantity: 1 },
      { id: 305, quantity: 1 },
      { id: 1002, quantity: 1 },
    ],
  },

  {
    customer_name: "Carlos",
    prompt: "Can I have 2 chocolate cake, 2 reg sausage kolaches, 1dz glazed, and 1 reg Starry?",
    prompt_note: "Starry = Sierra Mist. All meat kolaches come with sausage, but ask if the customer wants it with cheese or not. Assume they don't.",
    items: [
      { id: 202, quantity: 2 },
      { id: 601, quantity: 2 },
      { id: 101, quantity: 12 },
      { id: 1021, quantity: 1 },
    ],
  },

  {
    customer_name: "Ava",
    prompt: "Can I have 1 cinnamon twist, 1 cream cheese fruit kolache, 1 cream Bismark, and 1 large sweet tea?",
    items: [
      { id: 401, quantity: 1 },
      { id: 505, quantity: 1 },
      { id: 302, quantity: 1 },
      { id: 1028, quantity: 1 },
    ],
  },

  {
    customer_name: "David",
    prompt: "Can I have 1 glazed, 1 chocolate-covered, 1 lrg sausage & jalapeño kolache, 1 cherry-filled donut, and 1 reg orange juice?",
    items: [
      { id: 101, quantity: 1 },
      { id: 102, quantity: 1 },
      { id: 604, quantity: 1 },
      { id: 307, quantity: 1 },
      { id: 1006, quantity: 1 },
    ],
  },

  {
    customer_name: "Brianna",
    prompt: "Can I have 1dz glazed, 1 TX chocolate, 2 lrg sausage & cheese kolaches, and 1 reg sweet tea?",
    items: [
      { id: 101, quantity: 12 },
      { id: 109, quantity: 1 },
      { id: 603, quantity: 2 },
      { id: 1027, quantity: 1 },
    ],
  },

  {
    customer_name: "Marcus",
    prompt: "Can I have 2 apple fritters, 1 eclair, and 1 large iced caramel?",
    items: [
      { id: 402, quantity: 2 },
      { id: 301, quantity: 1 },
      { id: 1068, quantity: 1 },
    ],
  },

  {
    customer_name: "Jasmine",
    prompt: "Can I have 1 blueberry cake, 1 cinnamon roll, 1dz donut holes, 2 strawberry-filled donuts, and 1 reg Diet Dr. Pepper?",
    items: [
      { id: 203, quantity: 1 },
      { id: 501, quantity: 1 },
      { id: 108, quantity: 12 },
      { id: 306, quantity: 2 },
      { id: 1019, quantity: 1 },
    ],
  },

  {
    customer_name: "Ethan",
    prompt: "Can I have 1 TX half and half, 2reg cheese & sausage kolaches, 1 lemon-filled donut, and 1 large iced mocha?",
    items: [
      { id: 110, quantity: 1 },
      { id: 602, quantity: 2 },
      { id: 305, quantity: 1 },
      { id: 1072, quantity: 1 },
    ],
  },

  {
    customer_name: "Olivia",
    prompt: "Can I have 1 cherry fruit kolache, 1 chocolate cake, 2 Bavarian cream donuts, and 1 bottled water?",
    items: [
      { id: 508, quantity: 1 },
      { id: 202, quantity: 1 },
      { id: 303, quantity: 2 },
      { id: 1005, quantity: 1 },
    ],
  },

  {
    customer_name: "Darius",
    prompt: "Can I have 3 glazed, 1 reg sausage & cheese kolache, 1 apple fritter, 1 eclair, and a regular Pepsi Zero?",
    items: [
      { id: 101, quantity: 3 },
      { id: 601, quantity: 1 },
      { id: 402, quantity: 1 },
      { id: 301, quantity: 1 },
      { id: 1015, quantity: 1 },
    ],
  },

  {
    customer_name: "Natalie",
    prompt: "Can I have 1 cream cheese fruit kolache, 1 cinnamon roll, 1dz mixed donuts, and 1 large hot black decaf?",
    items: [
      { id: 505, quantity: 1 },
      { id: 501, quantity: 1 },
      { id: 111, quantity: 1 },
      { id: 1004, quantity: 1 },
    ],
  },

  {
    customer_name: "Jordan",
    prompt: "Can I have 1 chocolate-covered, 1 apple fritter, 1dz donut holes, 1 glazed, and 1 large lemonade?",
    items: [
      { id: 102, quantity: 1 },
      { id: 402, quantity: 1 },
      { id: 108, quantity: 12 },
      { id: 101, quantity: 1 },
      { id: 1026, quantity: 1 },
    ],
  },

  {
    customer_name: "Isabella",
    prompt: "Can I have 1 blueberry cake, 1 cream Bismark, 1 lrg cheese & sausage kolache, 1dz glazed, and 1 reg sweet tea?",
    items: [
      { id: 203, quantity: 1 },
      { id: 302, quantity: 1 },
      { id: 603, quantity: 1 },
      { id: 101, quantity: 12 },
      { id: 1027, quantity: 1 },
    ],
  },

  {
    customer_name: "Tyler",
    prompt: "Can I have 1 cinnamon twist, 2 reg sausage & cheese kolaches, 1 cherry-filled donut, and 1 large iced mocha?",
    items: [
      { id: 401, quantity: 1 },
      { id: 602, quantity: 2 },
      { id: 307, quantity: 1 },
      { id: 1072, quantity: 1 },
    ],
  },

  {
    customer_name: "Mia",
    prompt: "Can I have 2 glazed, 1dz donut holes, 1 eclair, and 1 reg root beer?",
    items: [
      { id: 101, quantity: 2 },
      { id: 108, quantity: 12 },
      { id: 301, quantity: 1 },
      { id: 1033, quantity: 1 },
    ],
  },

  {
    customer_name: "Sean",
    prompt: "Can I have 1 TX glazed, 1 chocolate cake, 1 Bavarian cream donut, 1 sausage & jalapeño kolache, and 1 reg black iced coffee?",
    items: [
      { id: 105, quantity: 1 },
      { id: 202, quantity: 1 },
      { id: 303, quantity: 1 },
      { id: 604, quantity: 1 },
      { id: 1065, quantity: 1 },
    ],
  },

  {
    customer_name: "Lily",
    prompt: "Can I have 1 TX glazed, 2 regular sausage and cheese kolaches, 1 strawberry-filled donut, and 1 large iced vanilla?",
    items: [
      { id: 105, quantity: 1 },
      { id: 602, quantity: 2 },
      { id: 306, quantity: 1 },
      { id: 1076, quantity: 1 },
    ],
  },

  {
    customer_name: "Zoe",
    prompt: "Can I have 1 cream Bismarck, 1 eclair, 1 apple fritter, and a Diet Pepsi?",
    items: [
      { id: 302, quantity: 1 },
      { id: 301, quantity: 1 },
      { id: 402, quantity: 1 },
      { id: 1013, quantity: 1 },
    ],
  },

  {
    customer_name: "Jaden",
    prompt: "Can I have 2 glazed, 1 blueberry cake, 1 large sausage and cheese kolache, and 1 large iced mocha?",
    items: [
      { id: 101, quantity: 2 },
      { id: 203, quantity: 1 },
      { id: 603, quantity: 1 },
      { id: 1072, quantity: 1 },
    ],
  },

  {
    customer_name: "Grace",
    prompt: "Can I have 1 cherry-filled donut, 2 cinnamon rolls, 1dz donut holes, and 1 big Starry?",
    prompt_note: "Starry = Sierra Mist",
    items: [
      { id: 307, quantity: 1 },
      { id: 501, quantity: 2 },
      { id: 108, quantity: 12 },
      { id: 1022, quantity: 1 },
    ],
  },

  {
    customer_name: "Elijah",
    prompt: "Can I have 1 sausage jalapeño and cheese kolache, 1 TX half and half, 1 lemon-filled donut, and 1 large iced caramel latte?",
    items: [
      { id: 604, quantity: 1 },
      { id: 110, quantity: 1 },
      { id: 305, quantity: 1 },
      { id: 1068, quantity: 1 },
    ],
  },

  {
    customer_name: "Maya",
    prompt: "Can I have 1 strawberry fruit kolache, 1 chocolate cake, 1 cream cheese fruit kolache, and 1 reg Dr. Pepper?",
    items: [
      { id: 506, quantity: 1 },
      { id: 202, quantity: 1 },
      { id: 505, quantity: 1 },
      { id: 1017, quantity: 1 },
    ],
  },

  {
    customer_name: "Noah",
    prompt: "Can I have 1 cinnamon twist, 1 regular sausage and cheese kolache, 2 strawberry-filled donuts, and 1 reg iced black coffee?",
    items: [
      { id: 401, quantity: 1 },
      { id: 602, quantity: 1 },
      { id: 306, quantity: 2 },
      { id: 1065, quantity: 1 },
    ],
  },

  {
    customer_name: "Sophie",
    prompt: "Can I have 1dz donut holes, 1 cherry fruit kolache, 1 Bavarian cream donut, and 1 large sweet tea?",
    items: [
      { id: 108, quantity: 12 },
      { id: 508, quantity: 1 },
      { id: 303, quantity: 1 },
      { id: 1028, quantity: 1 },
    ],
  },

  {
    customer_name: "Oliver",
    prompt: "Can I have 3 glazed, 1 large sausage and cheese kolache, 1 cream Bismarck, and 1 reg root beer?",
    items: [
      { id: 101, quantity: 3 },
      { id: 603, quantity: 1 },
      { id: 302, quantity: 1 },
      { id: 1033, quantity: 1 },
    ],
  },

  {
    customer_name: "Madison",
    prompt: "Can I have 1 TX chocolate, 2 glazed, 1dz donut holes, and 1 large iced mocha?",
    items: [
      { id: 109, quantity: 1 },
      { id: 101, quantity: 2 },
      { id: 108, quantity: 12 },
      { id: 1072, quantity: 1 },
    ],
  },

  {
    customer_name: "Nathan",
    prompt: "Can I have 1 glazed, 1 regular sausage and cheese kolache, half a dz donut holes, and 1 large sweet tea?",
    prompt_note: "half a dozen = 6",
    items: [
      { id: 101, quantity: 1 },
      { id: 602, quantity: 1 },
      { id: 108, quantity: 6 },
      { id: 1028, quantity: 1 },
    ],
  },
];

const SOLUTIONS = {};
for (let i = 0; i < SOLUTION_LITERALS.length; i++) {
  const lit = SOLUTION_LITERALS[i];

  const inside_items = new Map();
  for (const item of lit.items) {
    let mods = [];
    if (item.modifiers) {
      mods = item.modifiers;
    }

    // [item_id] --> amount, modifiers
    inside_items.set(item.id, {
      amount: item.quantity,
      modifiers: mods,
    });
  }

  let note = "";
  if (lit.prompt_note) {
    note = lit.prompt_note;
  }

  const obj = {
    customer_name: lit.customer_name,
    prompt: lit.prompt,
    prompt_note: note,
    parts: inside_items,
  };
  SOLUTIONS[i] = obj;
}

export function getRandSolution() {
  const solutionID = Math.floor(Math.random() * SOLUTION_LITERALS.length);
  return getSolution(solutionID);
}

function getSolution(solutionID) {
  // console.log(SOLUTIONS[solutionID]);
  return SOLUTIONS[solutionID];
}

const SOLUTION_LITERALS = [
  // customer_name, prompt, [[item_id, quantity, [modifiers]], note/comment
  ["John", "Can I have 6 glazed donuts?", [[101, 6]]],

  [
    "Emily",
    "Can I have 6 glazed donuts and 6 chocolate donuts?",
    [
      [101, 6],
      [102, 6],
    ],
  ],

  [
    "Michael",
    "Can I have 4 glazed donuts, 4 chocolate donuts, and 4 strawberry iced donuts?",
    [
      [101, 4],
      [102, 4],
      [103, 4],
    ],
  ],

  [
    "Sarah",
    "Can I have 3 glazed donuts, 2 blueberry cake donuts, 2 plain cake donuts, 2 chocolate cake donuts, and 2 spice cake donuts?",
    [
      [101, 3],
      [203, 2],
      [201, 2],
      [202, 2],
      [204, 2],
    ],
    "Recognize the price break should be explained here. There are 10 donuts, the customer should be encouraged to order 2 more iced donuts/cake donuts for 8 cents.",
  ],

  [
    "David",
    "Can I have 3 glazed donuts, 1dz donut holes, 2 white milks, and a regular iced latte?",
    [
      [101, 3],
      [108, 12],
      [1006, 2],
      [1154, 3, ["regular"]],
    ],
  ],

  [
    "Jessica",
    "Can I have a Texas-sized half-and-half donut, 2dz donut holes, 1 chocolate milk, and 1 regular sausage and cheese kolache?",
    [
      [110, 1],
      [108, 24],
      [1007, 1],
      [602, 1],
    ],
    "Recognize that 2dz donut holes are being ordered so the order taker needs to ask if the customer wants them in separate bags (2bgs of 1dz) or to keep them in one bag.",
  ],

  [
    "Anthony",
    "Can I have 1 bavarian cream donut, 1 eclair, 1 cream bismark, 1 baked cinnamon roll, and 1 bottled water?",
    [
      [303, 1],
      [301, 1],
      [302, 1],
      [501, 1],
      [1022, 1],
    ],
  ],

  [
    "Laura",
    "Can I have 3 glazed donuts, 3 maple donuts, 3 strawberry sprinkled donuts, 2 chocolate sprinkled donuts, 1 bavarian cream donut, 1dz donut holes, and 1 large Dr. Pepper?",
    [
      [101, 3],
      [104, 3],
      [103, 3],
      [106, 2],
      [303, 1],
      [108, 12],
      [1012, 1, ["large"]],
    ],
    "Note: Recognize that there are 11 iced donuts. The price break rule also applies here. 11 donuts are $13.09 so tell the customer that if they add 1 more iced/cake donut it’ll be cheaper ($11.98). The bavarian cream donut doesn’t apply to the price break rule.",
  ],

  [
    "Daniel",
    "Can I have 1 large jalapeno cheese kolache, 1 regular cheese kolache, 1 tx-sized cinnamon roll, and 1 regular coffee?",
    [
      [604, 1],
      [602, 1],
      [502, 1],
      [1001, 1],
    ],
    "Recognize that they ordered a regular coffee and ask if they want to add any cream and sugar to their coffee.",
  ],

  [
    "Sophia",
    "Can I have 1dz glazed donuts in two separate boxes?",
    [[101, 12, ["MEMO: 2bx of 6 glazed donuts"]]],
    "Need to type in the memo box '2bx of 6 glazed donuts'",
  ],

  [
    "Matthew",
    "Can I have 3 strawberry fruit kolaches, 2 glazed donuts, 2 blueberry fruit kolaches, 3 cream cheese kolaches, 2 maple donuts, and 3 regular cokes?",
    [
      [506, 3],
      [101, 2],
      [507, 2],
      [505, 3],
      [104, 2],
      [1009, 3, ["regular"]],
    ],
    "Recognize that we don’t have coke. Offer Pepsi or Dr. Pepper instead. We don’t like saying we don’t have things without suggesting an alternative.",
  ],

  [
    "Keisha",
    "Can I have 2 glazed, 1dz donut holes, and 1 reg Dr. Pepper?",
    [
      [101, 2],
      [108, 12],
      [1012, 1, ["regular"]],
    ],
  ],

  [
    "Michael",
    "Can I have 1 TX glazed, 1 chocolate-covered, 1 large sausage & cheese kolache, and 1 bottled water?",
    [
      [105, 1],
      [106, 1],
      [603, 1],
      [1022, 1],
    ],
  ],

  [
    "Sophia",
    "Can I have 1 blueberry cake, 1 cinnamon roll, 1 Bavarian cream donut, and 1 large iced vanilla coffee?",
    [
      [201, 1],
      [501, 1],
      [303, 1],
      [1157, 1, ["large"]],
    ],
  ],

  [
    "Jamal",
    "Can I have 3 glazed, 1 apple fritter, 1 strawberry-filled donut, and 1 reg Pepsi?",
    [
      [101, 3],
      [402, 1],
      [306, 1],
      [1009, 1, ["regular"]],
    ],
  ],

  [
    "Emily",
    "Can I have 1dz donut holes, 1 cream cheese fruit kolache, 1 lemon-filled donut, and 1 large hot black coffee?",
    [
      [108, 12],
      [505, 1],
      [305, 1],
      [1001, 1, ["large"]],
    ],
  ],

  [
    "Carlos",
    "Can I have 2 chocolate cake, 2 reg sausage kolaches, 1dz glazed, and 1 reg Starry?",
    [
      [202, 2],
      [601, 2],
      [101, 12],
      [1010, 1, ["regular"]],
    ],
  ],

  [
    "Ava",
    "Can I have 1 cinnamon twist, 1 cream cheese fruit kolache, 1 cream Bismark, and 1 large sweet tea?",
    [
      [401, 1],
      [505, 1],
      [302, 1],
      [1017, 1, ["large"]],
    ],
  ],

  [
    "David",
    "Can I have 1 glazed, 1 chocolate-covered, 1 lrg sausage & jalapeño kolache, 1 cherry-filled donut, and 1 reg orange juice?",
    [
      [101, 1],
      [102, 1],
      [604, 1],
      [307, 1],
      [1004, 1, ["regular"]],
    ],
  ],

  [
    "Brianna",
    "Can I have 1dz glazed, 1 TX chocolate, 2 lrg sausage & cheese kolaches, and 1 reg sweet tea?",
    [
      [101, 12],
      [109, 1],
      [603, 2],
      [1017, 1, ["regular"]],
    ],
  ],

  [
    "Marcus",
    "Can I have 2 apple fritters, 1 eclair, and 1 large iced caramel?",
    [
      [402, 2],
      [301, 1],
      [1152, 1, ["large"]],
    ],
  ],

  [
    "Jasmine",
    "Can I have 1 blueberry cake, 1 cinnamon roll, 1dz donut holes, 2 strawberry-filled donuts, and 1 reg Dr. Pepper?",
    [
      [203, 1],
      [501, 1],
      [108, 12],
      [306, 2],
      [1012, 1, ["regular"]],
    ],
  ],

  [
    "Ethan",
    "Can I have 1 TX half and half, 2reg cheese & sausage kolaches, 1 lemon-filled donut, and 1 large iced mocha?",
    [
      [110, 1],
      [602, 2],
      [305, 1],
      [1155, 1, ["large"]],
    ],
  ],

  [
    "Olivia",
    "Can I have 1 cherry fruit kolache, 1 chocolate cake, 2 Bavarian cream donuts, and 1 bottled water?",
    [
      [508, 1],
      [202, 1],
      [303, 2],
      [1003, 1],
    ],
  ],

  [
    "Darius",
    "Can I have 3 glazed, 1 reg sausage & cheese kolache, 1 apple fritter, 1 eclair, and 1 reg Pepsi?",
    [
      [101, 3],
      [601, 1],
      [402, 1],
      [301, 1],
      [1009, 1, ["regular"]],
    ],
  ],

  [
    "Natalie",
    "Can I have 1 cream cheese fruit kolache, 1 cinnamon roll, 1dz mixed donuts, and 1 large hot black coffee?",
    [
      [505, 1],
      [501, 1],
      [111, 1],
      [1001, 1, ["large"]],
    ],
  ],

  [
    "Jordan",
    "Can I have 1 chocolate-covered, 1 apple fritter, 1dz donut holes, 1 glazed, and 1 large lemonade?",
    [
      [102, 1],
      [402, 1],
      [108, 12],
      [101, 1],
      [1016, 1, ["large"]],
    ],
  ],

  [
    "Isabella",
    "Can I have 1 blueberry cake, 1 cream Bismark, 1 lrg cheese & sausage kolache, 1dz glazed, and 1 reg sweet tea?",
    [
      [203, 1],
      [302, 1],
      [603, 1],
      [101, 12],
      [1017, 1, ["regular"]],
    ],
  ],

  [
    "Tyler",
    "Can I have 1 cinnamon twist, 2 reg sausage & cheese kolaches, 1 cherry-filled donut, and 1 large iced mocha?",
    [
      [401, 1],
      [602, 2],
      [307, 1],
      [1155, 1, ["large"]],
    ],
  ],

  [
    "Mia",
    "Can I have 2 glazed, 1dz donut holes, 1 eclair, and 1 reg root beer?",
    [
      [101, 2],
      [108, 12],
      [301, 1],
      [1020, 1, ["regular"]],
    ],
  ],

  [
    "Sean",
    "Can I have 1 TX glazed, 1 chocolate cake, 1 Bavarian cream donut, 1 sausage & jalapeño kolache, and 1 reg black iced coffee?",
    [
      [105, 1],
      [202, 1],
      [303, 1],
      [604, 1],
      [1151, 1, ["regular"]],
    ],
  ],

  [
    "Lily",
    "Can I have 1 TX glazed, 2 regular sausage and cheese kolaches, 1 strawberry-filled donut, and 1 large iced vanilla?",
    [
      [105, 1],
      [602, 2],
      [306, 1],
      [1157, 1, ["large"]],
    ],

    [
      "Zoe",
      "Can I have 1 cream Bismarck, 1 eclair, 1 apple fritter, and 1 reg Pepsi?",
      [
        [302, 1],
        [301, 1],
        [402, 1],
        [1009, 1, ["regular"]],
      ],
    ],

    [
      "Jaden",
      "Can I have 2 glazed, 1 blueberry cake, 1 large sausage and cheese kolache, and 1 large iced mocha?",
      [
        [101, 2],
        [203, 1],
        [603, 1],
        [1155, 1, ["large"]],
      ],
    ],

    [
      "Grace",
      "Can I have 1 cherry-filled donut, 2 cinnamon rolls, 1dz donut holes, and 1 reg Starry?",
      [
        [307, 1],
        [501, 2],
        [108, 12],
        [1014, 1, ["regular"]],
      ],
    ],

    [
      "Elijah",
      "Can I have 1 sausage jalapeño and cheese kolache, 1 TX half and half, 1 lemon-filled donut, and 1 large iced caramel latte?",
      [
        [604, 1],
        [110, 1],
        [305, 1],
        [1152, 1, ["large"]],
      ],
    ],

    [
      "Maya",
      "Can I have 1 strawberry fruit kolache, 1 chocolate cake, 1 cream cheese fruit kolache, and 1 reg Dr. Pepper?",
      [
        [506, 1],
        [202, 1],
        [505, 1],
        [1009, 1, ["regular"]],
      ],
    ],

    [
      "Noah",
      "Can I have 1 cinnamon twist, 1 regular sausage and cheese kolache, 2 strawberry-filled donuts, and 1 reg iced black coffee?",
      [
        [401, 1],
        [602, 1],
        [306, 2],
        [1151, 1, ["regular"]],
      ],
    ],

    [
      "Sophie",
      "Can I have 1dz donut holes, 1 cherry fruit kolache, 1 Bavarian cream donut, and 1 large sweet tea?",
      [
        [108, 12],
        [508, 1],
        [303, 1],
        [1017, 1, ["large"]],
      ],
    ],

    [
      "Oliver",
      "Can I have 3 glazed, 1 large sausage and cheese kolache, 1 cream Bismarck, and 1 reg root beer?",
      [
        [101, 3],
        [603, 1],
        [302, 1],
        [1020, 1, ["regular"]],
      ],
    ],

    [
      "Madison",
      "Can I have 1 TX chocolate, 2 glazed, 1dz donut holes, and 1 large iced mocha?",
      [
        [109, 1],
        [101, 2],
        [108, 12],
        [1155, 1, ["large"]],
      ],
    ],

    [
      "Nathan",
      "Can I have 1 glazed, 1 regular sausage and cheese kolache, half a dz donut holes, and 1 large sweet tea?",
      [
        [101, 1],
        [602, 1],
        [108, 6],
        [1017, 1, ["large"]],
      ],
    ],
  ],
];

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
      modifiers: mods,
    });
  }

  const obj = {
    customer_name: lit[0],
    prompt: lit[1],
    parts: inside_items,
  };
  SOLUTIONS[i] = obj;
}

export function getRandSolution() {
  const solutionID = Math.floor(Math.random() * SOLUTION_LITERALS.length);
  return getSolution(solutionID);
}

function getSolution(solutionID) {
  return SOLUTIONS[solutionID];
}

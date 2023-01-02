/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.0, quantity: 1 },
  { name: "sugar", cost: 3.0, quantity: 0.5 },
  { name: "butter", cost: 1.0, quantity: 1 },
  { name: "apples", cost: 6.0, quantity: 7 },
  { name: "cinnamon", cost: 5.5, quantity: 1 },
  { name: "eggs", cost: 2.0, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.0, quantity: 1 },
  { name: "sugar", cost: 3.0, quantity: 0.5 },
  { name: "butter", cost: 1.0, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.5, quantity: 1 },
  { name: "eggs", cost: 2.0, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.0, quantity: 1 },
  { name: "sugar", cost: 3.0, quantity: 0.5 },
  { name: "butter", cost: 1.0, quantity: 1 },
  { name: "cherries", cost: 12.0, quantity: 10 },
  { name: "eggs", cost: 2.0, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe,
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function printIngredients(pieType, recipe) {
  let combiningMsg = `Combining ingredients for ${pieType}: `;
  combiningMsg += recipe.map((ingredient) => ingredient.name).join(", ");
  return combiningMsg;
}

function costOfPie(recipe) {
  const cost = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);
  return cost;
}

function calculateTotalCost(recipe, pieQuantity) {
  return costOfPie(recipe) * pieQuantity;
}

function calculateRevenue(totalCost, profitMargin) {
  return totalCost * (profitMargin || 1.2);
}

function bakePies(pieQuantity, pieType) {
  // Find the recipe for the pieType specified
  const recipe = recipes[pieType];
  for (let i = 0; i < pieQuantity; i++) {
    // Print the ingredients for each ingredient in the recipe
    console.log(printIngredients(pieType, recipe));

    // Print the nth pie that was baked
    console.log(`Baked pie ${i + 1}!`);
  }
}

function sellPies(pieType, pieQuantity, profitMargin) {
  // Find the recipe for the pieType specified
  const recipe = recipes[pieType];
  console.log(`Cost per pie: ${costOfPie(recipe)}`);

  // Calculate the total cost of all the pies
  const totalCost = calculateTotalCost(recipe, pieQuantity);

  // Print the total revenue calculated using the given profitMargin
  const revenue = calculateRevenue(totalCost, profitMargin);
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  // Bake the number of pies specified by the pieQuantity
  bakePies(pieQuantity, pieType);

  // Print the cost of each pie based on the cost of each ingredient and total
  sellPies(pieType, pieQuantity, profitMargin);
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies,
};

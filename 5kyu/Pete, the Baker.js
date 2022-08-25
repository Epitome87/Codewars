/*
 */

// My solution:
const cakes = (recipe, available) => {
  let amounts = [];

  for (let ingredient in recipe) {
    if (!available[ingredient]) amounts.push(0);
    amounts.push(Math.floor(available[ingredient] / recipe[ingredient] || 0));
  }

  return Math.min(...amounts);
};

// Top user solution:
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function (val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val);
  }, Infinity);
}

// Great user solution:
const cakes = (needs, has) => Math.min(...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0)));

/* Takeways:
1) I took a while to figure out my error was trying to floor NaN, hence the addition of the "|| 0" piece of code.
2) Since many powerful methods exist on arrays, remember we can get an array of keys in an object with Object.keys(theObj).
*/

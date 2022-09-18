/*
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents
*/

// My solution:
const fuelPrice = (litres, pricePerLitre) => {
  const withoutDiscount = litres * pricePerLitre;
  const discount = Math.min(parseInt(litres / 2) * 0.05, 0.25) * litres;

  return +parseFloat(withoutDiscount - discount).toFixed(2);
};

// Good user solution:
function fuelPrice(litres, pricePerLiter) {
  var discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  var price = litres * (pricePerLiter - discount);
  return Math.round(price * 100) / 100;
}

/* Takeaways:
1) Remember! To limit the number of decimals, we need to call parseFloat(numStr) followed by .toFixed(numDecimals). Or if we
already have a number, we just call .toFixed(numDec) on it.
This returns a string, so we convert back to a number.
2) Note how the user rounded to two decimals via the following:
Math.round(val * 100) / 100. Essentially, the number of 0's following the 1 are how many decimal places this will round to.
So if we want to round to 4 decimals, we do Math.round(val * 10000) / 10000
*/

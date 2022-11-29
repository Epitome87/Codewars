/*
We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.

Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number. The value will be 1419857.

We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.

Let'see some cases:

findNextPower(12385, 3) == 13824

findNextPower(1245678, 5) == 1419857
The value, val will be always a positive integer.

The power, pow_, always higher than 1.

Happy coding!!
*/

// My solution:
const findNextPower = (val, pow) => {
  for (let i = 1; i < val; i++) {
    if (Math.pow(i, pow) > val) {
      return Math.pow(i, pow);
    }
  }
};

// My favorite user solution (and the solution I couldn't quite fine-tune properly!):
const findNextPower = (val, pow_) => Math.pow(Math.ceil(Math.pow(val + 1, 1 / pow_)), pow_);

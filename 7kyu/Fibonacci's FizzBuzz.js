/*
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples
Input:

fibsFizzBuzz(5)
Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]
Input:

fibsFizzBuzz(1)
Output:

[1]
Input:

fibsFizzBuzz(20)
Output:

[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
##Good Luck!##
*/

// My solution:
const fibsFizzBuzz = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) result.push(1);
    else result.push(result[i - 1] + result[i - 2]);
  }
  return result.map((x) => (x % 15 === 0 ? 'FizzBuzz' : x % 3 === 0 ? 'Fizz' : x % 5 === 0 ? 'Buzz' : x));
};

// My favorite user solution:
const fibsFizzBuzz = (n) =>
  n < 2
    ? [1]
    : [...Array(n - 2)]
        .reduce((pre, _, idx) => [...pre, pre[idx] + pre[++idx]], [1, 1])
        .map((val) => (!(val % 15) ? `FizzBuzz` : !(val % 5) ? `Buzz` : !(val % 3) ? `Fizz` : val));

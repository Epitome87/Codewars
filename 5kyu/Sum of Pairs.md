# [Sum of Pairs](https://www.codewars.com/kata/54d81488b981293527000c8f)

## Description

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

```
sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
```

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

```js
const sumPairs = (ints, sum) => {
  const seen = new Set();
  for (const int of ints) {
    if (seen.has(sum - int)) return [sum - int, int];
    seen.add(int);
  }
};
```

```js
const sumPairs = (ints, sum) => {
  let seen = new Set();

  for (let i = 0; i < ints.length; i++) {
    let needed = sum - ints[i];

    if (seen.has(needed)) {
      return [needed, ints[i]];
    }

    seen.add(ints[i]);
  }

  return undefined;
};
```

## Takeaways

1. Returning undefined is actually not necessary, as it will be returned automatically if no other returns are found.
2. When using nested for loops to process some operation on two numbers in an array, consider using Set or an object to keep
   track of which elements have already been visited. This will eliminate the need for the inner for loop on occasions.
3. When the index isn't really important, consider a for-of loop for array iteration.

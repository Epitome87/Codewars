# [Sum of Parts](https://www.codewars.com/kata/5ce399e0047a45001c853c2b)

## Description

Let us consider this example (array written in general format):

`ls = [0, 1, 3, 6, 10]`

Its following parts:

```
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
```

The corresponding sums are (put together in a list): `[20, 20, 19, 16, 10, 0]`

The function `parts_sums` (or its variants in other languages) will take as parameter a list `ls` and return a list of the sums of its parts as defined above.

**Other Examples:**

```
ls = [1, 2, 3, 4, 5, 6]
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
```

**Notes**

- Take a look at performance: some lists have thousands of elements.

## My Solution

**JavaScript**

```js
const partsSums = (ls) => {
  const sums = [0];
  let sum = 0;
  for (let i = ls.length - 1; i >= 0; i--) {
    sum += ls[i];
    sums.push(sum);
  }

  return [...sums].reverse();
};
```

**Python**

```py
def parts_sums(ls):
    result = [0]
    sum = 0

    for x in ls[::-1]:
        sum += x
        result.append(sum)

    return result[::-1]
```

### User Solution

**JavaScript**

```js
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map((v) => (sum = sum - v));
}
```

```js
function partsSums(ls) {
  let res = new Array(ls.length + 1);
  res[ls.length] = 0;

  for (let i = ls.length - 1; i >= 0; i--) res[i] = res[i + 1] + ls[i];

  return res;
}
```

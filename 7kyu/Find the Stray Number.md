# [Find the Stray Number](https://www.codewars.com/kata/57f609022f4d534f05000024)

## Description

You are given an _odd-length_ array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

**Examples**

```
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
```

## My Solution

**JavaScript**

```js
const stray = (numbers) => numbers.reduce((acc, cur) => acc ^ cur);
```

```js
const stray = (numbers) => {
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) return numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[0]) return numbers[i];
  }
};
```

**Python**

```py
def stray(arr):
    result = 0

    for n in arr:
        result ^= n

    return result
```

### User Solution

**JavaScript**

```js
function stray(numbers) {
  var a = numbers.sort();

  if (a[0] != a[1]) {
    return a[0];
  }
  return a[a.length - 1];
}
```

```js
// Another nice user solution:
function stray(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}
```

**Python**

```py
def stray(arr):
    return min(arr, key=arr.count)
```

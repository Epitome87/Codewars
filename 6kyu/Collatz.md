# [Collatz](https://www.codewars.com/kata/5286b2e162056fd0cb000c20)

## Description

**Preface**

A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1 :

f(n) = n/2, if n is even, 3n+1, if n is odd
​

A more detailed description of the collatz conjecture may be found on Wikipedia.

**The Problem**

Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:

"X0->X1->...->XN"

Where Xi is each iteration of the sequence and N is the length of the sequence.

**Sample Input**

```js
Input: 4;
Output: '4->2->1';

Input: 3;
Output: '3->10->5->16->8->4->2->1';
```

Don't worry about invalid input. Arguments passed into the function are guaranteed to be valid integers >= 1.

## My Solution

**JavaScript**

```js
const collatz = (n) => {
  const result = [n];

  while (n !== 1) {
    if (n % 2) n = 3 * n + 1;
    else n = n / 2;
    result.push(n);
  }

  return result.join('->');
};
```

### User Solution

**JavaScript**

```js
function collatz(n) {
  return n === 1 ? '1' : n + '->' + collatz(n % 2 ? 3 * n + 1 : n / 2);
}
```

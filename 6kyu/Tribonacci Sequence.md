# [Tribonacci Sequence](https://www.codewars.com/kata/556deca17c58da83c00002db)

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with `[1, 1, 1]` as a starting input (AKA _signature_), we have this sequence:

    [1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with `[0, 0, 1]` as a signature? As starting with `[0, 1]` instead of `[1, 1]` basically _shifts_ the common Fibonacci sequence by one place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

    [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a **signature** array/list, returns **the first n elements - signature included** of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if `n == 0`, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the [Xbonacci kata](http://www.codewars.com/kata/fibonacci-tribonacci-and-friends 'Xbonacci sequence')

_\[Personal thanks to Professor [Jim Fowler](https://www.coursera.org/instructor/jimfowler 'Jim Fowler') on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)\]_

## My Solution

**JavaScript**

```js
const tribonacci = (signature, n) => {
  if (n === 0) return [];

  const result = [];

  for (let i = 0; i < n; i++) {
    if (i < 3) result.push(signature[i]);
    else result.push(result[i - 1] + result[i - 2] + result[i - 3]);
  }

  return result;
};
```

**Python**

```py
def tribonacci(signature, n):
  result = signature[:n]

  for i in range(n - 3):
    result.append(sum(result[-3:]))

  return result
```

```py
def tribonacci(signature, n):
    result = []

    for i in range(n):
        if i < len(signature):
            result.append(signature[i])
        else:
            result.append(result[i - 3] + result[i - 2] + result[i - 1])

    return result
```

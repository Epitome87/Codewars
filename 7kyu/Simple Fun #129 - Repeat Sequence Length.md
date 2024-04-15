# [Repeat Sequence Length](https://www.codewars.com/kata/58a3f57ecebc06bfcb00009c)

## Description

Let F(N) be the sum square of digits of N. So:

`F(1) = 1, F(3) = 9, F(123) = 14`

Choose a number A, the sequence {A0, A1, ...} is defined as followed:

```
A0 = A
A1 = F(A0)
A2 = F(A1) ...
```

if A = 123, we have:

```
123 → 14(1 x 1 + 2 x 2 + 3 x 3)
    → 17(1 x 1 + 4 x 4)
    → 50(1 x 1 + 7 x 7)
    → 25(5 x 5 + 0 x 0)
    → 29(2 x 2 + 5 x 5)
    → 85(2 x 2 + 9 x 9)
    → 89(8 x 8 + 5 x 5)             ---
    → 145(8 x 8 + 9 x 9)             |r
    → 42(1 x 1 + 4 x 4 + 5 x 5)      |e
    → 20(4 x 4 + 2 x 2)              |p
    → 4(2 x 2 + 0 x 0)               |e
    → 16(4 x 4)                      |a
    → 37(1 x 1 + 6 x 6)              |t
    → 58(3 x 3 + 7 x 7)              |
    → 89(5 x 5 + 8 x 8)             ---
    → ......
```

As you can see, the sequence repeats itself. Interestingly, whatever A is, there's an index such that from it, the sequence repeats again and again.

Let `G(A)` be the minimum length of the repeat sequence with A0 = A.

So `G(85) = 8 `(8 number : `89,145,42, 20,4,16,37,58`)

Your task is to find G(A) and return it.

**Input/Output**

- [input] integer a0

the A0 number

- [output] an integer

the length of the repeat sequence

## My Solution

**JavaScript**

```js
const repeatSequenceLen = (a0) => {
  const cache = {};
  const sequence = [];
  let value = a0;

  for (let i = 0; ; i++) {
    value = [...`${value}`].reduce((acc, cur) => acc + cur * cur, 0);
    sequence.push(value);

    if (value in cache) return sequence.lastIndexOf(value) - sequence.indexOf(value);

    cache[value] = true;
  }
};
```

**Python**

```py
def repeat_sequence_len(n):
    s = []
    while n not in s:
        s.append(n)
        n = sum(int(x) ** 2 for x in str(n))
    return len(s) - s.index(n)
```

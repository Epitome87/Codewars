# [Recurrence by Recursion](https://www.codewars.com/kata/56f29b3b75e340627a0009d5)

## Description

**Overview**

In mathematics, a recurrence formula is a formula that shows the relationship between each term and the next in a numerical sequence. For example, a sequence may be defined as follows:

```
n = t + 3, f = 1
```

... where n is the next term, t is the current term and f is the first term in the sequence.

Recurrence in mathematics is very similar to recursion in computer programming in a lot of ways:

1. In both recurrence and recursion, the main problem invokes a simpler problem of the same nature. For example, in recurrence formulae, calculation of the seventh term of the sequence requires the sixth term of the sequence, whose calculation then requires the fifth term of the sequence and so on.
2. In both recurrence and recursion, there is always something called the base case which kind of acts like a floor - without it, the calculation (or invocation) process would never end and nothing would be solved! For example, the base case in recurrence formulae is the first term, which always has to be explicitly and separately defined for the whole sequence to work. In computer programming, it would be a special case where the function no longer invokes itself and instead just returns a value.

Going back to the formula above, our first term is 1 and each next term is the current term added by 3. Thus we have:

1. First term: 1
2. Second term: 1 + 3 = 4
3. Third term: 4 + 3 = 7
4. 7 + 3 = 10
5. 13

... and so on.

**Task**

Your task is to create a function, recurrence(base, formula, term) where base is the base case or first term of the sequence, formula is the recurrence formula given as a function/method and term is the number of the term of the series which your function/method has to calculate. For example:

```js
recurrence(1, (n) => n + 3, 4) === 10;
recurrence(3, (n) => 2 * n, 5) === 48;
```

## My Solution

**JavaScript**

```js
const recurrence = (base, formula, term) => [...Array(term - 1)].reduce((acc) => formula(acc), base);
```

```js
const recurrence = (base, formula, term) => {
  let result = base;

  while (--term) result = formula(result);

  return result;
};
```

### User Solution

**JavaScript**

```js
const recurrence = (base, formula, term) => (term > 1 ? recurrence(formula(base), formula, term - 1) : base);
```

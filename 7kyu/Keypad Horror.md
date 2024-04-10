# [Keypad Horror](https://www.codewars.com/kata/5572392fee5b0180480001ae)

## Description

Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:

```
7 8 9
4 5 6
1 2 3
  0
```

Cell phone keypad's layout:

```
1 2 3
4 5 6
7 8 9
  0
```

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only

## My Solution

**JavaScript**

```js
const computerToPhone = (numbers) => numbers.replace(/\d/g, (v) => '0789456123'[v]);
```

```js
const computerToPhone = (numbers) => [...numbers].map((n) => '0789456123'[n]).join('');
```

```js
const computerToPhone = (numbers) => [...numbers].map((n) => [0, 7, 8, 9, 4, 5, 6, 1, 2, 3][n]).join('');
```

**Python**

```py
def computer_to_phone(numbers):
    return numbers.translate(str.maketrans('123789', '789123'))
```

```py
def computer_to_phone(numbers):
    return "".join(["0789456123"[int(x)] for x in numbers])
```

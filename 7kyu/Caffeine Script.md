# [Caffeine Script](https://www.codewars.com/kata/5434283682b0fdb0420000e6)

## Description

Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string `"Java"`.

If the integer is divisible by 3 and divisible by 4, return the string `"Coffee"`

If one of the condition above is true and the integer is even, add `"Script"` to the end of the string.

If none of the condition is true, return the string `"mocha_missing!"`

**Examples**

```
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"
```

## My Solution

**JavaScript**

```js
const caffeineBuzz = (n) => {
  let res = '';
  if (n % 3 === 0) {
    if (n % 4 === 0) res = 'Coffee';
    else res = 'Java';
    if (n % 2 === 0) res += 'Script';
  } else res = 'mocha_missing!';
  return res;
};
```

**Python**

```py
def caffeine_buzz(n):
    if n % 12 == 0:
        return 'CoffeeScript'
    if n % 6 == 0:
        return 'JavaScript'
    if n % 3 == 0:
        return 'Java'
    return 'mocha_missing!'
```

### User Solution

**JavaScript**

```js
function caffeineBuzz(n) {
  return n % 3 == 0 ? (n % 4 == 0 ? 'Coffee' : 'Java') + (n % 2 == 0 ? 'Script' : '') : 'mocha_missing!';
}
```

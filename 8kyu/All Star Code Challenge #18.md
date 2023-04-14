# All Star Code Challenge #18

## Description

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

```
("Hello", "o") ==> 1
("Hello", "l") ==> 2
("", "z") ==> 0
```

```
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
```

**Notes**

- The first argument can be an empty string
- The second string argument will always be of length 1

## My Solution

**JavaScript**

```js
const strCount = (str, letter) => str.split('').filter((c) => c === letter).length;
```

**TypeScript**

```ts
export const strCount = (str: string, letter: string): number => (str.match(RegExp(letter, 'g')) || []).length;
```

### User Solution

**JavaScript**

```js
function strCount(str, letter) {
  return str.split(letter).length - 1;
}
```

## Takeaways

1. Yet again, remember the clever user of `str.split()`!

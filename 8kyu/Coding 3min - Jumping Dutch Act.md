# [Coding 3min: Jumping Dutch Act](https://www.codewars.com/kata/570bcd9715944a2c8e000009)

## Description

**Task:**

Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: `floor`, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

**Example:**

sc(2) should return `"Aa~ Pa! Aa!"`

It means:

    Mr. despair jumped from the 2 floor, the voice is "Aa~"
    He fell on the ground, the voice is "Pa!"
    He did not die immediately, and the final voice was "Aa!"

sc(6) should return `"Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"`

sc(7) should return `"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"`

sc(10) should return `"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"`

if `floor`<=1, Mr. despair is safe, return `""`

## My Solution

**JavaScript**

```js
const sc = (floor) => {
  if (floor <= 1) return '';
  let screams = 'Aa~ '.repeat(floor - 1) + 'Pa!';
  if (floor <= 6) screams += ' Aa!';
  return screams;
};
```

### User Solution

**JavaScript**

```js
const sc = (floor) =>
  floor > 1
    ? Array.from({ length: floor - 1 }, () => 'Aa~')
        .concat(floor > 6 ? ['Pa!'] : ['Pa!', 'Aa!'])
        .join(' ')
    : '';
```

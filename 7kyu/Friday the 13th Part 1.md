# [Friday the 13th Part 1](https://www.codewars.com/kata/5925acf31a9825d616000e74)

## Description

It's Friday the 13th, and Jason is ready for his first killing spree!

Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intelligence.

Ruby, Python, Crystal:

```py
counselors = [["Chad", 2], ["Tommy", 9]]
jason = 7
```

JavaScript:

```js
var counselors = [
  ['Chad', 2],
  ['Tommy', 9],
];
var jason = 7;
```

PHP:

```php
$counselors = [["Chad", 2], ["Tommy", 9]];
$jason = 7;
```

Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

Happy Friday the 13th!

## My Solution

**JavaScript**

```js
const killcount = (counselors, jason) =>
  counselors.reduce((acc, [name, int]) => (int < jason ? [...acc, name] : acc), []);
```

```js
const killcount = (counselors, jason) => counselors.filter(([_, int]) => int < jason).map((el) => el[0]);
```

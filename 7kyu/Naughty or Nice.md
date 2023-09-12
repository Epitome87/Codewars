# [Naughty or Nice?](https://www.codewars.com/kata/585eaef9851516fcae00004d)

## Description

In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

Examples:

```
bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
whatListAmIOn(bad_actions)
#-> 'naughty'
good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
what_list_am_i_on(good_actions)
#-> 'nice'
actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
what_list_am_i_on(actions)
#-> 'naughty'
```

## My Solution

**JavaScript**

```js
const whatListAmIOn = (actions) => {
  const points = actions.reduce((acc, cur) => acc + (/^[bfk]/.test(cur) ? -1 : /^[gsn]/.test(cur) ? 1 : 0), 0);
  return points <= 0 ? 'naughty' : 'nice';
};
```

```js
const whatListAmIOn = (actions) => {
  const points = actions.map((action) => (/^[bfk]/.test(action) ? -1 : /^[gsn]/.test(action) ? 1 : 0));
  const totalPoints = points.reduce((acc, cur) => acc + cur, 0);
  return totalPoints <= 0 ? 'naughty' : 'nice';
};
```

### User Solution

**JavaScript**

```js
const whatListAmIOn = (actions) =>
  actions.reduce((pre, val) => pre + /^[gsn]/.test(val) - /^[bfk]/.test(val), 0) > 0 ? `nice` : `naughty`;
```

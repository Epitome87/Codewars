# [What is My Name Score? #1](https://www.codewars.com/kata/576a29ab726f4bba4b000bb1)

## Description

The 26 letters of the English alphabets are randomly divided into 5 groups of 5 letters with the remaining letter being ignored. Each of the group is assigned a score of more than 0. The ignored letter always has a score of 0.

With this kata, write a function nameScore(name) to work out the score of a name that is passed to the function.

The output should be returned as an object:

```js
{'Mary Jane':20}
```

Only letters have a score. Spaces do not.

You can safely assume that name does not contain any punctuations or symbols. There will also be no empty string or null value.

A static alpha object for testing has been preloaded for your convenience in the following format:

```js
{'ABCDE':1, 'FGHIJ':2, 'KLMNO':3, 'PQRST':4, 'UVWXY':5}

// 'Z' is ignored
```

Note that the alpha object will be randomly generated each time you run the test.

#Example

In accordance to the above alpha object, the name Mary Jane will have a name score of 20 => M=3 + a=1 + r=4 + y=5 + J=2 + a=1 + n=3 + e=1

## My Solution

**JavaScript**

```js
const nameScore = (name) => {
  const score = [...name.toUpperCase()].reduce((acc, cur) => {
    for (let key in alpha) {
      if (key.includes(cur)) return acc + alpha[key];
    }
    return acc;
  }, 0);
  return { [name]: score };
};
```

### User Solution

**JavaScript**

```js
const nameScore = (name) => ({
  [name]: [...name.toUpperCase()].reduce(
    (pre, val) => pre + ~~alpha[Object.keys(alpha).find((v) => v.includes(val))],
    0
  ),
});
```

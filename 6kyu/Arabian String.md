# [Arabian String](https://www.codewars.com/kata/525821ce8e7b0d240b002615)

## Description

You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

```
"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"
```

## My Solution

**JavaScript**

```js
const camelize = (str) =>
  (str.match(/[a-z0-9]+/gi) || []).map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join('');
```

```js
const camelize = (str) =>
  str
    .split(/[^a-z0-9]/gi)
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join('');
```

```js
const camelize = (str) =>
  str
    .replace(/[^a-z0-9]/gi, ' ')
    .split(' ')
    .map((c) => c.slice(0, 1).toUpperCase() + c.slice(1).toLowerCase())
    .join('');
```

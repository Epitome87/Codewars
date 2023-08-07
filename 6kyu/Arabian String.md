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
  str
    .replace(/[^a-z0-9]/gi, ' ')
    .split(' ')
    .map((c) => c.slice(0, 1).toUpperCase() + c.slice(1).toLowerCase())
    .join('');
```

### User Solution

**JavaScript**

```js
function camelize(str) {
  return str
    .match(/[a-z0-9]+/gi)
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}
```

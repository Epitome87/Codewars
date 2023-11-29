# [Argue the Toss](https://www.codewars.com/kata/5758a91bbd1fdd2033000947)

## Description

Your task is to write a function 'anArgument' that doesn't have a fixed number of parameters. The function should count the arguments passed to it and return a string that specifies how many arguments were passed in, and states what they were.

If the function call is

```js
anArgument('pigs', 'giraffes', 'unicorns');
```

The returned string should say

```js
'You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".';
```

If there is only one argument passed in, the string should say

```js
'You gave me 1 argument and it is "pigs".';
```

If there are two arguments, the string should say

```js
'You gave me 2 arguments and they are "pigs" and "giraffes".';
```

If there are no arguments, the string should say

```js
"You didn't give me any arguments.";
```

Punctuation and grammar notes

- There are commas after each argument except the last and second-last, which are separated with 'and'
- Arguments are presented in quotation marks
- The singular: '1 argument' as opposed to multiples: '3 arguments'
- Verb agreement: 'and it is' as opposed to 'and they are'

## My Solution

**JavaScript**

```js
const anArgument = (...args) =>
  !args.length
    ? "You didn't give me any arguments."
    : `You gave me ${args.length} argument${args.length > 1 ? 's' : ''} and ${
        args.length > 1 ? 'they are' : 'it is'
      }${args
        .slice(0, -1)
        .map((v, i) => ` "${v}"`)
        .join(',')} ${args.length > 1 ? 'and ' : ''}"${args.slice(-1)}".`;
```

### User Solution

**JavaScript**

```js
function anArgument(...args) {
  const n = args.length;
  if (!n) return "You didn't give me any arguments.";
  if (n === 1) return `You gave me 1 argument and it is "${args[0]}".`;
  return `You gave me ${n} arguments and they are "${args.slice(0, n - 1).join('", "')}" and "${args[n - 1]}".`;
}
```

```js
function anArgument() {
  let len = arguments.length;
  let args = [...arguments]
    .map((x) => '"' + x + '"')
    .join(', ')
    .replace(/, (?!.*,.*$)/, ' and ');
  if (len === 0) return "You didn't give me any arguments.";
  return `You gave me ${len} argument${len > 1 ? 's' : ''} and ${len > 1 ? 'they are' : 'it is'} ${args}.`;
}
```

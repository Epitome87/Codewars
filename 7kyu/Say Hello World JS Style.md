# [Say 'Hello World' JS Style](https://www.codewars.com/kata/53a20af2e0afd3e2cd000333)

## Description

Write the definition of the function "say" such that calling this:

    say("Hello")("World")

returns "Hello World"

## My Solution

**JavaScript**

```js
const say = (str1) => (str2) => `${str1} ${str2}`;
```

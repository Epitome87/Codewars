# ["Stringing"+"Me"+"Along"](https://www.codewars.com/kata/55f4a44eb72a0fa91600001e)

## Description

Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

Note: There will always be at least 1 string; all inputs will be non-empty.

For example:

```js
createMessage('Hello')('World!')('how')('are')('you?')() === 'Hello World! how are you?';
```

Tip (helpful, but not necessary): Try using classes!

Good luck and happy coding!

## My Solution

**JavaScript**

```js
const createMessage = (str) => (msg) => msg ? createMessage(`${str} ${msg}`) : str;
```

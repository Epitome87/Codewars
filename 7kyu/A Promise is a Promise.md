# [A Promise is a Promise](https://www.codewars.com/kata/5b61d6ef07a266d40b000097)

## Description

Create a resolved javascript Promise that will return 'Hello World!'.

## My Solution

**JavaScript**

```js
const promiseHelloWorld = () => new Promise((resolve, reject) => resolve('Hello World!'));
```

### User Solution

**JavaScript**

```js
const promiseHelloWorld = () => Promise.resolve('Hello World!');
```

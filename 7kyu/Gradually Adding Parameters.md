# Gradually Adding Parameters

## Description

This kata is all about adding numbers.

You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??

Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

```js
add(3, 4, 5);
// returns ( 3 _ 1 ) + ( 4 _ 2 ) + ( 5 \* 3 ) = 26
```

Remember the function will return 0 if no arguments are passed.

**Example**

```js
add(); //=> 0
add(1, 2, 3); //=> 14
add(1, 4, -5, 5); //=> 14
```

## My Solution

```js
const add = (...args) => args.reduce((acc, curr, idx) => acc + curr * (idx + 1), 0);
```

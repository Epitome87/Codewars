# [Work Out Is It Falsy Or Truthy?](https://www.codewars.com/kata/583310c5dbeb310c34000352)

## Description

An array will be passed to the function falsyOrTruthy() containing either both falsy and truthy values or only one type of them; if the number of the array's values is even return truthy values otherwise return falsy ones. In the cases when corresponding values are not present at all simply return an empty array.

Examples:

```js
var arr = [false, NaN, NaN, 4, 5, {}];

falsyOrTruthy(arr); // should return [4,5,{}]

var arr = [false, NaN, NaN, 4, 5, 1, {}];

falsyOrTruthy(arr); // should return [false,NaN,NaN]

var arr = [false, NaN];

falsyOrTruthy(arr); // should return [];

var arr = [1, 2, 3];

falsyOrTruthy(arr); // should return [];
```

## My Solution

**JavaScript**

```js
const falsyOrTruthy = (arr) => (arr.length % 2 ? arr.filter((n) => !n) : arr.filter((n) => n));
```

### User Solution

**JavaScript**

```js
const falsyOrTruthy = (arr) => arr.filter((x) => !x == arr.length % 2);
```

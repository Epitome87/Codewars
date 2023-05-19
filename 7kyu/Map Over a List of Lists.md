# [Map Over a List of Lists](https://www.codewars.com/kata/606b43f4adea6e00425dff42)

## Description

Write a function which maps a function over the lists in a list:

```js
function gridMap(fn, xss) {
  return [[]];
}
```

Example 1:

```js
const xss = [ [1,2,3]
            , [4,5,6]
            ];

gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]
```

Example 2

```js
const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]
```

## My Solution

**JavaScript**

```js
const gridMap = (fn, lists) => lists.map((list) => list.map(fn));
```

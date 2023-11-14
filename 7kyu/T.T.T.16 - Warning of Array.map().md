# [T.T.T.16: Warning of Array.map()](https://www.codewars.com/kata/57a18f23e298a740e5001051)

## Description

**Task**

Complete function warning, accept an array arr and a function func as arguments. if the function can be used for the array.map(), return "Passed!". If not, return "Failed!".

**Examples**

```
arr=[1, 2, 3]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=[1, 2, 3]  func= x=>x.toUpperCase()
warning(arr,func)  ===  "Failed!"

arr=["1","2","3"]  func= x=>x.toUpperCase()
warning(arr,func)  ===  "Passed!"

arr=["1","2","3"]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=["1","2","3"]  func= x=>x.toFixed(2)
warning(arr,func)  ===  "Failed!"

arr=["1","2","3"]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[[1],[2],[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[[1],[2],[3]]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=[true,false,true]  func = x=>x.toFixed(2)
warning(arr,func)  ===  "Failed!"

arr=[1,"2",[3]]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=["1","2",[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[1,"2",[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Failed!"

arr=[1,"2",[3]]  func= x=>x.noSuchAFunction()
warning(arr,func)  ===  "Failed!"
```

## My Solution

**JavaScript**

```js
const warning = (arr, fn) => {
  try {
    arr.map(fn);
    return 'Passed!';
  } catch (err) {
    return 'Failed!';
  }
};
```

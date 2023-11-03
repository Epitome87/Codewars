# [Christmas Mission: Programmer's Christmas #1](https://www.codewars.com/kata/58520e8edeb17c711c00019b)

## Description

Christmas is coming soon. As a programmer, you need to complete a series of tasks to welcome the arrival of Christmas. This time your task is:

Given some functions funcs(an array, each element is a function), each function returns a character(randomly but no duplicate). You should return a string, it's the list of these functions which can make a string "Merry Christmas!", string separated by commas. For example:

```
var a=_=>"M",b=_=>"e",c=_=>"r",d=_=>"y",e=_=>"C",
      f=_=>"h",g=_=>"i",h=_=>"s",i=_=>"t",j=_=>"m",
      k=_=>"a",l=_=>" ",m=_=>"!"
funcs = [a,b,c,d,e,f,g,h,i,j,k,l,m]
The result should be: "a,b,c,c,d,l,e,f,c,g,h,i,j,k,h,m"

Because:

a()+b()+c()+c()+d()+l()+e()+f()+c()+g()+h()+i()+j()+k()+h()+m() === "Merry Christmas!"
```

You can assume that all the necessary functions are provided.

## My Solution

**JavaScript**

```js
const merryChristmas = (funcs) => {
  const obj = funcs.reduce((acc, cur) => ((acc[cur()] = cur.name), acc), {});
  return [...'Merry Christmas!'].map((v) => obj[v]).join(',');
};
```

### User Solution

**JavaScript**

```js
const merryChristmas = (funcs) => [...'Merry Christmas!'].map((ch) => funcs.find((f) => f() === ch).name).join`,`;
```

## Takeaways

1. You can retrieve the name of a function instance with `.name()`.

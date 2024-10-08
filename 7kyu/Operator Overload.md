# [Operator Overload](https://www.codewars.com/kata/52a0849a852a854d050005f4)

## Description

We have a class named 'Foo' with a 'val' attribute.

```js
var foo = new Foo(2); // foo.val = 2;
var boo = new Foo(3); // boo.val = 3;
```

We want to be able to sum two Foo object using the '+' operator.

```js
foo + boo; // => must return 5
```

## My Solution

**JavaScript**

```js
const Foo = function (value) {
  this.val = value;
};

Foo.prototype.valueOf = function () {
  return this.val;
};
```

### User Solution

**JavaScript**

```js
const Foo = function (value) {
  return new Number(value);
};
```

```js
const Foo = Number;
```

## Takeaways

1. Although operator overloading is technically not supported in JavaScript, we can overload the prototype.valueOf on the desired object, having it return the value we wish. Now that we have the proper value being returned, adding these two objects together will work like we want!
2. The clever user solution sets Foo as an alias to the Number constructor, achieving the same effect.

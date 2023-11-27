# [How new Works](https://www.codewars.com/kata/525a5b2185a9a4f5670006c1)

## Description

The `new` operator in JavaScript creates objects by following these three steps:

1. First, it creates a new empty object. (Already done for you here.)
2. Next, it sets the new object’s `.__proto__` property to match the prototype property of the function being invoked.
3. Finally, the operator invokes the function and passes the new object as the “this” reference.

Use this understanding of the new operator to create an instance of the object MyObject, but do so without calling "new MyObject()".

Note: Currently there is no way to prevent you from passing this kata just by typing "var myObj = new MyObject();". However, I will scrunch my eyebrows when I see your solution and make quiet remarks to myself about how you don't understand what this kata is trying to teach you.

## My Solution

**JavaScript**

```js
const myObj = { __proto__: MyObject.prototype };
MyObject.call(myObj);
```

### User Solution

**JavaScript**

```js
// DON'T use __proto__ unless you have no other option.
// It's slow and deprecated
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
var myObj = Object.create(MyObject.prototype);
MyObject.bind(myObj)();
```

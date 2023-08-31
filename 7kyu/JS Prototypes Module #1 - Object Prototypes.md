# [JS Prototypes Module #1 - Object Prototypes](https://www.codewars.com/kata/557e508a47c7e9adf9000062)

## Description

These are intended as quick, digestable learning modules. If you have a strong understanding of prototypes already; skip on down to the "Objective" section below. If the Kata turns out to be puzzling, switch back to the lesson to find a clue that may help you solve it.

###What are prototypes?

In JavaScript, all objects have a built-in, internal prototype property. This property is essentially a link to another object. You can create a link between objects by calling Object.create on the parent object:

```js
var apple = {
  delicious: true,
};

var honeycrisp = Object.create(apple);
```

Now honeycrisp is linked to apple, where if you were to call honeycrisp.delicious, we would get true. Additionally, any properties added to apple will be available on honeycrisp automatically via ths link. This lookup on apple occurs because of JavaScript's internal mechanism of a "Prototype Chain". If the property isn't available on the current object, it will continue up the Prototype Chain until the property is found, or until we reach the top of the chain (where it will return undefined). For objects, the very top of the chain is the built-in Object.prototype; all objects will inhherit from this.

Now you should have enough information to try the Kata. Good luck!

##Objective

Your friend is terrible at naming objects. We can see that from looking at the three she's created here:

```js
var widget = {
  foo: 'bar',
};

var gadget = {
  bar: 'foo',
};

var thingamabob = {
  bar: 'food',
};
```

Without changing the objects you want to add a description property to each object with a default value of "TODO: GIVE ME A DESCRIPTION" (the entire string), to eventually attach some explanation to these objects. The three objects have already been pre-loaded for you, so they will be available in your main code editor.

Note: This is a contrived example for learning purposes. This actual example is not encouraged in practice, while the concept is worthwhile to understand.

## My Solution

**JavaScript**

```js
Object.prototype.description = 'TODO: GIVE ME A DESCRIPTION';
```

### User Solution

**JavaScript**

```js
var objects = [widget, gadget, thingamabob];

var prototype = {
  description: 'TODO: GIVE ME A DESCRIPTION',
};

objects.forEach((object) => Object.setPrototypeOf(object, prototype));
```

```js
Object.defineProperty(Object.prototype, 'description', {
  value: 'TODO: GIVE ME A DESCRIPTION',
});
```

```js
var prototype = {
  description: 'TODO: GIVE ME A DESCRIPTION',
};

widget.__proto__ = prototype;
gadget.__proto__ = prototype;
thingamabob.__proto__ = prototype;
```

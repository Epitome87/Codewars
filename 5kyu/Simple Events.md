# [Simple Events](https://www.codewars.com/kata/52d3b68215be7c2d5300022f)

## Description

Your goal is to write an Event constructor function, which can be used to make event objects.

An event object should work like this:

- it has a .subscribe() method, which takes a function and stores it as its handler
- it has an .unsubscribe() method, which takes a function and removes it from its handlers
- it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments

As this is an elementary example of events, there are some simplifications:

- all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
- you should not worry about the order of handlers' execution
- the handlers will not attempt to modify an event object (e.g. add or remove handlers)
- the context of handlers' execution is not important
- each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again

Also see an example test fixture for suggested usage

## My Solution

**JavaScript**

```js
class Event {
  constructor() {
    this.handlers = [];
  }

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter((handler) => handler !== fn);
  }

  emit(...args) {
    for (let handler of this.handlers) {
      handler(...args);
    }
  }
}
```

### User Solution

**JavaScript**

```js
class Event {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }

  unsubscribe(func) {
    this.subscribers.delete(func);
  }

  emit(...args) {
    this.subscribers.forEach((s) => s(...args));
  }
}
```

```js
// Using gross pre-Class syntax user solution:
function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function (handler) {
  this.handlers.push(handler);
};

Event.prototype.unsubscribe = function (handler) {
  var index = this.handlers.indexOf(handler);

  if (-1 !== handler) {
    this.handlers.splice(index, 1);
  }
};

Event.prototype.emit = function () {
  var args = arguments;
  this.handlers.forEach(function (handler) {
    handler.apply(null, args);
  });
};
```

# [Objectify All the Strings](https://www.codewars.com/kata/55dd54631827120dd800002b)

## Description

Write

```js
String.prototype.hashify();
```

that will turn a string into a hash/object. Every character in the string will be the key for the next character.
E.g.

```
'123456'.hashify() == {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"} // The last char will be key for 1st
char
'11223'.hashify() == {"1":["1","2"],"2":["2","3"],"3":"1"} // when duplicates exist, group them in an array
// i.e. 1 is key for next char 1, that 1 is key for next char 2, but 1 is already in the hash, so add 2 to key 1
'Codewars'.hashify() == {"C":"o","o":"d","d":"e","e":"w","w":"a","a":"r","r":"s","s":"C"}
```

**Order is not important**

There is a preloaded `function equals(x,y)` that will check if objects are same regardless of property order.

## My Solution

**JavaScript**

```js
String.prototype.hashify = function () {
  return [...this].reduce(
    (acc, cur, idx) => ((val = this[idx + 1] || this[0]), (acc[cur] = cur in acc ? [...acc[cur], val] : val), acc),
    {}
  );
};
```

```js
String.prototype.hashify = function () {
  const result = {};
  const entries = Object.entries(this);
  for ([key, val] of entries) {
    const value = +key === entries.length - 1 ? entries[0][1] : entries[+key + 1][1];
    result[val] = val in result ? [...result[val], value] : value;
  }
  return result;
};
```

### User Solution

**JavaScript**

```js
String.prototype.hashify = function () {
  return [...this].reduce((hash, key, i) => {
    let next = this[(i + 1) % this.length];
    hash[key] = hash[key] ? [].concat(hash[key], next) : next;
    return hash;
  }, {});
};
```

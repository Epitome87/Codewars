# [Inverting a Hash](https://www.codewars.com/kata/5b5604e26dc79e6832000101)

## Description

Summary

Given a Hash made up of keys and values, invert the hash by swapping them.

Examples

```
Given:

  { a: '1',
    b: '2',
    c: '3' }

Return:

  { 1: 'a',
    2: 'b',
    3: 'c' }



Given:

  { foo:   'bar',
    hello: 'world' }

Return:

  { bar:   'foo',
    world: 'hello' }
```

Notes

- Keys and values may be of any type appropriate for use as a key.
- All hashes provided as input will have unique values, so the inversion is involutive. In other words, do not worry about identical values stored under different keys.

## My Solution

**JavaScript**

```js
const invertHash = (hash) => Object.entries(hash).reduce((acc, [key, val]) => ({ ...acc, [val]: key }), {});
```

# [Shorten Me: Array Declaration IV (1-30)](https://www.codewars.com/kata/5a54cdeb6f46dec1e5000356)

## Description

**Task**

You have to write an array() function returning an array object with elements as follow:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
```

**Coding Limitation:**

Less than 40 characters

## My Solution

**JavaScript**

```js
array = (_) => [...Array(30)].map((_, i) => i + 1);
```

### User Solution

**JavaScript**

```js
array = (_) => [...Array(31).keys()].slice(1);
```

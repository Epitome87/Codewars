# [80's Kids #3: Punky Brewster's Socks](https://www.codewars.com/kata/5662292ee7e2da24e900012f)

## Description

Punky loves wearing different colored socks, but Henry can't stand it.

Given an array of different colored socks, return a pair depending on who was picking them out.

Example:

```js
getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
```

Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

If there is no possible combination of socks, return an empty array.

## My Solution

**JavaScript**

```js
const getSocks = (name, socks) => {
  if (name === 'Punky') {
    const uniqueSocks = [...new Set(socks)];
    return uniqueSocks.length < 2 ? [] : uniqueSocks.slice(0, 2);
  }
  return socks.filter((sock, idx) => socks.indexOf(sock) !== socks.lastIndexOf(sock)).slice(0, 2);
};
```

```js
const getSocks = (name, socks) => {
  if (name === 'Punky') {
    if (socks.every((sock) => sock === socks[0])) return [];
    return socks.filter((sock, idx) => idx === 0 || sock !== socks[0]).slice(0, 2);
  }
  return socks.filter((sock, idx) => socks.indexOf(sock) !== socks.lastIndexOf(sock)).slice(0, 2);
};
```

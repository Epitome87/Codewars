# [Curing Arachnophobia](https://www.codewars.com/kata/5bc73331797b005d18000255)

## Description

There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.

Our spiders will have legs, body, eyes and a mouth. Here are some examples:

```
/\((OOwOO))/\

/╲(((0000w0000)))╱\

^(oWo)^
```

You will be given four values:

1. leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
2. body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
3. mouth representing the spider's mouth
4. eye representing the spider's eye

Note: the eyes are symmetric, and their total amount is 2 to the power of body size.

You will also be given only valid data. That's it for the instructions, you can start coding!

## My Solution

**JavaScript**

```js
const drawSpider = (legSize, bodySize, mouth, eye) => {
  const leg = { 1: '^ ^', 2: '/\\ /\\', 3: '/╲ ╱\\', 4: '╱╲ ╱╲' }[legSize];
  const body = { 1: '( )', 2: '(( ))', 3: '((( )))' }[bodySize];
  const e = eye.repeat(2 ** bodySize / 2);

  return `${leg.slice(0, leg.length / 2)}${body.slice(0, body.length / 2)}${e}${mouth}${e}${body.slice(
    body.length / 2 + 1
  )}${leg.slice(leg.length / 2 + 1)}`;
};
```

### User Solution

**JavaScript**

```js
const drawSpider = (ls, bs, m, e) =>
  ll[ls] + '('.repeat(bs) + (e = e.repeat(2 * (bs - 1) || 1)) + m + e + ')'.repeat(bs) + rl[ls];
const ll = [, '^', '/\\', '/╲', '╱╲'];
const rl = [, '^', '/\\', '╱\\', '╱╲'];
```

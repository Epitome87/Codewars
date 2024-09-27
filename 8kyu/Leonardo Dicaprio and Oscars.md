# [Leonardo Dicaprio and Oscars](https://www.codewars.com/kata/56d49587df52101de70011e4)

## Description

You have to write a function that describe Leo:

```js
function leo(oscar) {}
```

if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".  
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"  
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"  
if it was over 88 you should return "Leo got one already!"

## My Solution

**JavaScript**

```js
const leo = (oscar) =>
  oscar > 88
    ? 'Leo got one already!'
    : oscar === 88
    ? 'Leo finally won the oscar! Leo is happy'
    : oscar === 86
    ? 'Not even for Wolf of wallstreet?!'
    : 'When will you give Leo an Oscar?';
```

```js
const leo = (oscar) => {
  if (oscar === 88) return 'Leo finally won the oscar! Leo is happy';
  if (oscar === 86) return 'Not even for Wolf of wallstreet?!';
  if (oscar > 88) return 'Leo got one already!';
  return 'When will you give Leo an Oscar?';
};
```

**Python**

```py
def leo(oscar):
    return 'Leo got one already!' if oscar > 88 else 'Leo finally won the oscar! Leo is happy' if oscar == 88 else 'Not even for Wolf of wallstreet?!' if oscar == 86 else 'When will you give Leo an Oscar?'
```

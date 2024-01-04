# [Return to Sanity](https://www.codewars.com/kata/514a7ac1a33775cbb500001e)

## Description

This function should return an object, but it's not doing what's intended. What's wrong?

Starting (Python) code:

```py
def mystery():
    results = {
    'sanity': 'Hello'}
    return
    results
```

## My Solution

**JavaScript**

```js
function mystery() {
  const results = { sanity: 'Hello' };
  return results;
}
```

**Python**

```py
mystery = lambda: { 'sanity': 'Hello' }
```

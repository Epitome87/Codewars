# [Delete Occurrences of an Element if it Occurs More Than n Times](https://www.codewars.com/kata/554ca54ffa7d91b236000023)

## Description

**Enough is enough!**

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

**Task**

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

## My Solution

**JavaScript**

```js
const deleteNth = (arr, n, counts = {}) => arr.filter((v) => (counts[v] = counts[v] + 1 || 1) <= n);
```

```js
const deleteNth = (arr, n) => {
  const count = {};
  const res = [];

  for (let el of arr) {
    if (count[el]) {
      if (count[el] < n) {
        res.push(el);
        count[el] = count[el] + 1;
      }
    } else {
      res.push(el);
      count[el] = 1;
    }
  }
  return res;
};
```

**Python**

```py
def delete_nth(order, max_e):
    cache = {}
    result = []
    
    for x in order:
        cache[x] = cache.get(x, 0) + 1
        if cache[x] <= max_e: result.append(x)
    
    return result
```

### User Solution

**JavaScript**

```js
function deleteNth(arr, x) {
  var count = {};
  return arr.filter(function (a) {
    count[a] = ~~count[a] + 1;
    return count[a] <= x;
  });
}
```

## Takeaways

1. Note how the last user set count[a] equal to `~~count[a] + 1. Here, ~~count[a]` converts a potentially undefined value to 0. Try to remember this, as this situation comes up quite often!
2. Another solution to the above situation is `(count[a] || 0) + 1`.
3. Another way is: `count[a] = count[a] + 1 || 1`. If count[a] is undefined, we set it to 1, otherwise increment by 1.
4. Remember, to save lines you can always set a value in a conditional while also running conditional logic on that value.

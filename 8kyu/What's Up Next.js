/*
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/

// My solution:
const nextItem = (xs, item) => {
  let isFound = false;
  for (let el of xs) {
    if (isFound) return el;
    if (el === item) isFound = true;
  }
};

// Clever user solution:
const nextItem = (xs, item) => {
  const iter = xs[Symbol.iterator]();
  for (let el of iter) {
    if (el === item) return iter.next().value;
  }
};

// Another decent user solution:
function nextItem(a, b) {
  'use strict';
  if (Array.isArray(a) || typeof a === 'string') return a.indexOf(b) === -1 ? undefined : a[a.indexOf(b) + 1];
  var o;
  while ((o = a.next()).value !== b && !o.done);
  return a.next().value;
}

/* Takeaways:
1) Note the particular nuance to this problem: We don't just want the next element of an array,
we want the next element of any Iterable (so the next character of a String, etc).
The second user solution first deals with Arrays and Strings, which also implement Symbol.iterator (but do not appear to have a .next method???).
2) Making something Iterable with Symbol.iterator allows us to make use of the for...of loop.
*/

/*
In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

first the first term in the sequence
c the constant that you are going to ADD ( since it is an arithmetic sequence...)
l the number of terms that should be returned
Useful link: Sequence

Be sure to check out my Arithmetic sequence Kata first ;)
Don't forget about the indexing pitfall ;)
*/

// My solution:
const seqlist = (first, c, l) => Array.from({ length: l }, (_, i) => first + i * c);

// Good user solution:
var seqlist = function (first, c, l) {
  return Array(l)
    .fill()
    .map((_, i) => first + i * c);
};

// Good user solution:
const seqlist = (first, c, l) => [...Array(l)].map((_, idx) => idx * c + first);

/* Takeaways:
1) Remember: When we don't need to access the initial values of an array, we can prefer something like: Array(l).fill().map() over Array.from().
2) Also remember: Rather than the above, we can do [...Array(l)].map, thus skipping the .fill() call. This is because, on its own, Array(l) gives a sparse array. But spreading such an array into an empty array gives us a dense array where each element is undefined.
*/

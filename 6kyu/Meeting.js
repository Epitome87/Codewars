/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".
*/

// My solution:
const meeting = (str) =>
  str
    .toUpperCase()
    .split(';')
    .map((name) => name.split(':').reverse())
    .sort()
    .reduce((acc, curr) => acc + `(${curr[0]}, ${curr[1]})`, '');

/* Takeaways:
1) I could not sort a name by doing a[1] < b[1] (where those are the last names). Why is this?
2) The sort method seems to be able to automatically handle arrays? For example, it correctly
sorts ["Korn, Madison"] vs ["Korn, Mega"]
*/

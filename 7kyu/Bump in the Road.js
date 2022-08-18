/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

// My first solution:
const bump = (x) => (x.split('_').join('').length > 15 ? 'Car Dead' : 'Woohoo!');

// My second solution:
const bump = (x) => (x.split('').filter((x) => x === 'n').length > 15 ? 'Car Dead' : 'Woohoo!');

// My third solution:
const bump = (x) => (x.replace(/[_]/g, '').length > 15 ? 'Car Dead' : 'Woohoo!');

// Top user solution:
const bump = (x) => (x.split('n').length > 16 ? 'Car Dead' : 'Woohoo!');

/* Takeways:
1) Yet again, the clever use-case of the split method! Specifically:
If we want to check how many (n) occurrence of a char (c), we can check:
n = str.split(n).length + 1;
*/

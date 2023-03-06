/*
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/

// My solution:
const nerdify = (text) => text.replace(/a/gi, '4').replace(/e/gi, '3').replace(/l/g, '1');

// Top user solution:
const nerdify = (t) => t.replace(/[aelAE]/g, (a) => ({ a: 4, e: 3, l: 1 }[a.toLowerCase()]));

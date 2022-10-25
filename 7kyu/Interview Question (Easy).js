/*
 */

// My TERRIBLE first solution:
const getStrings = (city) => {
  const count = {};
  for (let char of city.toLowerCase()) {
    if (char === ' ' || char === '-' || char === "'") continue;
    if (count[char]) count[char] += 1;
    else count[char] = 1;
  }
  const res = Object.entries(count).map((n) => `${n[0]}:${'*'.repeat(n[1])}`);

  return res.join(',');
};

// My refactored solution:
const getStrings = (city) => {
  city = city.toLowerCase().replace(/[^a-z]/g, '');

  const counts = [...city].reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .map((n) => `${n[0]}:${'*'.repeat(n[1])}`)
    .join(',');
};

// Clever one-line user solution:
const getStrings = (city) =>
  ((arr) =>
    [...new Set(arr)]
      .join(``)
      .match(/[a-z]/g)
      .map((val) => `${val}:${`*`.repeat(arr.filter((v) => v === val).length)}`)
      .join(`,`))([...city.toLowerCase()]);

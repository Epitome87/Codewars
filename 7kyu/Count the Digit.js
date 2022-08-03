// My solution:
function nbDig(n, d) {
  const squares = [];
  for (let i = 0; i <= n; i++) {
    squares.push(i * i);
  }

  return squares.reduce(
    (acc, curr) => acc + curr.toString().split(d).length - 1,
    0
  );
}

// Best one-liner from user:
const nbDig = (n, d) =>
  [...Array(++n)]
    .map((_, idx) => idx ** 2)
    .join(``)
    .split(d).length - 1;

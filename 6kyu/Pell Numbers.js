/*
The Pell sequence is the sequence of integers defined by the initial values

P(0) = 0, P(1) = 1
and the recurrence relation

P(n) = 2 * P(n-1) + P(n-2)
The first few values of P(n) are

0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ...
Task
Your task is to write a method that returns nth Pell number
*/

// My solution:
const pell = (n) =>
  n < 2
    ? [0n, 1n][n]
    : [0n, 1n, ...Array(n - 1)]
        .reduce(
          (acc, curr, idx) =>
            idx < 2 ? acc : [...acc, 2n * acc[idx - 1] + acc[idx - 2]],
          [0n, 1n]
        )
        .at(-1);

// My original solution:
const pell = (n) => {
  const sequence = [0n, 1n];
  if (n < 2) return sequence[n];
  for (let i = 2; i <= n; i++) {
    sequence.push(2n * sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.at(-1);
};

// Clever user solution:
function pell(n) {
  let a = 0n,
    b = 1n;
  while (n-- > 0) {
    [a, b] = [b, b + b + a];
  }
  return a;
}

// Another clever user solution:
function pell(n) {
  n = BigInt(n);
  let [a, b] = [0n, 1n];
  while ((n = n - 1n) >= 0n) [a, b] = [b, 2n * b + a];
  return a;
}

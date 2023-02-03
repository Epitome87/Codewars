/*
To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.
*/

// My eh solution:
const olympicRing = (a) => {
  const map = {
    a: 1,
    b: 1,
    c: 0,
    d: 1,
    e: 1,
    f: 0,
    g: 1,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 1,
    p: 1,
    q: 1,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    A: 1,
    B: 2,
    C: 0,
    D: 1,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 1,
    P: 1,
    Q: 1,
    R: 1,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  };
  const ringCount = Math.floor([...a].reduce((acc, curr) => acc + map[curr], 0) / 2);
  return ringCount <= 1 ? 'Not even a medal!' : ringCount === 2 ? 'Bronze!' : ringCount === 3 ? 'Silver!' : 'Gold!';
};

// Top user solution:
const olympicRing = (str) => {
  const out =
    [...str].map((el) => ('qeopadgbQROPAD'.includes(el) ? 1 : el === 'B' ? 2 : 0)).reduce((a, b) => a + b, 0) / 2;
  return out < 2 ? 'Not even a medal!' : out < 3 ? 'Bronze!' : out < 4 ? 'Silver!' : 'Gold!';
};

// Clever user solution:
const olympicRing = (a) =>
  ['Not even a medal!', 'Not even a medal!', 'Bronze!', 'Silver!'][
    ~~((a.match(/[odOPQRDbpqeagA]/g) || []).length / 2) + (a.match(/B/g) || []).length
  ] || 'Gold!';

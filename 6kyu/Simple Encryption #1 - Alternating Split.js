/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

This kata is part of the Simple Encryption Series:

Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty
Have fun coding it and please don't forget to vote and rank this kata! :-)
*/

// My very sloppy solution:
function encrypt(text, n) {
  if (!text || n < 0) return text;

  let str = text;

  for (let i = 0; i < n; i++) {
    const odd = str
      .split('')
      .filter((n, i) => i % 2)
      .join('');
    const even = str
      .split('')
      .filter((n, i) => i % 2 === 0)
      .join('');
    str = odd + even;
  }

  return str;
}

function decrypt(encryptedText, n) {
  let str = encryptedText;

  for (let i = 0; i < n; i++) {
    const left = str.slice(0, str.length / 2);
    const right = str.slice(str.length / 2);
    str = '';

    for (let c = 0; c < Math.max(left.length, right.length); c++) {
      str += right[c] ? right[c] : '';
      str += left[c] ? left[c] : '';
    }
  }

  return str;
}

// Clever user solution:
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1');
  }
  return text;
}

function decrypt(text, n) {
  let l = text && (text.length / 2) | 0;
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''));
  }
  return text;
}

// Another clever user solution:
function encrypt(text, n = 0) {
  return n < 1 || text == null
    ? text
    : encrypt([...text].reduce(([a, b], v, i) => (i % 2 ? [a + v, b] : [a, b + v]), ['', '']).join(''), n - 1);
}

function decrypt(text, n) {
  return n < 1 || text == null
    ? text
    : decrypt(
        [...text]
          .slice(text.length / 2)
          .map((v, i) => v + text[i])
          .join('')
          .slice(0, text.length),
        n - 1
      );
}

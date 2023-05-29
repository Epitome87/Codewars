# [Reverse Vowels In A String](https://www.codewars.com/kata/585db3e8eec141ce9a00008f)

## Description

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

```
"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
```

For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!

## My Solution

**JavaScript**

```js
const reverseVowels = (str) => {
  const vowels = [...str].reduce((acc, curr, idx) => (/[aeiou]/i.test(curr) ? [...acc, [idx, curr]] : acc), []);
  return vowels
    .reduce((acc, curr, idx, arr) => ((acc[curr[0]] = arr[arr.length - idx - 1][1]), acc), [...str])
    .join('');
};
```

```js
const reverseVowels = (str) => {
  const vowels = [];
  const vowelIndices = [];
  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/i.test(str[i])) {
      vowels.push(str[i]);
      vowelIndices.push(i);
    }
  }
  return vowelIndices
    .reduce((acc, _, idx, arr) => ((acc[arr[arr.length - idx - 1]] = vowels[idx]), acc), [...str])
    .join('');
};
```

```js
const reverseVowels = (str) => {
  const vowels = [];
  const vowelIndices = [];
  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/i.test(str[i])) {
      vowels.push(str[i]);
      vowelIndices.push(i);
    }
  }
  const reversedVowelIndices = [...vowelIndices].reverse();

  const strArr = [...str];

  for (let i = 0; i < reversedVowelIndices.length; i++) {
    strArr[reversedVowelIndices[i]] = vowels[i];
  }

  return strArr.join('');
};
```

### User Solution

**JavaScript**

```js
function reverseVowels(str) {
  const vowels = str.match(/[aeoiu]/gi) || [];
  return str.replace(/[aeoiu]/gi, () => vowels.pop());
}
```

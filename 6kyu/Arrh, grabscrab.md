# [Arrh, Grabscrab!](https://www.codewars.com/kata/52b305bec65ea40fe90007a7)

## Description

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

```js
grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
```

Should return `["sport", "ports"].`

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!

## My Solution

**JavaScript**

```js
const grabscrab = (anagram, dictionary) => {
  const anagramMap = [...anagram].reduce((acc, curr) => ({ ...acc, [curr]: anagram.split(curr).length - 1 }), {});
  return dictionary.filter((word) => {
    if (word.length !== anagram.length) return false;
    const wordMap = [...word].reduce((acc, curr) => ({ ...acc, [curr]: word.split(curr).length - 1 }), {});
    return Object.entries(anagramMap).every(([key, val]) => wordMap[key] === val);
  });
};
```

```js
function grabscrab(anagram, dictionary) {
  const anagramMap = {};
  for (let char of anagram) {
    anagramMap[char] = anagramMap[char] + 1 || 1;
  }

  return dictionary.filter((word) => {
    if (word.length !== anagram.length) return false;
    const wordMap = {};
    for (let char of word) {
      wordMap[char] = wordMap[char] + 1 || 1;
    }
    for (let [key, val] of Object.entries(anagramMap)) {
      if (wordMap[key] !== val) return false;
    }
    return true;
  });
}
```

### User Solution

**JavaScript**

```js
const grabscrab = (anagram, dictionary) =>
  dictionary.filter((val) => [...val].sort().join(``) === [...anagram].sort().join(``));
```

## Takeaways

1. Silly oversight on my part! At first I thought a dictionary word could match as long as for each of its letters, the anagram contained those same letters (not counting used letters more than once). So for example, I thought an anagram of "cool" would match a dictionary word of "school". After I realized this was not the case, I did not change my solution very much. If I had taken the time and approached the solution from scratched, I would have just sorted the dictionary word and the anagram and compared them for equality!

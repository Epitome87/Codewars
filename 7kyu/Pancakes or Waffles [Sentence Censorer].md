# [Pancakes or Waffles [Sentence Censorer]](https://www.codewars.com/kata/674d4d8e3520c1e84eacf11e)

## Description

The owner of a certain chatbox app has came under fire recently for a drama regarding the age old debate of pancakes or waffles. Because of this, he came to you in order to hide any words regarding pancakes.

The following words are the words that he is looking to censor by replacing it with an equal amount of astricks (\*):

    pancakes, flapjacks, slapjacks, hotcakes

In conjunction to that, the following words shall be highlighted with a double astricks (\*\*):

    waffles, crepes, blintzes

Finally, as long as there is no mention of a waffle relating word in the sentence, also censor the following word unless, there is a waffle relating word then highlight it:

    syrup, honey, jam, butter, chocolate, margarine

Examples:

    print(censor("I like waffles with chocolate")) --> "I like **waffles** with **chocolate**"
    print(censor("I like pancakes with syrup" --> "I like ******* with *****"
    print(censor("The debate between pancakes and waffles is as sweet as honey" --> "The debate between ******** and **waffles** is as sweet as **honey**"

## My Solution

**JavaScript**

```js
const censor = (sentence) => {
  const result = [];
  const waffleWords = new Set(['pancakes', 'flapjacks', 'slapjacks', 'hotcakes']);
  const pancakeWords = new Set(['waffles', 'crepes', 'blintzes']);
  const toppingWords = new Set(['syrup', 'honey', 'jam', 'butter', 'chocolate', 'margarine']);
  let containsWaffleWord = false;

  for (let word of sentence.split(' ')) {
    if (waffleWords.has(word.toLowerCase())) {
      result.push('*'.repeat(word.length));
    } else if (pancakeWords.has(word.toLowerCase())) {
      result.push(`**${word}**`);
      containsWaffleWord = true;
    } else result.push(word);
  }

  for (let i = 0; i < result.length; ++i) {
    if (toppingWords.has(result[i].toLowerCase())) {
      result[i] = containsWaffleWord ? `**${result[i]}**` : '*'.repeat(result[i].length);
    }
  }

  return result.join(' ');
};
```

### User Solution

**JavaScript**

```js
const hide = (word) => '*'.repeat(word.length);
const highlight = (word) => '**' + word + '**';

const censor = (sentence) => {
  const hasWaffle = /waffles|crepes|blintzes/i.test(sentence);

  return sentence
    .replace(/pancakes|flapjacks|slapjacks|hotcakes/gi, hide)
    .replace(/waffles|crepes|blintzes/gi, highlight)
    .replace(/syrup|honey|jam|butter|chocolate|margarine/gi, hasWaffle ? highlight : hide);
};
```

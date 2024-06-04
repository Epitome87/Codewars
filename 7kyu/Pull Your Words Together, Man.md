# [Pull Your Words Together, Man](https://www.codewars.com/kata/59ad7d2e07157af687000070)

## Description

Your friend Robbie has successfully created an AI that is capable of communicating in English!

Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

```js
['this', 'is', 'a', 'sentence'];
```

Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a `sentencify` function, which takes the output that the machine gives, and formats it into proper English orthography.

Your function should:

1. Capitalize the first letter of the first word.
2. Add a period (.) to the end of the sentence.
3. Join the words into a complete string, with spaces.
4. Do no other manipulation on the words.
5. Here are a few examples of what your function should do:

| Input                                                | Output                                |
| ---------------------------------------------------- | ------------------------------------- |
| ["i", "am", "an", "AI"]                              | "I am an AI."                         |
| ["FIELDS","of","CORN","are","to","be","sown"]        | "FIELDS of CORN are to be sown."      |
| ["i'm","afraid","I","can't","let","you","do","that"] | "I'm afraid I can't let you do that." |

## My Solution

**JavaScript**

```js
const sentencify = (words) => words.join(' ').replace(/^./i, (v) => v.toUpperCase()) + '.';
```

```js
const sentencify = (words) => [words[0][0].toUpperCase() + words[0].slice(1), ...words.slice(1)].join(' ') + '.';
```

**Python**

```py
def sentencify(words):
    return ' '.join([x[0].upper() + x[1:] if i == 0 else x for i, x in enumerate(words)]) + '.'
```

### User Solution

**Python**

```py
def sentencify(words):
    sentence = ' '.join(words)
    return sentence[0].upper() + sentence[1:] + '.'
```

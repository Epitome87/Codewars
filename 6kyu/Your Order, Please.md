# [Your Order, Please](https://www.codewars.com/kata/55c45be3b2079eccff00010f)

## Description

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

**Examples**

```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

## My Solution

**JavaScript**

```js
const order = (words) =>
  words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');
```

```js
const order = (words) => {
  const wordsArray = words.split(' ');
  const result = [];

  for (let i = 0; i < words.length; i++) {
    wordsArray.forEach((word) => {
      if (word.includes(i)) result.push(word);
    });
  }

  return result.join(' ');
};
```

**Python**

```py
def order(sentence):
    wordList = sentence.split(' ')
    result = []

    for i in range(len(sentence)):
        for word in wordList:
            if str(i) in word:
                result.append(word)

    return ' '.join(result)
```

### User Solution

**Python**

```py
def order(words):
  return ' '.join(sorted(words.split(), key=lambda w:sorted(w)))
```

```py
def order(sentence):
  return " ".join(sorted(sentence.split(), key=min))
```

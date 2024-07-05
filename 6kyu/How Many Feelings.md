# [How Many Feelings?](https://www.codewars.com/kata/5a33ec23ee1aaebecf000130)

## Description

You have two arguments: `string` - a string of random letters(only lowercase) and `array` - an array of strings(feelings). Your task is to return how many specific feelings are in the `array`.

For example:

```
string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'

string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'

string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'
```

If the feeling can be formed once - plus one to the answer.

If the feeling can be formed several times from different letters - plus one to the answer.

Each letter in `string` participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.

## My Solution

**JavaScript**

```js
// Shouldn't work! We need a frequency count, not a Set.
const countFeelings = (string, array, strSet = new Set(string)) => {
  const count = array.reduce((acc, feeling) => ([...feeling].every((char) => strSet.has(char)) ? ++acc : acc), 0);
  return `${count} feeling${count !== 1 ? 's' : ''}.`;
};
```

```js
const countFeelings = (string, array) => {
  let result = 0;
  const strMap = createFrequencyMap(string);

  for (let feeling of array) {
    const feelingMap = createFrequencyMap(feeling);
    if (canFormFeeling(strMap, feelingMap)) result++;
  }

  return `${result} feeling${result !== 1 ? 's' : ''}.`;
};

const createFrequencyMap = (str) => [...str].reduce((acc, cur) => ((acc[cur] = acc[cur] + 1 || 1), acc), {});

const canFormFeeling = (mapA, mapB) => {
  for (let key in mapB) if (!mapA[key] || mapA[key] < mapB[key]) return false;

  return true;
};
```

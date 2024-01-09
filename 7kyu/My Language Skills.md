# [My Language Skills](https://www.codewars.com/kata/5b16490986b6d336c900007d)

## Description

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples

```
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
```

## My Solution

**JavaScript**

```js
const myLanguages = (results) =>
  Object.keys(results)
    .filter((key) => results[key] >= 60)
    .sort((a, b) => results[b] - results[a]);
```

**Python**

```py
def my_languages(results):
    return sorted([key for key in results if results[key] >= 60], key=lambda key: results[key], reverse=True)
```

### User Solution

**Python**

```py
def my_languages(results):
    return sorted((l for l,r in results.items() if r>=60), reverse=True, key=results.get)
```

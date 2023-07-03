# [Swap Items in a Dictionary](https://www.codewars.com/kata/5a21e090f28b824def00013c)

## Description

In this kata, you will take the keys and values of an object and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

For example, given the dictionary: `{'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'}`,

you should return: `{'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}`

Notes:

- The dictionary given will only contain strings
- The dictionary given will not be empty
- You do not have to sort the items in the lists

## My Solution

**JavaScript**

```js
const switchDict = (dic) =>
  Object.entries(dic).reduce((acc, [key, val]) => ({ ...acc, [val]: [...(acc[val] || []), key] }), {});
```

```js
const switchDict = (dic) => {
  const swappedDic = {};
  for (let [key, val] of Object.entries(dic)) {
    if (swappedDic[val]) swappedDic[val].push(key);
    else swappedDic[val] = [key];
  }
  return swappedDic;
};
```

### User Solution

**JavaScript**

```js
function switchDict(dic) {
  let keys = [...new Set(Object.keys(dic))];
  const dic2 = {};

  keys.forEach((i) => (dic2[dic[i]] ? dic2[dic[i]].push(i) : (dic2[dic[i]] = [i])));

  return dic2;
}
```

# [I Guess This Is A 7kyu #1: Search Result](https://www.codewars.com/kata/57d0d4dcc98a52779400000b)

## Description

You are using a search engine and type some keywords. For the sake of simplicity, we simplify all the keywords into one letter. For example, "abc" represents three keywords: a, b and c. We have a lot of search results, please pick out the results that contain all the keywords.

**Example:**

```
keywords="abc", searchResult=["ab","abc","abcd","bcd"]
You should return: ["abc","abcd"]
```

Key words can have different order, also may not be continuous and You don't need to sort them out or to remove the same result:

```
keywords="abc",
searchResult=["ab","cba","abc","axbxc","ddd","abc","cxab","aabbcc"]
You should return: ["cba","abc","axbxc","abc","cxab","aabbcc"]
```

Key words may contains uppercase letters:

```
keywords="Yes",
searchResult=["yes","Yes","Yeah","Yestoday"]
You should return: ["Yes","Yestoday"]
```

OK, that's all. I guess this is a 7kyu kata. If you agree, please rank it as 7kyu and vote very;-) If you think this kata is too easy or too hard, please shame me by rank it as you want and vote somewhat or none :[

**Task**

Complete function finalResult that accepts two arguments keywords and searchResult, return all valid results that contains all keywords.

Argument keywords is always a string that contains uppercase or lowercase letters; Argument searchResult is always a string array that contains any strings.

## My Solution

**JavaScript**

```js
const finalResult = (keywords, searchResult) => searchResult.filter((s) => [...keywords].every((k) => s.includes(k)));
```

```js
// Attempt before I understood that a search result just needs to include each letter in the keyword, not the appropriate frequency as well.
const finalResult = (keywords, searchResult) => {
  const keywordMap = [...keywords].reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
  return searchResult.filter((v) => Object.entries(keywordMap).every(([k, val]) => v.split(k).length - 1 >= val));
};
```

### User Solution

**JavaScript**

```js
function finalResult(keywords, searchResult) {
  return searchResult.filter((e) => new Set(e + keywords).size == new Set(e).size);
}
```

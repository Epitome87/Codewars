# [Shortest Code: Reading a Book](https://www.codewars.com/kata/570c560c15944a98e9000fd2)

## Description

(Code length limit: 130 chars)

This is the challenge version of coding 3min series. If you feel difficult, please complete the simple version

**Task**

John reading a book, When he met a word that he had never read, he will read the word spelling, each letter(not for punctuation,number, only letter) takes 1 second; If he have read the word, he will read the word, each word takes 1 second.

Give you a parameter words(Each word is separated by space)

Return a number that how many seconds John can finish reading.

**Example**

```
sc("Hello World!")=10
John read all the word spelling.

sc("black cat and white cat all are cat")=24
John read the 2nd 'cat' and 3rd 'cat' used 2 seconds.

sc("black Cat and white cat all are cat")=24
'Cat' and 'cat' are same words,your code should ignore the case

words1="Related Articles: Ruby Environment, CoffeeScript Environment, JavaScript Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment."
sc(words1)=86

words2="Related Articles: Ruby Environment, Coffee Script Environment, Java Script Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment."
sc(words2)=78
CoffeeScript is one word, Coffee Script are two words
```

**Code length calculation**

In javascript, we can't get the user's real code, we can only get the system compiled code. Code length calculation is based the compiled code.

For example:

If you typed sc=x=>x+1
after compile, it will be:sc=function(x){return x+1;}

## My Solution

**JavaScript**

```js
// Auto-format added semi-colons, otherwise this solution is < 130 characters
sc = (w) => {
  let r = {};
  let t = 0;
  for (let c of w
    .toLowerCase()
    .replace(/[^a-z ]/gi, '')
    .split(' ')) {
    if (r[c]) t++;
    else {
      t += c.length;
      r[c] = 1;
    }
  }
  return t;
};
```

```js
// Readable version that isn't < 130 characters.
const sc = (words) => {
  const readWords = {};
  const wordArr = words
    .toLowerCase()
    .replace(/[^a-z ]/gi, '')
    .split(' ');
  let timeTaken = 0;

  for (let word of wordArr) {
    if (readWords[word]) timeTaken++;
    else {
      timeTaken += word.length;
      readWords[word] = true;
    }
  }

  return timeTaken;
};
```

### User Solution

**JavaScript**

```js
const sc = (w) =>
  w
    .toLowerCase()
    .replace(/[^a-z ]/g, '')
    .match(/\S+/g)
    .reduce((sum, curr, i, a) => sum + (a.indexOf(curr) != i ? 1 : curr.length), 0);
```

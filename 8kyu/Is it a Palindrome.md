# [Is It a Palindrome](https://www.codewars.com/kata/57a1fd2ce298a731b20006a4)

## Description

Write a function that checks if a given string (case insensitive) is a palindrome.

## My Solution

**JavaScript**

```js
const isPalindrome = (x) => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
```

**Python**

```py
def is_palindrome(s):
    return s.lower() == s[::-1].lower()
```

### User Solution

**JavaScript**

```js
function isPalindrome(x, str = x.toLowerCase()) {
  return str === [...str].reverse().join('');
}
```

## Takeaways

1. Perhaps not best practice, but remember we can use default params to create new variables, to avoid having to lower-case twice!

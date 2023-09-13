# [Training JS #40: Regular Expression - "|", "[]" and "()"](https://www.codewars.com/kata/573d11c48b97c0ad970002d4)

## Description

This time you need to write a regular expression that matches all URL contained in the string.

The rules:

URL start with http:// or https://
URL end with .com or .net
The middle part of URL can use letters, numbers and dots
Need to ignore case, and a string may contain multiple URLs
Your regular expression name should be regex and your result should be a string array.

Examples

```
"http://codewars.com".match(regex)
should return [ 'http://codewars.com' ]
"http://www.codewars.com".match(regex)
should return [ 'http://www.codewars.com' ]
"HTTP://CODEWARS.COM".match(regex)
should return [ 'HTTP://CODEWARS.COM' ]
"https://www.codewars.com".match(regex)
should return [ 'https://www.codewars.com' ]
"http://www.codewars.net".match(regex)
should return [ 'http://www.codewars.net' ]
"1234http://www.codewars.comabcd".match(regex)
should return [ 'http://www.codewars.com' ]
"http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex)
should return [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]
"http://www.codewars.com.net".match(regex)
should return [ 'http://www.codewars.com.net' ]
"http://www.codewars.com.fak".match(regex)
should return [ 'http://www.codewars.com' ]
```

These examples should return null:

```
"ftp://www.codewars.com".match(regex)
"http://www.code#wars.com".match(regex)
"http://wwwcodewarscom".match(regex)
"http://www.codewars.org".match(regex)
"http://www . codewars . com".match(regex)
"http://mail@codewars.com".match(regex)
```

Hint: to match "/" and ".", you should use "\/" and "\." "\" is the escape character, we will learn it in the next lesson.

## My Solution

**JavaScript**

```js
const regex = /https?:\/\/[a-z0-9.]+\.(com|net)/gi;
```

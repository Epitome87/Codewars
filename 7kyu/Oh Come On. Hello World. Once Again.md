# [Oh Come On! Hello World! Once Again?](https://www.codewars.com/kata/594a7ea087a7c6cbe60000d6)

## Description

Write a function f (in C# F) that returns Hello, world! string. But there is one thing, you cannot use helowrd letters.

The C# test cases ignore checking for banned letters in words class, string and public.
The C++ test cases ignore checking for banned letters in words string, std and return.

Have fun!

## My Solution

**JavaScript**

```js
f = () => '\u0048\u0065\u006c\u006c\u006f\u002c\u0020\u0077\u006f\u0072\u006c\u0064\u0021';
```

### User Solution

**JavaScript**

```js
f = (_) => '\x48\x65\x6c\x6c\x6f\x2c\x20\x77\x6f\x72\x6c\x64\x21';
```

## Takeaways

1. We can use the hexadecimal or unicode escape sequences to write strings. For example: `'\x48'` and `'\u0048'` represent the characer `'H'`

# [Mysterious Function](https://www.codewars.com/kata/55217af7ecb43366f8000f76)

## Description

Among the ruins of an ancient city a group of archaeologists found a mysterious function with lots of HOLES in it called getNum(n) (or get_num(n) in ruby, python, or r). They tried to call it with some arguments. And finally they got this journal:

```
getNum(300) #-> returns 2
getNum(90783) #-> returns 4
getNum(123321) #-> returns 0
getNum(89282350306) #-> returns 8
getNum(3479283469) #-> returns 5
```

The archaeologists were totally stuck with this challenge. They were all in desperation but then.... came YOU the SUPER-AWESOME programmer. Will you be able to understand the mystery of this function and rewrite it?

## My Solution

**JavaScript**

```js
const getNum = (n) => [...`${n}`].reduce((acc, cur) => acc + (/[069]/.test(cur) ? 1 : cur === '8' ? 2 : 0), 0);
```

### User Solution

**JavaScript**

```js
function getNum(n) {
  return n
    .toString()
    .split('')
    .map((v) => '1000001021'[+v])
    .reduce((s, v) => s + +v, 0);
}
```

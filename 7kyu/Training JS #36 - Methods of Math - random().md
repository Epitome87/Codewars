# [Training JS #36: Methods of Math - random()](https://www.codewars.com/kata/5735956413c2054a680009ec)

## Description

Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:

1. the code length should be 8;

2. The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

3. The 3rd-6th characters should be four numbers.

4. the 7th and 8th characters should be two symbols. The range is "~!@#$%^&\*".

5. If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:

```
AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^%
```

## My Solution

**JavaScript**

```js
const rndCode = () => {
  let code = '';

  for (let i = 0; i < 2; i++) {
    code += 'ABCDEFGHIJKLM'[Math.floor(Math.random() * 13)];
  }

  for (let i = 0; i < 4; i++) {
    code += Math.floor(Math.random() * 10);
  }

  for (let i = 0; i < 2; i++) {
    code += '~!@#$%^&*'[Math.floor(Math.random() * 9)];
  }

  return code;
};
```

### User Solution

**JavaScript**

```js
function rndCode() {
  var randomRange = function (range, count) {
    var sequence = [];
    for (var i = 0; i < count; i++) {
      sequence.push(range[~~(range.length * Math.random())]);
    }

    return sequence.join('');
  };

  return randomRange('ABCDEFGHIJKLM', 2) + randomRange('0123456789', 4) + randomRange('~!@#$%^&*', 2);
}
```

```js
function rndCode() {
  var p1 = 'ABCDEFGHIJKLM';
  var p2 = '0123456789';
  var p3 = '~!@#$%^&*';
  return [p1, p1, p2, p2, p2, p2, p3, p3].map((v) => v[~~(Math.random() * v.length)]).join('');
}
```

# [Simple Fun #48: Higher Version](https://www.codewars.com/kata/58884e352ffea6d2f8000082)

## Description

**Task**

Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields.

Return true if the first version is higher than the second version and false otherwise.

The syntax follows the regular semver ordering rules:

```
1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
        < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0
```

There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like 100.020.003 (it would instead be given as 100.20.3).

**Example**

For ver1 = "1.2.2" and ver2 = "1.2.0", the output should be true;

For ver1 = "1.0.5" and ver2 = "1.1.0", the output should be false.

**Input/Output**

- [input] string ver1
- [input] string ver2
- [output] a boolean value

## My Solution

**JavaScript**

```js
const higherVersion = (ver1, ver2) => {
  const v1Arr = ver1.split('.');
  const v2Arr = ver2.split('.');

  for (let i = 0; i < v1Arr.length; i++) {
    if (+v1Arr[i] > +v2Arr[i]) return true;
    if (+v1Arr[i] < +v2Arr[i]) return false;
  }

  return false;
};
```

### User Solution

**JavaScript**

```js
function higherVersion(ver1, ver2) {
  if (ver1 === ver2) return false;
  let [a1, a2] = [ver1.split('.'), ver2.split('.')];
  for (let i in a1) if (a1[i] !== a2[i]) return +a1[i] > +a2[i];
}
```

```js
const higherVersion = (ver1, ver2) =>
  ver1.split(`.`).reduce((pre, val, idx) => pre || val - ver2.split(`.`)[idx], 0) > 0;
```

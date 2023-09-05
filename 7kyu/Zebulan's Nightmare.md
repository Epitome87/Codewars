# [Zebulan's Nightmare](https://www.codewars.com/kata/570fd7ad34e6130455001835)

## Description

Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

```js
zebulansNightmare('camel_case') == 'camelCase';
zebulansNightmare('zebulans_nightmare') == 'zebulansNightmare';
zebulansNightmare('get_string') == 'getString';
zebulansNightmare('convert_to_uppercase') == 'convertToUppercase';
zebulansNightmare('main') == 'main';
```

## My Solution

**JavaScript**

```js
const zebulansNightmare = (functionName) => functionName.replace(/_\w/g, (c) => c.slice(1).toUpperCase());
```

```js
const zebulansNightmare = (functionName) =>
  functionName
    .split('_')
    .map((word, idx) => (idx > 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');
```

### User Solution

**JavaScript**

```js
const zebulansNightmare = (functionName) => functionName.replace(/_(\w)/g, (_, $1) => $1.toUpperCase());
```

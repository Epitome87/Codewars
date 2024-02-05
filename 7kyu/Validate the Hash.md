# [Validate the Hash](https://www.codewars.com/kata/5a15a2d8c374cbc353000074)

## Description

A file's hash value is essentially a string of numbers and letters of fixed length, that functions as a cryptographic fingerprint for that file.

File hashes are commonly used in cyber security to identify different strains of malware, with a unique hash value corresponding to each malware file.

Your junior analyst has just sent you a list of new malware hashes, but you know he has made mistakes entering them. Write a function to validate the array of hash values.

In this scenario, a valid hash value consists of five numbers and five lowercase letters in any order.

Return an array of valid hash values, and eliminate any duplicates.

## My Solution

**JavaScript**

```js
const malwareValidate = (hashArr) => [
  ...new Set(
    hashArr.filter(
      (hash) => hash.split(/[a-z]/).length - 1 === 5 && hash.split(/\d/).length - 1 === 5 && hash.length === 10
    )
  ),
];
```

### User Solution

**JavaScript**

```js
const malwareValidate = (hashArr) =>
  [...new Set(hashArr)].filter((str) => str.match(/(?=^.{10}$)(?=(.*\d.*){5})(.*[a-z].*){5}/));
```

```js
const malwareValidate = (hashArr) => [
  ...new Set(hashArr.filter((val) => val.replace(/[a-z]/g, ``).length === 5 && val.replace(/\d/g, ``).length === 5)),
];
```

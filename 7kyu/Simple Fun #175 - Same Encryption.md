# [Simple Fun #175: Same Encryption](https://www.codewars.com/kata/58b6c403a38abaaf6c00006b)

## Description

John loves encryption. He can encrypt any string by the following algorithm:

````
take the first and the last letters of the word;
replace the letters between them with their number;
replace this number with the sum of it digits
          until a single digit is obtained.```
Given two strings(`s1` and `s2`), return `true` if their encryption is the same, or `false` otherwise.

# Example

 For `s1 = "EbnhGfjklmjhgz" and s2 = "Eabcz"`, the result should be `true`.
````

"EbnhGfjklmjhgz" --> "E12z" --> "E3z" "Eabcz" --> "E3z" Their encryption is the same.```

Input/Output
[input] string s1
The first string to be encrypted.

s1.length >= 3

[input] string s2
The second string to be encrypted.

s2.length >= 3

[output] a boolean value
true if encryption is the same, false otherwise.

## My Solution

**JavaScript**

```js
const sameEncryption = (s1, s2) => {
  const encrypt = (str) => {
    let length = str.slice(1, str.length - 1).length;
    while (length > 9) length = [...`${length}`].reduce((acc, cur) => +acc + +cur, 0);
    return str[0] + length + str[str.length - 1];
  };

  return encrypt(s1) === encrypt(s2);
};
```

**Python**

```py
def same_encryption(s1, s2):
    def encrypt(s):
        return s[0] + str(len(s) % 9) + s[-1]
    return encrypt(s1) == encrypt(s2)
```

### User Solution

**JavaScript**

```js
const sameEncryption = (s1, s2) => s1[0] + (s1.length % 9) + s1.slice(-1) == s2[0] + (s2.length % 9) + s2.slice(-1);
```

```js
const encrypt = (s) => s.replace(/\B.*\B/, (c) => c.length % 9 || 9);
const sameEncryption = (s1, s2) => encrypt(s1) === encrypt(s2);
```

## Takeaways

1. User rationale for why modulus 9 works:

```
For example, 365 == 3*(99+1)+6*(9+1)+5

so, 365%9 == (3+6+5)%9 == 14%9 == (1+4)%9 == 5%9

%9 works as if it was the iteration of sum of all digits until it gets single digit. Smart solution.
```

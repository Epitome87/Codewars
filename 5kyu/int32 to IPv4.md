# [int32 to IPv4](https://www.codewars.com/kata/52e88b39ffb6ac53a400022e)

## Description

Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

- 1st octet 128 has the binary representation: 10000000
- 2nd octet 32 has the binary representation: 00100000
- 3rd octet 10 has the binary representation: 00001010
- 4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

**Examples**

```
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
```

## My Solution

**JavaScript**

```js
const int32ToIp = (int32, binaryStr = int32.toString(2).padStart(32, '0')) =>
  Array.from({ length: 4 }, (_, i) => parseInt(binaryStr.slice(i * 8, i * 8 + 8), 2)).join('.');
```

```js
const int32ToIp = (int32, binaryStr = int32.toString(2).padStart(32, '0')) =>
  [...Array(4)].map((_, i) => parseInt(binaryStr.slice(i * 8, i * 8 + 8), 2)).join('.');
```

### User Solution

**JavaScript**

````js
function int32ToIp(int32) {
  return ((int32 >> 24) & 0xff) + '.' + ((int32 >> 16) & 0xff) + '.' + ((int32 >> 8) & 0xff) + '.' + (int32 & 0xff);
}


```js
const int32ToIp = (int32) => [24, 16, 8, 0].map((e) => (int32 >> e) & 255).join('.');
````

## Takeaways:

1. Learn bit operations!

# [Binary Zoo](https://www.codewars.com/kata/5a1d91698ba9145199000141)

## Description

Oh no!
The new zookeeper has lost track of how many animals are in the zoo because the last person to do the count thought it would be funny to do it in binary.

Write a function that can help the zookeper convert the binary count.
Input will be an object where key:value-pairs will represent an animal and a binary number.
Output should be an integer that equals the sum of all the animals in the zoo.

## My Solution

**JavaScript**

```js
const countTheAnimals = (animals) => Object.values(animals).reduce((acc, cur) => acc + parseInt(cur, 2), 0);
```

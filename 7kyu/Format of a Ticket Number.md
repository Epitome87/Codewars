# [Format of a Ticket Number](https://www.codewars.com/kata/564717d6e94d5d6b21000066)

## Description

**Rules**

You must check if some ticket numbers are valid. To be valid, a ticket number must :

- Contain exactly 6 characters
- Contain : one letter then one digit then 4 letters

'letter' means a single character, unaccented, uppercase or lowercase, between a and z.

**Input arguments**

- tickets : an array of string, representing ticket numbers

**Return value**

An integer representing the number of valid ticket numbers.

## My Solution

**JavaScript**

```js
const nbrValidTickets = (tickets) => tickets.reduce((acc, cur) => acc + /^[a-z][0-9][a-z]{4}$/i.test(cur), 0);
```

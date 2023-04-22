# [SQL Basics: Mod](https://www.codewars.com/kata/591127cbe8b9fb05bd00004b)

## Description

Given the following table 'decimals':

**decimals table schema**

- id
- number1
- number2

Return a table with one column (mod) which is the output of number1 modulus number2.

## My Solution

**SQL**

```sql
SELECT number1 % number2 AS mod
FROM decimals;
```

### User Solution

**SQL**

```sql
SELECT
  MOD(number1, number2) AS mod
FROM decimals
```

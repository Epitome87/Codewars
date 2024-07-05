# [A === B](https://www.codewars.com/kata/58af092f78a1a54f2000000f)

## Description

Compare 2 integers and return if they are equals, don't use the comparison Operators

Can't use these Operators

| Operator | Description                       |
| -------- | --------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| <        | less than                         |
| >=       | greater than or equal to          |
| <=       | less than or equal to             |

**Example:**

```js
  0 == 0  => true
  0 == 1  => false
```

## My Solution

**JavaScript**

```js
const d01 = (a, b) => !(a - b);
```

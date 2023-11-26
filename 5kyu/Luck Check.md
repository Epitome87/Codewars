# [Luck Check](https://www.codewars.com/kata/5314b3c6bb244a48ab00076c)

## Description

In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to possess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:

```
003111    #             3 = 1 + 1 + 1
813372    #     8 + 1 + 3 = 3 + 7 + 2
17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
```

Such tickets were either eaten after being used or collected for bragging rights.

Your task is to write a function luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.

## My solution

**JavaScript**

```js
const luckCheck = (ticket) => {
  if (ticket.includes(' ') || parseInt(ticket) !== +ticket) throw new Error();
  const sum = (acc, curr) => acc + +curr;
  return (
    [...ticket.slice(0, ticket.length / 2)].reduce(sum, 0) ===
    [...ticket.slice(Math.ceil(ticket.length / 2))].reduce(sum, 0)
  );
};
```

### User Solution

**JavaScript**

```js
function luckCheck(ticket) {
  if (!ticket || !/^\d+$/.test(ticket)) {
    throw new Error('Invalid ticket number');
  }

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0, len = ticket.length; i < len; i++) {
    if (i < Math.floor(len / 2)) {
      leftSum += +ticket[i];
    } else if (i >= Math.ceil(len / 2)) {
      rightSum += +ticket[i];
    }
  }

  return rightSum === leftSum;
}
```

```js
function luckCheck(ticket) {
  if (!/^\d+$/.test(ticket)) return Error('Invalid input');
  const half = ticket.length >> 1;
  return sumDigits(ticket.slice(0, half)) == sumDigits(ticket.slice(-half));
}

function sumDigits(str) {
  return str.split('').reduce((a, b) => a + +b, 0);
}
```

## Takeaways:

1. The Error condition was rather tricky to get! parseInt is rather flexible at converting its input to an integer when possible. For example, it can handle '1234 ', '12a34', etc. Similarly, .isNaN is also very flexible.
2. We could have also used a Regex for the error condition:
   `if (!ticket || !/^\d+$/.test(ticket)`
3. Rather than using `.slice(Math.ceil(length / 2))` for our rightSum, we could have done: `slice(-length / 2)`.

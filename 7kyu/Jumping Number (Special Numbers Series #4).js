/*
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.

Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
*/

// My solution:
const jumpingNumber = (n) => {
  const numArr = n.toString().split('');

  for (let i = 0; i < numArr.length - 1; i++) {
    if (Math.abs(numArr[i] - numArr[i + 1]) !== 1) return 'Not!!';
  }

  return 'Jumping!!';
};

// Clever user solution:
const jumpingNumber = (n) =>
  n.toString().split``.every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) === 1)
    ? 'Jumping!!'
    : 'Not!!';

// Another good user solution:
function jumpingNumber(n) {
  return [...(n + '')].every(
    (x, i, a) => !i || x == +a[i - 1] + 1 || x == a[i - 1] - 1
  )
    ? 'Jumping!!'
    : 'Not!!';
}

/* Takeaways:
1) Instead of n.toString().split(''), we can do: [...n + '']
2) Instead of n.split('') we can do: [...n]
*/

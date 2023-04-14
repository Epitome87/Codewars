# Unique Pairs

## Description

Mrs. Frizzle is beginning to plan lessons for her science class next semester, and wants to encourage friendship amongst her students. To accomplish her goal, Mrs. Frizzle will ensure **each student has a chance to partner with every other student in the class** in a series of science projects.

Mrs. Frizzle does not know who will be in her class next semester, but she does know she will have n students total in her class.

**Specifications**

Create the function projectPartners with the parameter n representing the number of students in Mrs. Frizzle's class. The function should return the total number of unique pairs she can make with n students.

```
projectPartners(2)
  --> returns 1

projectPartners(4)
  --> returns 6
```

**Remarks**

- your solution should not contain any arrays or objects that are used similar to an array. Note that Haskell will use rather large numbers, such as 10^40, so any list-based solution will autmatically fail the test.

- your function will only receive a single number that is greater than or equal to 2 -- you do not need to worry about input validation.

## My Solution

```js
const projectPartners = (n) => (n * (n - 1)) / 2;
```

## Takeaways

1. This is essentially **n choose k**:
   `n! / k!(n - k)!`
   This formula is used to find the number of ways selecting k things out of n things, particularly where ordering does not matter.
   In this particular case, k is 2, which simplifies the formula to: n(n - 1) / 2.
2. Another way to look at it. The first student can be paired n - 1 other students. The second student can be paired with n - 2 other students (one less than the first student, who that student has already been paired). We get a summation of the form: (n - 1) + (n - 2) + ... + n - (n - 1). This is the same as: 1 + 2 + ... + (n - 1), which can be calculated with: n(n - 1) / 2.

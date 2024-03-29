# [Beginner Series #1 School Paperwork](https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd)

## Description

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

**Example:**

```
n= 5, m=5: 25
n=-5, m=5:  0
```

Waiting for translations and Feedback! Thanks!

## My Solution

**JavaScript**

```js
const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);
```

**TypeScript**

```ts
export const paperwork = (n: number, m: number): number => (n < 0 || m < 0 ? 0 : n * m);
```

**Python**

```py
def paperwork(n, m):
    return 0 if (n < 0 or m < 0) else n * m
```

### User Solution

**Python**

```py
def paperwork(n, m):
    return max(n, 0)*max(m, 0)
```

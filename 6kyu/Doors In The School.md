# [Doors In The School](https://www.codewars.com/kata/57c15d314677bb2bd4000017)

## Description

In the morning all the doors in the school are closed. The school is quite big: there are **N** doors. Then pupils start coming. It might be hard to believe, but all of them want to study! Also, there are exactly **N** children studying in this school, and they come one by one.

When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). Each student has their number, and each i-th student alters the status of every i-th door. For example: when the first child comes to the schools, he changes every first door (he opens all of them). The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).

You need to count how many doors are left opened after all the students have come.

Example:

![](http://i.imgur.com/IqlOi2q.png)

_Here you can see red squares – closed doors, green – opened ones._

Input:

> n – the number of doors and students, n ∈ N, n ∈ \[1, 100000\]

Output:

> o – the number of opened doors, o ∈ N

---

    doors(5)

Should return

    2

## My Solution

**JavaScript**

```js
const doors = (n) => {
  const doorStatus = Array(n).fill(false);

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      doorStatus[j - 1] = !doorStatus[j - 1];
    }
  }

  return doorStatus.filter((door) => door).length;
};
```

**Python**

```py
def doors(n):
    return int(n ** 0.5)
```

### User Solution

**JavaScript**

```js
const doors = (n) => Math.sqrt(n) | 0;
const doors = (n) => ~~Math.sqrt(n);
const doors = (n) => Math.floor(Math.sqrt(n));
```

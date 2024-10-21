# [See You Next Happy Year](https://www.codewars.com/kata/5ae7e3f068e6445bc8000046)

## Description

**Scenario**

_You're saying good-bye your best friend_ , **_See you next happy year_** .

**_Happy Year_** _is the year with only distinct digits_ , (e.g) **_2018_**

---

**Task**

**_Given_** a year, **_Find_** **_The next happy year_** or **_The closest year You'll see your best friend_** ![!alt](https://i.imgur.com/mdX8dJP.png) ![!alt](https://i.imgur.com/mdX8dJP.png)

---

**Notes**

- **_Year_** Of Course always **_Positive_** .
- **_Have no fear_** , _It is guaranteed that the answer exists_ .
- **_It's not necessary_** _that the year passed to the function is Happy one_ .
- **_Input Year with in range_** _(1000  ≤  y  ≤  9000)_

---

**Input >> Output Examples:**

    nextHappyYear (7712) ==> return (7801)


    next_happy_year(7712, 7801).

**_Explanation_**:

As the **_Next closest year with only distinct digits is_** _7801_ .

---

    nextHappyYear (8989) ==> return (9012)


    next_happy_year(8989, 9012).

**_Explanation_**:

As the **_Next closest year with only distinct digits is_** _9012_ .

---

    nextHappyYear (1001) ==> return (1023)


    next_happy_year(1001, 1023).

**_Explanation_**:

As the **_Next closest year with only distinct digits is_** _1023_ .

## My Solution

**JavaScript**

```js
const nextHappyYear = (year) => (new Set(`${++year}`).size < 4 ? nextHappyYear(year) : year);
```

```js
const nextHappyYear = (year) => {
  while (new Set(String(++year)).size < 4);
  return year;
};
```

**Python**

```py
def next_happy_year(year):
    return next_happy_year(year + 1) if len(set(str(year + 1))) < 4 else year + 1
```

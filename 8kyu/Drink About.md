# [Drinks About](https://www.codewars.com/kata/56170e844da7c6f647000063)

## Description

- Kids drink toddy.
- Teens drink coke.
- Young adults drink beer.
- Adults drink whisky.

Make a function that receive age, and return what they drink.

**Rules:**

- Children under 14 old.
- Teens under 18 old.
- Young under 21 old.
- Adults have 21 or more.

**Examples: (Input --> Output)**

```
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
```

## My Solution

**JavaScript**

```js
const peopleWithAgeDrink = (age) => 'drink ' + (age < 14 ? 'toddy' : age < 18 ? 'coke' : age < 21 ? 'beer' : 'whisky');
```

```js
const peopleWithAgeDrink = (age) => {
  if (age < 14) return 'drink toddy';
  if (age < 18) return 'drink coke';
  if (age < 21) return 'drink beer';
  return 'drink whisky';
};
```

**Python**

```py
def people_with_age_drink(age):
    return "drink " + ("toddy" if age < 14 else "coke" if age < 18 else "beer" if age < 21 else "whisky")
```

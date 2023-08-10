# [Turn Any Wodr Into a Beef Taco](https://www.codewars.com/kata/59414b46d040b7b8f7000021)

## Description

If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

**Key**

```
all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa
```

**NOTE**

We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.

## My Solution

**JavaScript**

```js
const tacofy = (word) => {
  const ingredients = [...word.toLowerCase()].reduce((acc, cur) => {
    if (/[aeiou]/i.test(cur)) return [...acc, 'beef'];
    switch (cur) {
      case 't':
        return [...acc, 'tomato'];
      case 'l':
        return [...acc, 'lettuce'];
      case 'c':
        return [...acc, 'cheese'];
      case 'g':
        return [...acc, 'guacamole'];
      case 's':
        return [...acc, 'salsa'];
      default:
        return acc;
    }
  }, []);

  return ['shell', ...ingredients, 'shell'];
};
```

### User Solution

**JavaScript**

```js
function tacofy(word) {
  var map = {
    t: 'tomato',
    l: 'lettuce',
    c: 'cheese',
    g: 'guacamole',
    s: 'salsa',
    a: 'beef',
    e: 'beef',
    i: 'beef',
    o: 'beef',
    u: 'beef',
  };
  return ['shell', ...[...word].map((x) => map[x.toLowerCase()]).filter((x) => x), 'shell'];
}
```

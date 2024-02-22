# [Get Planet Name by ID](https://www.codewars.com/kata/515e188a311df01cba000003)

## Description

The function is not returning the correct values. Can you figure out why?

Example (Input --> Output):

```
3 --> "Earth"
```

## My Solution

**JavaScript**

```js
function getPlanetName(id) {
  let name = '';

  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
  }

  return name;
}
```

```js
function getPlanetName(id) {
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
  }[id];
}
```

**Python**

```py
def get_planet_name(id):
    name = ""
    match id:
        case 1: name = "Mercury"
        case 2: name = "Venus"
        case 3: name = "Earth"
        case 4: name = "Mars"
        case 5: name = "Jupiter"
        case 6: name = "Saturn"
        case 7: name = "Uranus"
        case 8: name = "Neptune"
    return name
```

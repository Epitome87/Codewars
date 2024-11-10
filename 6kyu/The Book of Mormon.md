# [The Book of Mormon](https://www.codewars.com/kata/58373ba351e3b615de0001c3)

## Description

The Mormons are trying to find new followers and in order to do that they embark on missions.

Each time they go on a mission, each Mormon converts a fixed number of people (`reach`) into followers. This continues and every freshly converted Mormon as well as every original Mormon go on another mission and convert the same fixed number of people each. The process continues until they reach a predefined target number of followers (`target`).

Converted Mormons are unique so that there's no duplication amongst them.

Complete the function that calculates how many missions Mormons need to embark on, in order to reach their target. While each correct solution will pass, for more fun try to make a recursive function.

All inputs are valid positive integers.

**Examples**

    starting_number = 10, reach = 3, target = 9  -->  0
    # No missions needed because the number of followers already exceeds target

    starting_number = 40, reach = 2, target = 120  -->  1
    # Every mormon converts 2 people, so after 1 mission there are 40 + 80 = 120 mormons

    starting_number = 20_000, reach = 2, target = 7_000_000_000  -->  12
    # Mormons dominate the world after only 12 missions!

## My Solution

**JavaScript**

```js
let mormons = (totalMormons, reach, target) =>
  totalMormons >= target ? 0 : 1 + mormons(totalMormons + totalMormons * reach, reach, target);
```

```js
let mormons = (startingNumber, reach, target) => {
  let missions = 0;

  while (startingNumber < target) {
    missions++;
    startingNumber += startingNumber * reach;
  }

  return missions;
};
```

**Python**

```py
def mormons(starting_number, reach, target):
    if starting_number >= target:
        return 0
    return 1 + mormons(starting_number + starting_number * reach, reach, target)
```

```py
def mormons(starting_number, reach, target):
    missions = 0

    while starting_number < target:
        missions += 1
        starting_number += starting_number * reach

    return missions
```

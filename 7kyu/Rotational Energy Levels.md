# [Rotational Energy Levels](https://www.codewars.com/kata/587b6a5e8726476f9b0000e7)

## Description

Quantum mechanics tells us that a molecule is only allowed to have specific, discrete amounts of internal energy. The 'rigid rotor model', a model for describing rotations, tells us that the amount of rotational energy a molecule can have is given by:

`E = B * J * (J + 1)`,

where J is the state the molecule is in, and B is the 'rotational constant' (specific to the molecular species).

Write a function that returns an array of allowed energies for levels between Jmin and Jmax.

Notes:

- return empty array if Jmin is greater than Jmax (as it make no sense).
- Jmin, Jmax are integers.
- physically B must be positive, so return empty array if B <= 0

## My Solution

**JavaScript**

```js
const rotEnergies = (b, jMin, jMax) =>
  b < 1 ? [] : Array.from({ length: jMax - jMin + 1 }, (_, i) => b * (i + jMin) * (i + jMin + 1));
```

```js
const rotEnergies = (b, jMin, jMax) => {
  if (b <= 0) return [];

  const result = [];

  for (let i = jMin; i <= jMax; i++) {
    result.push(b * i * (i + 1));
  }

  return result;
};
```

**Python**

```py
def rot_energies(b, j_min, j_max):
    return [] if b < 1 else [b * i * (i + 1) for i in range(j_min, j_max + 1)]
```

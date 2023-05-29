# [Find the Force of Gravity Between Two Objects](https://www.codewars.com/kata/5b609ebc8f47bd595e000627)

## Description

Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

**input**

Two arrays are given:

- arr_val (value array), consists of 3 elements
  - 1st element : mass of obj 1
  - 2nd element : mass of obj 2
  - 3rd element : distance between their centers
- arr_unit (unit array), consists of 3 elements
  - 1st element : unit for mass of obj 1
  - 2nd element : unit for mass of obj 2
  - 3rd element : unit for distance between their centers

mass units are:

- kilogram (kg)
- gram (g)
- milligram (mg)
- microgram (μg)
- pound (lb)

distance units are:

- meter (m)
- centimeter (cm)
- millimeter (mm)
- micrometer (μm)
- feet (ft)

**Note**

value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

`μ` copy this from here to use it in your solution

## My Solution

**JavaScript**

```js
solution = ([mass1, mass2, distance], [unit1, unit2, distanceUnit]) => {
  const G = 6.67e-11;
  const units = { kg: 1, g: 1e-3, mg: 1e-6, μg: 1e-9, lb: 0.453592, m: 1, cm: 1e-2, mm: 1e-3, μm: 1e-6, ft: 0.3048 };
  return (G * units[unit1] * mass1 * units[unit2] * mass2) / Math.pow(units[distanceUnit] * distance, 2);
};
```

### User Solution

**JavaScript**

```js
const G = 6.67 * 10 ** -11;

const convertUnit = (value, unit) => {
  switch (unit) {
    case 'kg':
      return value;
    case 'g':
      return value * 0.001;
    case 'mg':
      return value * 0.000001;
    case 'μg':
      return value * 0.000000001;
    case 'lb':
      return value * 0.453592;
    case 'm':
      return value;
    case 'cm':
      return value * 0.01;
    case 'mm':
      return value * 0.001;
    case 'μm':
      return value * 0.000001;
    case 'ft':
      return value * 0.3048;
  }
};

solution = (arr_val, arr_unit) => {
  const [m1, m2, dist] = arr_val.map((val, i) => convertUnit(val, arr_unit[i]));
  return (G * m1 * m2) / dist ** 2;
};
```

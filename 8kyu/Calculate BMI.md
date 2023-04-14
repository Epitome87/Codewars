# Calculate BMI

## Description

Write function bmi that calculates body mass index (`bmi = weight / height2`).

- if bmi <= 18.5 return "Underweight"
- if bmi <= 25.0 return "Normal"
- if bmi <= 30.0 return "Overweight"
- if bmi > 30 return "Obese"

## My Solution

**JavaScript**

```js
const bmi = (weight, height) => {
  const result = weight / height ** 2;

  if (result <= 18.5) return 'Underweight';
  if (result <= 25.0) return 'Normal';
  if (result <= 30.0) return 'Overweight';
  return 'Obese';
};
```

**TypeScript**

```ts
export const bmi = (weight: number, height: number, res: number = weight / height ** 2): string =>
  res <= 18.5 ? 'Underweight' : res <= 25 ? 'Normal' : res <= 30 ? 'Overweight' : 'Obese';
```

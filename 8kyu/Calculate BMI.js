/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

// My eh solution:
const bmi = (weight, height) => {
  const result = weight / height ** 2;

  if (result <= 18.5) return 'Underweight';
  if (result <= 25.0) return 'Normal';
  if (result <= 30.0) return 'Overweight';
  return 'Obese';
};

// Clever user solution (though it adds an argument):
const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? 'Underweight'
    : bmi <= 25
    ? 'Normal'
    : bmi <= 30
    ? 'Overweight'
    : 'Obese';

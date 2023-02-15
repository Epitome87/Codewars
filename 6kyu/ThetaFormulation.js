/*
There were days in math class when I wished I had a simple way to quickly solve for any given variable in a formula and check my answers accordingly. If only I had a time machine...

Oh well! Anyhow, using the following formula:

Angle (in Radians) === Arc length / Radius length
Write a function thetaFormula:

When given two of the values and "?" returns the number value of the missing one.
When given all three values returns a boolean value verifying if the statement is true or false.
When given one or no values as arguments or invalid arguments returns null.
For Example:

    thetaFormula("?", 12, 35)        -->    0.343
    thetaFormula(3, "?", 14)         -->    42
    thetaFormula(5, 16, "?")         -->    3.2

    thetaFormula(2, 5, 7)            -->    false
    thetaFormula(2, 20, 10)          -->    true
    thetaFormula( -1, 1, -1)         -->    true

    thetaFormula(1, 2)               -->   null
    thetaFormula(1)                  -->   null
    thetaFormula()                   -->   null
    thetaFormula("?", "?", 2)        -->   null
If the returned value contains more than three numbers after the decimal it should be fixed to three decimal places. The function should be able to return negative values, they will be tested for.

Reference -

https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func/radians_tutorial/v/arc-length-from-angle-measure
*/

// My other solution:
const thetaFormula = (radius, arc, angle) => {
  if ([radius, arc, angle].every((arg) => typeof arg === 'number'))
    return radius === arc / angle;
  if (
    [radius, arc, angle].includes(undefined) ||
    [radius, arc, angle].join('').split('?').length > 2
  )
    return null;
  if (radius === '?') return +(arc / angle).toFixed(3);
  if (arc === '?') return +(radius * angle).toFixed(3);
  if (angle === '?') return +(arc / radius).toFixed(3);
  return null;
};

// My original solution:
function thetaFormula(radius, arc, angle) {
  if ([radius, arc, angle].every((arg) => typeof arg === 'number'))
    return radius === arc / angle;
  if ([radius, arc, angle].includes(undefined)) return null;
  if (radius === '?' && arc !== '?' && angle !== '?')
    return +(arc / angle).toFixed(3);
  if (radius !== '?' && arc === '?' && angle !== '?')
    return +(radius * angle).toFixed(3);
  if (radius !== '?' && arc !== '?' && angle === '?')
    return +(arc / radius).toFixed(3);
  return null;
}

// Top user solution:
function thetaFormula(radius, arc, angle) {
  if (arguments.length !== 3) return null;
  let nums = 0,
    inv = false;
  [radius, arc, angle].forEach((v) => {
    if (typeof v === 'number') ++nums;
    else if (v !== '?') inv = true;
  });
  if (inv || nums < 2) return null;

  switch (true) {
    case radius === '?':
      return +(arc / angle).toFixed(3);
    case arc === '?':
      return +(angle * radius).toFixed(3);
    case angle === '?':
      return +(arc / radius).toFixed(3);
    default:
      return angle === arc / radius;
  }
}

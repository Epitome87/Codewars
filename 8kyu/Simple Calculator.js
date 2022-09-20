/*
 */

// My solution:
const calculator = (a, b, op) => {
  if (typeof (a && b) == undefined) return 'unknown value';

  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return 'unknown value';
  }
};

// Clever user solution:
function calculator(a, b, sign) {
  try {
    return eval(a + sign + b);
  } catch (e) {
    return 'unknown value';
  }
}

// Another good user solution:
function calculator(a, b, sign) {
  var oper = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '/': a / b,
  };
  return oper[sign] ? oper[sign] : 'unknown value';
}

/* Takeaways:
1) Look into and remember the eval() property for use ONLY in challenges. Using it elsewhere
poses a security risk, according to MDN. Basically, eval() accepts a string and executes that as if it were an expression, statement, or sequences of statements. Can include variables and properties of existing objects.
*/

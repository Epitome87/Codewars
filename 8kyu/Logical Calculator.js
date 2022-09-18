/*
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
*/

// My first solution:
const logicalCalc = (array, op) => {
  switch (op) {
    case 'AND':
      return array.reduce((acc, curr) => acc && curr);
    case 'OR':
      return array.reduce((acc, curr) => acc || curr);
    case 'XOR':
      return !!array.reduce((acc, curr) => acc ^ curr);
  }
};

// My second solution:
const logicalCalc = (array, op) => {
  switch (op) {
    case 'AND':
      return array.some((bool) => !bool) ? false : true;
    case 'OR':
      return array.some((bool) => bool);
    case 'XOR':
      return !!array.reduce((acc, curr) => acc ^ curr);
  }
};

// Top user solution:
var ops = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
};

function logicalCalc(array, op) {
  return array.reduce(ops[op]);
}

/* Takeaways:
1) Remember, objects can store functions!
2) We convert values to Booleans using the '!!' or 'Boolean(val):
The first ! coerce the value to a boolean and inverse it. In this case, !value will return false. So to reverse it back to true, we put another ! on it. Hence the double use !!.
3) !== and ^ seem to both be 'XOR'?
*/

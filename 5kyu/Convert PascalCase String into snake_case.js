/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

// My solution:
const toUnderscore = (str) =>
  !str
    ? 'null'
    : typeof str === 'number'
    ? `${str}`
    : (str[0] + str.slice(1).replace(/[A-Z]/g, (c) => `_${c}`)).toLowerCase();

// Top user solution (although it wouldn't work for null inputs?):
toUnderscore = function (string) {
  return string
    .toString()
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
};

// Another clever user solution:
function toUnderscore(string) {
  return ('' + string).replace(/(.)([A-Z])/g, '$1_$2').toLowerCase();
}

// Another clever user solution:
const toUnderscore = (string) => `${string}`.replace(/.(?=[A-Z])/g, `$&_`).toLowerCase();

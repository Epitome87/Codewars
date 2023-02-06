/*
\Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

// My (heavily-researched) solution:
function getCallerName(args) {
  return args.length === 0 ? `${getCallerName.caller.name}.` : `${getCallerName.caller.name} ${args[0]}`;
}
const Adam = (...args) => getCallerName(args);
const has = (...args) => getCallerName(args);
const a = (...args) => getCallerName(args);
const dog = (...args) => getCallerName(args);
const The = (...args) => getCallerName(args);
const name = (...args) => getCallerName(args);
const of = (...args) => getCallerName(args);
const the = (...args) => getCallerName(args);
const is = (...args) => getCallerName(args);
const also = (...args) => getCallerName(args);

// Clever user solution:
['Adam', 'has', 'a', 'dog', 'The', 'name', 'of', 'the', 'is', 'also'].map(function (word) {
  this[word] = createWord(word);
}, this);

function createWord(word) {
  return function (next) {
    if (arguments.length) return word + ' ' + next;
    return word + '.';
  };
}

// Another good user solution:
function append(str, add) {
  return add + (str ? ' ' + str : '.');
}
function Adam(str) {
  return append(str, 'Adam');
}
function has(str) {
  return append(str, 'has');
}
function a(str) {
  return append(str, 'a');
}
function dog(str) {
  return append(str, 'dog');
}
function The(str) {
  return append(str, 'The');
}
function name(str) {
  return append(str, 'name');
}
function of(str) {
  return append(str, 'of');
}
function the(str) {
  return append(str, 'the');
}
function is(str) {
  return append(str, 'is');
}
function also(str) {
  return append(str, 'also');
}

// And another good user solution:
function Adam(name = '.') {
  return 'Adam' + name;
}
function has(name = '.') {
  return ' has ' + name;
}
function a(name = '.') {
  return 'a ' + name;
}
function dog(name = '.') {
  return 'dog' + name;
}
function The(name = '.') {
  return 'The ' + name;
}
function name(name = '.') {
  return 'name ' + name;
}
function of(name = '.') {
  return 'of ' + name;
}
function the(name = '.') {
  return 'the ' + name;
}
function is(name = '.') {
  return ' is ' + name;
}
function also(name = '.') {
  return 'also ' + name;
} // hi Arnold!

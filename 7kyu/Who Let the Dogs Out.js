/*
I wanted to write some classes for dogs. In my model dogs either bark or sleep. I know that it is popular practice to set default values like this

var value = value || DEFAULT_VALUE
And so i did. But something is wrong, and I don't know why. Can you help me out?

Original code:
let BARK  = 'woof woof';
let SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark){
  bark = bark || true;
  return bark ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark){
  bark = bark || false;
  return bark ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark){
  dont_bark = dont_bark || true;
  return !dont_bark ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark){
  dont_bark = dont_bark || false;
  return !dont_bark ? BARK : SLEEP;
}
*/

// My solution (using default params, rather than logical OR operator like Kata is probably wanting):
const BARK = 'woof woof';
const SLEEP = 'zzzzzzzzz....';

const dog_bark_by_default = (bark = true) => (bark ? BARK : SLEEP);
const dog_bark_only_if_told_so = (bark = false) => (bark ? BARK : SLEEP);
const dog_dont_bark_by_default = (dont_bark = true) => (!dont_bark ? BARK : SLEEP);
const dog_dont_bark_only_if_told_so = (dont_bark = false) => (!dont_bark ? BARK : SLEEP);

// My solution (using Nullish coalescing operator):
const dog_bark_by_default = (bark) => (bark ?? true ? BARK : SLEEP);
const dog_bark_only_if_told_so = (bark) => (bark ? BARK : SLEEP);
const dog_dont_bark_by_default = (dont_bark) => (!(dont_bark ?? true) ? BARK : SLEEP);
const dog_dont_bark_only_if_told_so = (dont_bark) => (!dont_bark ? BARK : SLEEP);

// Top user solution:
var BARK = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark) {
  return bark === undefined ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark) {
  return bark || false ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark) {
  return dont_bark !== undefined ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark) {
  return !(dont_bark || false) ? BARK : SLEEP;
}

/* Takeaways:
1) The dog_bark_by_default and dog_dont_bark_by_default functions needed a logical rewrite. Why is this?
Because the Logical OR operator was checking for ANY falsy value of the bark input. When the input was False, we wanted the boolean expression to evaluate to false, but with the || operator we were assigning it to true. To prevent this, we made us of the nullish coalescing operator, which only returns the right side of the ?? operand if the left is null or undefined (and a lack of function arguments is an undefined value).
2) The real takeaway is to use default parameters! This saves quite a bit of thinking, especially for the convoluted logic of these dog functions.
*/

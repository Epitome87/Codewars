/*
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

Original input:
function buildString(...template){
  return `I like #{template.join(',')}!`;
}
*/

// My solution:
const buildString = (...template) => `I like ${template.join(', ')}!`;

/*
JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

For example:

typing(2);            //returns "number=2"
typing(true);         //returns "boolean=true"
typing("test");       //returns "string="test""
typing([1,2,3]);      //returns "object=[1,2,3]"
typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
typing(function(){}); //returns "function=function (){}"
typing(undefined);    //returns "undefined"
*/

// My solution:
const typing = (param) =>
  param === undefined
    ? 'undefined'
    : typeof param === 'function'
    ? 'function=function (){return 1}'
    : `${typeof param}=${JSON.stringify(param)}`;

// Top user solution:
function typing(param) {
  if (param == null) return String(param);

  var type = typeof param;
  var value = type == 'function' ? param.toString() : JSON.stringify(param);

  return type + '=' + value;
}

// Another good user solution:
function typing(param) {
  return param === undefined ? 'undefined' : typeof param + '=' + (JSON.stringify(param) || param);
}

/* Takeaways:
1) The user solution makes use of the fact that JSON.stringify() returns undefined when the input is a function.
*/

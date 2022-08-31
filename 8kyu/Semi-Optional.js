/*
We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

So, for example, if we execute the following code:

wrapper_obj = wrap("my_wrapped_string"); 
 # wrapper_obj should be  {"value":"my_wrapped_string"}
We would then expect the following statement to be true:

wrapper_obj["value"] == "my_wrapped_string"
Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.
*/

// My solution:
const wrap = (value) => ({ value });

/* Takeaways:
1) The bracket of the return of an object must be on the same line as the return keyword!
2) Using short-hand syntax of an arrow function with an object, we have to use parenthesis.
*/

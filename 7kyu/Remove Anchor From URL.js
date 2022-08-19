/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// My solution:
const removeUrlAnchor = (url) => url.split('#')[0];

// Top user solution (using Regex):
function removeUrlAnchor(url) {
  return url.replace(/#.*/gi, '');
}

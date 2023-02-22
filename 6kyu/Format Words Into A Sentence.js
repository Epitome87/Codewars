/*
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/

// My one-liner:
const formatWords = (words, filtered = (words || []).filter((word) => word)) =>
  !filtered.length
    ? ''
    : filtered.length === 1
    ? filtered.join(' and ')
    : filtered.slice(0, -1).join(', ') + ' and ' + filtered.slice(-1).join('');

// My eh solution:
const formatWords = (words) => {
  const filtered = (words || []).filter((word) => word);
  if (!filtered.length) return '';
  if (filtered.length <= 2) return filtered.join(' and ');
  return filtered.slice(0, -1).join(', ') + ' and ' + filtered.slice(-1).join('');
};

// Top user solution:
function formatWords(words) {
  if (!words) return '';
  return words
    .filter(function (a) {
      return a !== '';
    })
    .join(', ')
    .replace(/(, )+(\S+)$/, ' and $2');
}

// Another good user solution:
function formatWords(a) {
  return (a || [])
    .filter((x) => x)
    .join(', ')
    .replace(/,(?= [^,]*$)/, ' and');
}

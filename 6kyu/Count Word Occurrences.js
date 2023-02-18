/*
You need to write a method that counts the number of occurences of a word in a given text.

The word counter is created as follows:

var sample  = "Lorem ipsum";
var counter = wordCounter(text);
Then one can get the count for a given word like this:

console.log(counter.count("Lorem")); // 1
console.log(counter.count("hey"));   // 0
The input texts are simple: they only contain ASCII characters, words are either separate by white spaces or punctuation (only , and .). If the input only contain punctuation or white spaces, it should return a count of 0 for all words.

For performance reasons, your implementations should count the words once and not parse the text each time the count method is called.
*/

// My other solution:
const wordCounter = (text) => {
  let words = {};
  text = text.split(/\s|\.|\,/g).filter((x) => x);
  for (let word of text) {
    words[word] = 1 + (words[word] || 0);
  }

  return {
    count: (word) => {
      if (!words[word] || typeof words[word] === 'function') return 0;
      if (typeof words[word] === 'string') return 1;
      return words[word];
    },
  };
};

// Top user solution:
var wordCounter = function (text) {
  var count = {};
  text.split(/[ ,.]+/).forEach((w) => (w ? (count['$' + w] = (count['$' + w] || 0) + 1) : null));
  return { count: (w) => count['$' + w] || 0 };
};

// Interesting user solution (I heavily refactored):
const wordCounter = function (text) {
  if (!(this instanceof wordCounter)) return new wordCounter(text);

  this.words = [];

  if (/[^\.\s\,]/.test(text)) {
    text = text.split(/\s|\.|\,/g);

    for (let word of text) {
      if ('string' !== typeof word) continue;
      else if (!this.words[word]) this.words[word] = 1;
      else this.words[word] += 1;
    }
  }

  this.count = function (word) {
    if (!this.words[word] || typeof this.words[word] === 'function') return 0;
    if (typeof this.words[word] === 'string') return 1;
    return this.words[word];
  };
};

const wordCounter = (sample) => {
  let words = {};
  let splitSample = sample.split(/[\s.,]/g).filter((n) => n !== '');
  for (let word of splitSample) {
    if (word === '') continue;
    words[word] = 1 + (words[word] || 0);
  }

  return {
    count: (text) => {
      return words[text] || 0;
    },
  };
};

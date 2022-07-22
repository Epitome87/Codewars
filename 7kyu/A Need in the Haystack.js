/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/

// My first solution -- not elegant!:
const findNeedle = (haystack) => {
  let needleIndex = -1;

  haystack.forEach((element, index) => {
    if (element && element.toString().includes('needle')) needleIndex = index;
  });

  return `found the needle at position ${needleIndex}`;
};

// Super clean user solution:
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

// Refactoring that user solution:
const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`;

// Another solution, not as elegant as the best but a better version of what I was trying to achieve:
function findNeedle(haystack) {
  let pos = haystack.findIndex((el) => el === 'needle');
  return 'found the needle at position ' + pos;
}

// TODO: Remember the indexOf and findIndex methods to avoid doing an overly-complicated solution like mine!!!

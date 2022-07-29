/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

// My very meh solution:
function countSmileys(arr) {
  if (arr.length === 0) return 0;
  return arr.filter((face) => checkIsSmiley(face)).length;
}

function checkIsSmiley(face) {
  if (face.length > 3) return false;

  // Check for valid eyes
  const eyes = face[0];
  const mouth = face[face.length - 1];

  if (eyes !== ':' && eyes !== ';') return false;
  if (mouth !== ')' && mouth !== 'D') return false;
  if (face.length === 3 && face[1] !== '-' && face[1] !== '~') return false;

  return true;
}

// VERY good user solution using regex:
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

// Good user solution:
function countSmileys(arr) {
  var smileys = [':)', ';)', ':-)', ';-)', ';~)', ':~)', ':D', ';D', ':-D', ':~D', ';-D', ';~D'];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}

// Good long-winded user solution:
const smileyIsValid = (smiley) => smiley.length === 3 || smiley.length === 2;

const smileyHasValidEye = (smiley) => {
  const maybeEye = smiley.charAt(0);
  return maybeEye === ':' || maybeEye === ';';
};

const smileyHasNose = (smiley) => smiley.length === 3;

const smileyHasValidNose = (smiley) => {
  const maybeNose = smiley.charAt(1);
  return smileyHasNose(smiley) ? maybeNose === '-' || maybeNose === '~' : true;
};

const smileyHasValidMouth = (smiley) => {
  const maybeMouth = smileyHasNose(smiley) ? smiley.charAt(2) : smiley.charAt(1);
  return maybeMouth === ')' || maybeMouth === 'D';
};

//return the total number of smiling faces in the array
const countSmileys = (smileys) =>
  smileys.filter(
    (smiley) =>
      smileyIsValid(smiley) && smileyHasValidEye(smiley) && smileyHasValidNose(smiley) && smileyHasValidMouth(smiley)
  ).length;

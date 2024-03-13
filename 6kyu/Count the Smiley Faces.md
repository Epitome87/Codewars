# [Count the Smiley Faces!]()

Given an array (arr) as an argument complete the function `countSmileys` that should return the total number of smiling faces.

Rules for a smiling face:

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
- A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
- Every smiling face must have a smiling mouth that should be marked with either `)` or `D`

No additional characters are allowed except for those mentioned.

Valid smiley face examples: `:) :D ;-D :~)`
Invalid smiley faces: `;( :> :} :]`

**Example**

```js
countSmileys([':)', ';(', ';}', ':-D']); // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']); // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```

**Note**

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

## My Solution

**JavaScript**

```js
const countSmileys = (arr) => arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
```

```js
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
```

**Python**

```py
import re

def count_smileys(arr):
    return len([True for x in arr if re.match("[:;][-~]?[)D]", x)])
```

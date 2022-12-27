/*
In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!
*/

// My solution:
const nameThatNumber = (num) => {
  let numStr = num.toString();
  const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  const tens = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  if (numStr.length === 1) return ones[num];
  if (num === 11) return 'eleven';
  if (num === 12) return 'twelve';
  if (num === 13) return 'thirteen';
  if (num === 14) return 'fourteen';
  if (num === 15) return 'fifteen';
  if (num === 16) return 'sixteen';
  if (num === 17) return 'seventeen';
  if (num === 18) return 'eighteen';
  if (num === 19) return 'nineteen';
  if (numStr[1] === '0') return tens[numStr[0]];
  return `${tens[numStr[0]]} ${ones[numStr[1]]}`;
};

// Clever user solution:
function nameThatNumber(num) {
  var start = 'zero one two three four five six seven eight nine'.split(' '),
    teens =
      'ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(
        ' '
      ),
    tens = 'ten twenty thirty forty fifty sixty seventy eighty ninety'.split(
      ' '
    ),
    arrnum = num + ''.split(''),
    l = arrnum.length;
  return l == 1
    ? start[num]
    : arrnum[0] == 1
    ? teens[arrnum[1]]
    : arrnum[1] != 0
    ? tens[arrnum[0] - 1] + ' ' + start[arrnum[1]]
    : tens[arrnum[0] - 1];
}

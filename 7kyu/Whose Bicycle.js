/*
I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:

const ageTable = {
                  'firstSonAge': 14,
                  'secondSonAge': 9,
                  'thirdSonAge': 8
                }
*/

// My refactored solution:
const whoseBicycle = (...diaries) => {
  const marks = diaries.map((diary) =>
    Object.values(diary).reduce((acc, curr) => acc + curr, 0)
  );
  const winner = marks.reduce(
    (acc, curr, idx) => (curr >= acc[0] ? [curr, idx] : acc),
    [0, 0]
  );
  return `I need to buy a bicycle for my ${
    ['first', 'second', 'third'][winner[1]]
  } son.`;
};

// My solution:
const whoseBicycle = (diary1, diary2, diary3) => {
  const sum = (obj) => Object.values(obj).reduce((acc, curr) => acc + curr, 0);

  const sonOneGrade = sum(diary1);
  const sonTwoGrade = sum(diary2);
  const sonThreeGrade = sum(diary3);

  let winningSon = '';

  if (sonThreeGrade >= sonTwoGrade && sonThreeGrade >= sonOneGrade)
    winningSon = 'third';
  else if (sonTwoGrade >= sonThreeGrade && sonTwoGrade >= sonOneGrade)
    winningSon = 'second';
  else winningSon = 'first';

  return `I need to buy a bicycle for my ${winningSon} son.`;
};

// Top user solution:
function whoseBicycle(dairy1, dairy2, dairy3) {
  const diaries = [dairy1, dairy2, dairy3];
  const son = {
    0: 'first',
    1: 'second',
    2: 'third',
  };
  const scores = diaries.map((diary, index) => {
    const keys = Object.keys(diary);

    return keys.reduce((acc, cur) => acc + diary[cur], 0);
  });

  const maxValue = Math.max(...scores);

  const maxDiary = scores.lastIndexOf(maxValue);

  return `I need to buy a bicycle for my ${son[maxDiary]} son.`;
}

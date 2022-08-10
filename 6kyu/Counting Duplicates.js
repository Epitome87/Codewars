// My eh solution:
const duplicateCount = (text) => {
  let textLowered = text.toLowerCase();
  let dupeCount = 0;

  while (textLowered.length > 0) {
    const splitText = textLowered.split(textLowered[0]);
    if (splitText.length > 2) dupeCount++;
    textLowered = splitText.join('');
  }

  return dupeCount;
};

// Top user solution:
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}

// Top non-Regex user solution:
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

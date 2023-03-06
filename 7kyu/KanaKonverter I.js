/*
Write a simple converter for vowels.

      Romaji:    a/A e/E i/I u/U o/O
      Hiragana:  あ  え   い  う   お 
      Katakana:  ア  エ   イ  ウ   オ
Expect the above characters as input. There won't be invalid input.

Rules:

If there is no input return an empty string. 
Do not change romaji. (a->a, A->A ... NOT A->a )
Change Kana to lower case romaji. (あ->a ... NOT あ->A)
Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")
Example 1:

Input: "aeiou" 
Output:"hiragana"

Expected output: "あえいおう"
Example 2:

Input: "AえイOう"
Output:"romaji"

Expected output: "AeiOu"
*/

// My further-refactored solution:
function vowels(input, output) {
  const outputDict = output === 'romaji' ? romajiDictLow : output === 'hiragana' ? hiraDict : kataDict;
  return [...input].reduce((acc, curr) => {
    if (output === 'romaji' && /[aeiou]/i.test(curr)) return acc + curr;
    if (/[aeiou]/i.test(curr))
      return acc + outputDict[(curr === curr.toUpperCase() ? romajiDictUp : romajiDictLow).indexOf(curr)];
    if (hiraDict.includes(curr)) return acc + outputDict[hiraDict.indexOf(curr)];
    if (kataDict.includes(curr)) return acc + outputDict[kataDict.indexOf(curr)];
  }, '');
}

// My other solution (can grow easier as the list of possible output dictionaries increase):
function vowels(input, output) {
  let res = '';
  const outputDict = output === 'romaji' ? romajiDictLow : output === 'hiragana' ? hiraDict : kataDict;
  const dicts = [romajiDictLow, romajiDictUp, hiraDict, kataDict];

  for (let char of input) {
    for (let dict of dicts) {
      if (dict.includes(char)) {
        if (dict === romajiDictLow && output === 'romaji') res += romajiDictLow[dict.indexOf(char)];
        else if (dict === romajiDictUp && output === 'romaji') res += romajiDictUp[dict.indexOf(char)];
        else res += outputDict[dict.indexOf(char)];
      }
    }
  }

  return res;
}

// Top user solution:
const dicts = {
  romaji: 'aeiou',
  romajiDictUp: 'AEIOU',
  hiragana: 'あえいおう',
  katakana: 'アエイオウ',
};

function vowels(input, output) {
  const d = dicts[output];
  const index = (x) =>
    Object.values(dicts)
      .find((d) => d.includes(x))
      .indexOf(x);
  return input.replace(/./g, (x) => (d.includes(x.toLowerCase()) ? x : d[index(x)]));
}

/*
 */

// My solution:
decodeMorse = function (morseCode) {
  // Trim leading/trailing whitespace, form array of each morse word
  const wordsInMorse = morseCode.trim().split('  ');
  const words = wordsInMorse.map((w) =>
    w
      .split(' ')
      .map((l) => MORSE_CODE[l])
      .join('')
  );

  return words.join(' ');
};

// My refactored version:
const decodeMorse = (morseCode) =>
  morseCode
    .trim()
    .split('  ')
    .map((w) =>
      w
        .split(' ')
        .map((l) => MORSE_CODE[l])
        .join('')
    )
    .join(' ');

// Top user solution:
decodeMorse = function (morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
};

// Most clever user solution:
decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || ' ')
    .join('');
};

/* Takeways:
1) This one was rather challenging for me!
*/

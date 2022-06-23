decodeMorse = function (morseCode) {
  // MORSE_CODE format: an array of key:value pairs, both strings
  // Plan:
  // trip empty spaces before and after the morseCode string
  // get letters from combination of symbols ... and ---
  // get words using ^^^ letters from above
  // join words in a string with spaces

  //   console.log(MORSE_CODE["-.-"]) // will log K

  // solution 1

  function decodeLetter(letter) {
    return MORSE_CODE[letter];
  }

  function decodeWord(word) {
    return word.split(' ').map(decodeLetter).join('');
  }

  return morseCode.trim().split('  ').map(decodeWord).join(' ');

  // solution 2
  //   return morseCode
  //     .trim()
  //     .split(/  | /) // this allows splitting with one or two spaces between
  //     .map((code) => MORSE_CODE[code] || " ") // code is a placeholder for input or
  //     .join("");

  // solution 3

  //   morseCode = morseCode.trim();

  //   let words = morseCode.split('   ')
  //   for (let i = 0; i < words.length; i++) {
  //    words[i] = words[i].split(' ');
  //  }

  //   let sentence = '';

  //   for (let i = 0; i < words.length; i++) {
  //     let currentWord = '';
  //     for(let j = 0; j < words[i].length; j++) {
  //       currentWord = currentWord + MORSE_CODE[words[i][j]];
  //     }
  //     sentence = sentence + currentWord + ' '
  //   }

  //   return sentence.slice(0,-1);
};

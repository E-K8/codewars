function high(x) {
  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const charArray = [
    '-',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const wordArray = x.split(' ');

  const wordValue = wordArray.map((item) => {
    return item.split('').reduce((a, b) => {
      return a + charArray.indexOf(b);
    }, 0);
  });
  const highestValueIndex = wordValue.indexOf(Math.max(...wordValue));
  const highestValueWord = wordArray[highestValueIndex];

  return highestValueWord;
}

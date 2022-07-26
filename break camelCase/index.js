function solution(string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newString += ' ';
      newString += string[i];
    } else {
      newString += string[i];
    }
  }
  return newString;

  // solution with regex ↓

  //   string = string.replace(/([A-Z])/g, ' $1').trim();
  //   return string;

  // another solution ↓
  // const findUpperCase = (letter) =>
  //   letter === letter.toUpperCase() ? ` ${letter}` : letter;
  // return [...string].map(findUpperCase).join('');
}

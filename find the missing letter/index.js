function findMissingLetter(array) {
  // use charCodeAt() and String.fromCharCode() to get/translate from Unicode values of the array items

  // turn array of letters into a list of Unicode values (numbers)
  // find the missing number by checking if difference between numbers !==1
  // "translate" the missing number into missing letter and return

  let codeArr = [];
  let resultCode;

  for (let i = 0; i < array.length; i++) {
    codeArr.push(array[i].charCodeAt());
  }

  for (let j = 0; j < codeArr.length - 1; j++) {
    if (codeArr[j + 1] - codeArr[j] !== 1) {
      resultCode = codeArr[j] + 1;
    }
  }

  return String.fromCharCode(resultCode);
}

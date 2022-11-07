function wave(str) {
  // consider three potential parts: before the top of wave, the top itself and after the top
  let resultArr = [],
    top = '',
    before = '',
    after = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      top = str[i].toUpperCase();
      before = str.slice(0, i);
      after = str.slice(i + 1, str.length);
      resultArr.push(before + top + after);
    }
  }
  return resultArr;
}

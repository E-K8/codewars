function deleteNth(arr, n) {
  let obj = {};
  let resultArr = [];

  for (const el of arr) {
    if (obj[el]) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
    if (obj[el] <= n) {
      resultArr.push(el);
    }
  }
  return resultArr;
}

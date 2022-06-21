function comp(array1, array2) {
  // sort both arrays
  // map through array2 with Math.sqrt
  // compare new array with array1 through reducing to string
  // account for edge cases

  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }

  let arr1Sorted = array1.sort((a, b) => a - b);
  let arr2Sorted = array2.sort((a, b) => a - b);
  let arr2Mapped = arr2Sorted.map(Math.sqrt);

  return arr1Sorted.toString() === arr2Mapped.toString() ? true : false;
}

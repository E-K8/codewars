function findUniq(arr) {
  // sort the array in ascending order
  // if unique number is in the beginning, the first two items aren't equal
  // if unique number is at the end, the first arr items are equal

  arr = arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}

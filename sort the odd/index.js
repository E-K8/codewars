function sortArray(array) {
  // make a new array of only odd numbers from the initial array
  // sort the new array
  // push new array list into positions of odd numbers by checking if every list item is odd or not
  // note: shift() returns deleted value, that's why it's a "replacer" here

  const oddArrSorted = array
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => a - b);
  return array.map((num) => (num % 2 !== 0 ? oddArrSorted.shift() : num));
}

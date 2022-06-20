function findEvenIndex(arr) {
  // index is where the array is split
  // we return either -1 or index (number) of array item where sum of left items equals sum of right items
  // set index to -1
  // iterate through the array counting leftSum and rightSum, changing the point of splitting (i in the loop)
  // if leftSum === rightSum, set index at i
  // return index

  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    let sumLeft = arr.slice(0, i + 1).reduce((a, b) => a + b, 0);
    let sumRight = arr.slice(i).reduce((a, b) => a + b, 0);
    if (sumLeft === sumRight) {
      index = i;
    }
  }
  return index;

  // alternative solution:
  // set two variables (to 0): total sum and left sum
  // calculate total sum in a loop
  // in a separate loop, detract from the sum
  // if leftSum === sum, return index
  // else increase leftSum with the value of the i
  // if nothing matches, return -1

  //    let sum = 0,
  //     leftSum = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }

  //   for (let i = 0; i < arr.length; i++) {
  //     sum -= arr[i];

  //     if (leftSum === sum) {
  //       return i;
  //     } else {
  //       leftSum += arr[i];
  //     }
  //   }
  //   return -1;
}

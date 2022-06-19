function digPow(n, p) {
  // initialise sum
  // make n a string
  // iterate through n's digits
  // add n^p to a counter
  // check if the sum is divisible with n and return accordingly

  let sum = 0;
  let nStr = n.toString();

  for (let i = 0; i < nStr.length; i++) {
    sum += Math.pow(nStr[i], p);
    p++;
  }
  return sum % n === 0 ? sum / n : -1;
}

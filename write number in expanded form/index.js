// solution 1
function expandedForm(num) {
  let numAsString = num.toString();
  let result = [];
  let multiplier = 1;

  for (let i = 1; i <= numAsString.length; i++) {
    const digit = numAsString[numAsString.length - i];

    if (digit > 0) {
      result.unshift(digit * multiplier);
    }
    multiplier *= 10;
  }
  return result.join(' + ');
}

// solution 2
const expandedForm = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ');

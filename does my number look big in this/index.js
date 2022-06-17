function narcissistic(value) {
  // value is a number
  // the number of digits is the power to which every digit has to be taken
  // determine the number of digits as n
  // split the number into digits
  // take each digit to the power of n
  // get the sum of all digit^n
  // the result ^^^ === value? true : false

  let digitArr = [...(value + '')].map((n) => +n); // split into digits as strings, turn into numbers
  let n = digitArr.length;

  let mathPowArrSum = [];

  for (let i = 0; i < digitArr.length; i++) {
    mathPowArrSum.push(Math.pow(digitArr[i], n));
  }

  mathPowArrSum = mathPowArrSum.reduce((prev, curr) => prev + curr, 0);

  return value === mathPowArrSum ? true : false;
}

________________________________________________________________________;
// other solution 1

// function narcissistic(value) {
//     var arr = Array.from(value.toString()).map(Number)
//     var length = arr.length
//     var result = 0
//     for (i=0; i< length; i++) {
//     result += ((arr[i])**length)}
//     return result === value
//   }

// other solution 2

// function narcissistic(value) {
//   let num = `${value}`;

//   const reducer = (accumulator, currentValue) =>
//     accumulator + currentValue ** num.length;

//   num = num.split('');

//   num = num.map((x) => parseInt(x));

//   num = num.reduce(reducer, 0);

//   return num === value;
// }

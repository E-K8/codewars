function solution(number){
  const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  }
  let result = "";
  let decimalKeys = Object.keys(numerals).reverse();
//   console.log(decimalKeys)
//   reversing because we'll be checking the largest possible number that's included beginning from a thousand
    decimalKeys.forEach(key=> {
      while(key<=number) {
        result += numerals[key];
// at each iteration we check if it's less or equal to num and add corresponding value while simultaneously deducting that amount
        number -= key;    
      }
  })
  return result;  
}
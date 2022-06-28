
function isPrime(num) {
  // detailed and understandable solution, not optimised, so it times out:
//   if (num===2) {
//     return true;
//   }  
//   if (num <2 || !(num%2)) {
//     return false;
//   }  
//   for (let i = 3; i <= num-1; i++) {
//     if (num%i === 0) {
//       return false;
//     }
//   }
//   return true;  
  
  
// refactored solution based on ↑↑↑  logic
  for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
  return num > 1;
  
  
//   + ineffient solution ↓↓↓, times out, I don't know if it's working beyond "test"
  
//   if (num <=1) {
//     return false;    
//   }

//   for (let i=num-1; i > 1; i--) {
//     if (num % i === 0 ) {
//       return false;
//     }    
//   }
//   return true;  
}


// useful step-by-step video: https://www.youtube.com/watch?v=efS_i8hvTRo
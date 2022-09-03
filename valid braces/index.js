function validBraces(braces) {
  let matchingBraces = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let arr = [];

  for (let brace of braces) {
    if (matchingBraces[brace]) {
      //opening braces
      arr.push(brace);
    } else {
      // closing braces
      if (brace !== matchingBraces[arr.pop()]) {
        return false;
      }
    }
  }
  return arr.length === 0; // checks if any unclosed braces left
}

// another solution

// function validBraces(braces){
//   for (let i = 0, arr = []; i < braces.length; i++) {
//     switch (braces[i]) {
//       case '(': case '[': case '{': arr.push(braces[i]); break;
//       case ')': if (arr.pop() != '(') return false; break;
//       case ']': if (arr.pop() != '[') return false; break;
//       case '}': if (arr.pop() != '{') return false; break;
//     }
//   }
//   return arr.length == 0;
// }

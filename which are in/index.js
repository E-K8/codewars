function inArray(array1,array2){
  let result = [];
  array1 = array1.sort();
  
  for (let i=0; i<array1.length; i++) {
    for (let j=0; j<array2.length; j++) {
      if (array2[j].indexOf(array1[i]) !== -1) {
        result.push(array1[i]);
        break;
      }        
    }    
  }  
  return result;
}

// similar problem on fCC: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
// solution to problem on fCC: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-mutations/16025
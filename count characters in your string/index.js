function count (string) {  
  // output: an object
  // loop over all characters in the string
    // check if a character is inside the object as a property
      // if it is more than one, increase counter
      // if not, assign a value of 1 to it
  
  const result = {};
  
  string.split("").forEach(char=> {
    result[char] = result[char] ? (result[char] + 1) : 1;
  })  
  return result;
}
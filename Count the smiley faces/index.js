function countSmileys(arr) {
  let count = 0;
  
  for (let i=0; i<arr.length; i++) {
    const smiley = arr[i];
    
    if (smiley.length===2 || smiley.length===3) {
      if (smiley[0]===":" || smiley[0]===";") {
        if (smiley[1]==="-" || smiley[1]==="~") {
          if (smiley[2]===")" || smiley[2]==="D") {
            count++;
          }
        } else if ((smiley[1]===")" || smiley[1]==="D") && smiley.length===2) {
          count++;
        }
      }
    }
  }
  return count;
}
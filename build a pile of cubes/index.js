function findNb(m) {
  // m is total volume. We are building the pile towards filling the volume, so we count towards m
  // n is a number of layers. Go up one layer of n incrementally, keep track of n
  // repeat till exact match with m is reached
  // if such match doesn't exist, return -1
  
  let sum = 0;
  let n = 0;
  
  while(sum < m) {
    n+=1;
    sum+=n**3;
    // ^^^ terminate case
  }  
  return sum === m ? n : -1;
}

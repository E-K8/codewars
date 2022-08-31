function longestConsec(strarr, k) {
  let maxLength = 0;
  let currConcat = "";
  let maxStr;
  
  if (strarr.length === 0 || k<=0 || k>strarr.length) {
    return "";
  }
  
  for (let i=0; i<strarr.length; i++) {
    currConcat = strarr.slice(i, i+k).join("");
    if (currConcat.length>maxLength) {
      maxLength=currConcat.length;
      maxStr = currConcat;
    }
  }
  return maxStr;      
}
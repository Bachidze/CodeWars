function duplicateCounter(str) {
    const charCount = {};
    let duplicatesCount = 0;
  
    for (let char of str.toLowerCase()) {
      if (charCount[char]) {
        charCount[char]++;
        if (charCount[char] === 2) {
          duplicatesCount++;
        }
      } else {
        charCount[char] = 1;
      }
    }
  
    return duplicatesCount;
  }
  
  console.log(duplicateCounter("bcd")); 
  console.log(duplicateCounter("bbbaaaaaabbcde")); 
  
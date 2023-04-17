const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a1,a2;
  let count=0;  
  
  if (s1.length < s2.length) {
    a1=s1.split('').sort(); 
    a2=s2.split('').sort();
  } else {
    a1=s2.split('').sort();
    a2=s1.split('').sort();
  }
  
  console.log(a1);
  console.log(a2);
  
  let pos=0;
  for(let i=0; i<a1.length; i++) {
    
    if (a2.indexOf(a1[i],pos) !==-1) {
      console.log(a2.indexOf(a1[i],pos));
      count++;
      pos = a2.indexOf(a1[i],pos)+1;
      
    }
    
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

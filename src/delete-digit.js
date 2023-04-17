const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let m = n.toString().split('');
  let arr = [];
  
  for (let i=0; i<m.length; i++) {
    let s = '';
    
    for (let j=0; j<m.length; j++){
      if (i == j) continue;
      s+=m[j];
    }
    
    arr.push(+s);
  }
  
  
  return arr.sort((a,b)=>b-a)[0];
}

module.exports = {
  deleteDigit
};

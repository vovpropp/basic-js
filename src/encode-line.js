const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str=='') return ''; 

  let encode ='';
  let n=1;
  
  for (let i=1; i<str.length; i++){
    if (str[i] == str[i-1]) {
      n++;
    } else {
      if (n>1) encode+=n;
      encode+=str[i-1];
      n=1;
    }
  }
  
  if (n>1) encode+=n;
  
  encode+=str[str.length-1];
  
  return encode;
}

module.exports = {
  encodeLine
};

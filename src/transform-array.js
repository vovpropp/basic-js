const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

  let m=Array.from(arr);

  for (let i=0; i<m.length; i++) {
    
    switch (m[i]) {
      case '--discard-next' :
        m[i] = undefined;
        m[i+1] = undefined;
        break;
      case '--discard-prev':
        m[i] = undefined;
        m[i-1] = undefined;
        break
      case '--double-next':
        m[i] = m[i+1];
        break;
      case '--double-prev':
        m[i] = m[i-1];
        break;
      default: break;
    }
  }
  
  return m.filter(e=>e!=undefined);
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, o) {
  let addition = '';
  if (o.addition !== undefined) addition = String(o.addition); 
  let s = String(str) + Array(o.additionRepeatTimes).fill(addition).join(o.additionSeparator || '|');
  
  let m= Array(o.repeatTimes).fill(s).join(o.separator || '+');
  
  return m;
}

module.exports = {
  repeater
};

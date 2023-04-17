const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let m = names;
  
  for (let i=1; i<m.length; i++) {
    let n =1;
    let name = m[i];
    while (m.lastIndexOf(m[i], i-1) !== -1) {
      m[i] = name +`(${n})`;
      n++;
    }
  }
  return m;
}

module.exports = {
  renameFiles
};

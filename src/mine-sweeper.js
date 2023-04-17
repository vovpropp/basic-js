const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let m = Array.from(matrix, (e) => Array.from(e).fill(0));
      
  for (let i=0; i<matrix.length; i++) {
    for (let k=0; k<matrix[0].length; k++) {
      
      if (matrix[i][k]) {
       
         if ((i-1>=0) && (k-1>=0)) m[i-1][k-1]++;
       
         if (i-1>=0) m[i-1][k]++;
       
         if ((i-1>=0) && (k+1 < m.length)) m[i-1][k+1]++;
        
         if (k-1>=0) m[i][k-1]++;
        
         if (k+1<m.length) m[i][k+1]++;
        
         if ((i+1<m.length) && (k-1>=0)) m[i+1][k-1]++;
          
         if (i+1<m.length) m[i+1][k]++;
        
         if ((i+1<m.length) && (k+1<m.length)) m[i+1][k+1]++;
      }  
    }
  }
  
  
  return m;
}

module.exports = {
  minesweeper
};

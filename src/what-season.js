const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments.length === 0) return "Unable to determine the time of year!";
  
  if ( date instanceof Date === false ||
    Object.getOwnPropertyNames(date).length !== 0) throw new Error("Invalid date!");
  
  let seasons = ['winter','winter','spring','spring','spring',
    'summer','summer','summer', 'autumn','autumn','autumn', 'winter'];
  let month = date.getMonth();

  return seasons[month];

}

module.exports = {
  getSeason
};

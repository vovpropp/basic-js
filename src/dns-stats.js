const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let o = {};
  
  domains.forEach(e => {
    let m = e.split('.').reverse();
    
    let dns = '';
    
    m.forEach(e => {
      dns+= '.' + e;
      
      if (dns in o) {
        o[dns]++;
      } else {
        o[dns]=1;
      }
    });
    
  });
  
  return o;
}

module.exports = {
  getDNSStats
};

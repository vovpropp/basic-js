const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let s = '';
    if (value !== undefined ) s = `( ${value} )`;
    this.chain.push(s);
    return this;
  },
  removeLink(position) {

    if (!Number.isInteger(position) || (position < 1) || (position > this.chain.length)) {
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');  
    } 

    this.chain = this.chain.filter((e,i) => i!== position-1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let r = this.chain.join('~~');
    this.chain.length = 0;
    return r;
  }
};

module.exports = {
  chainMaker
};

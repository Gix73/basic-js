const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  strChain : '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('( '+ value + ' )' + '~~');
    return this;
  },
  removeLink(position) {
    if(typeof(position)=="number" && (position <= this.chain.length) && (position != 0)){
      this.chain.splice(position-1, 1);
      return this;
    }else{
      this.chain =[];
      throw new Error("error");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.strChain = "";
    for(let i = 0; i< this.chain.length; i++){
      this.strChain+=this.chain[i];
    }
    this.strChain = this.strChain.substr(0, this.strChain.length-2);
    this.chain = [];
    return this.strChain;
  }
};

module.exports = chainMaker;

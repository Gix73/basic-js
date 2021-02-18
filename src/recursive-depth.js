const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, sum = 0, retSum = 0) {
    if(Array.isArray(arr)){
      for (let i = 0; i< arr.length; i++){
        retSum = this.calculateDepth(arr[i]);
        if (retSum > sum){
          sum = retSum
        };
      }
      return  sum + 1;
    }else{
      return 0;
    }
  } 
};
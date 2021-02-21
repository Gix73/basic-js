const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
//str add addRep addSep
let str1=str;
str = "";
let repeatTimes = options.repeatTimes;
let separator = options.separator;
let addition = options.addition;
let additionRepeatTimes = options.additionRepeatTimes;
let additionSeparator = options.additionSeparator;
if (repeatTimes === undefined){
  repeatTimes = 1;
}

if (separator === undefined){
  separator = "+";
}

if (addition === undefined){
  addition = "";
}

if (additionRepeatTimes === undefined){
  additionRepeatTimes = 1;
}

if (additionSeparator === undefined){
  additionSeparator = "|";
}
for (let i = 0; i < additionRepeatTimes; i++){
  if (i == additionRepeatTimes-1){
    str1 += addition + separator;
  }else{
    str1 += addition + additionSeparator;
  }
}
for (let i = 0; i < repeatTimes; i++){
  if(i == repeatTimes - 1){
    str += str1.substr(0, str1.length-separator.length);
  }else{
    str += str1;
  }

}
return str;
};
  
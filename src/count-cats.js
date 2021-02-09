const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
let arr = [];
let counter = 0;
for (let i = 0; i < matrix.length; i++){
  for (let key in matrix[i]){
    arr.push(matrix[i][key])
  }
}
for(let i = 0; i < arr.length; i++){
  if (arr[i] == "^^"){
    counter++;
  }
}
if(counter == 0){
  return 0;
}
return counter;
};

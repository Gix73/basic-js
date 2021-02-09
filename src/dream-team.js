const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = "";
  if (members == null){
    return false;
  }
for (let i = 0; i < members.length; i++){
  if (typeof(members[i]) == "string"){
    for (let j = 0; j < members[i].length; j++){
      if(members[i][j] != " "){
        str += members[i][j];
        break;
      }
    }
  }
}
  str = str.toUpperCase().split("").sort().join("");
  if (str != ""){
    return str;
  }
  return false;
};

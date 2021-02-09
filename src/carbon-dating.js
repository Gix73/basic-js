const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const ln2 = 0.693;

module.exports = function dateSample(sampleActivity) {
let res = sampleActivity/1;
if ((typeof(sampleActivity) == "string") && (typeof(res)== "number") && (isNaN(res) != true)){
    if((res < 0) || (res >= MODERN_ACTIVITY)){
        return false;
    }
    return sampleActivity/1/ln2;
}
return false;
};
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const control_seq = [`--discard-next`, `--double-prev`, `--double-next`, `--discard-prev`];
  if(Array.isArray(arr) == false){
    throw new Error;
  };

  return arr.reduce((previousValue, currentItem, index) => {
    if (control_seq.includes(currentItem)) {
      return previousValue;
    }

    if (arr[index - 1] == `--discard-next`) {
      return previousValue;
    }

    if (arr[index - 1] == `--double-next`) {
      previousValue.push(currentItem, currentItem);
    } else {
      previousValue.push(currentItem);
    }

    if (arr[index + 1] == `--discard-prev`) {
      previousValue.splice(previousValue.length - 1, 1)
    }

    if (arr[index + 1] == `--double-prev`) {
      previousValue.push(currentItem)
    }
    return previousValue;
  }, []);
};
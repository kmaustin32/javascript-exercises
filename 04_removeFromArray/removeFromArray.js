const removeFromArray = function(array, ...args) {
  let result = [...array];
  for (let arg in args) {
    let index = array.indexOf(args[arg]);
    delete result[index];
  }
  result = result.filter(item => item != ' ');
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;

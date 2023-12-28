const reverseString = function(string) {
  let strarry = string.split('');
  let result = [];

  for (let i = strarry.length; i >= 0; i--) {
    result.push(strarry[i]);
  }
  return result.join('');
};

// Do not edit below this line
module.exports = reverseString;

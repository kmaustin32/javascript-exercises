const sumAll = function(num1, num2) {
  if (typeof num1 && typeof num2 != 'number') return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
  
  let greater = Math.max(num1, num2);
  let lesser = Math.min(num1, num2);

  let sum = null;
  for ( let i = lesser; i <= greater; i++) {
    sum += i
  };
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

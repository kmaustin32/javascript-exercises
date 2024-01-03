const fibonacci = function(num) {
  let numInt = parseInt(num);

  if (numInt == 0) return 0;
  if (numInt == 1 || numInt == 2) return 1;
  if (numInt < 0) return "OOPS";

  let prevNum = 1;
  let prevNum2 = 1
  let fibNum = null;
  for ( let i = 2; i < num; i++) {
    fibNum = prevNum + prevNum2;
    prevNum = prevNum2;
    prevNum2 = fibNum;
  }
  return fibNum;
};

console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;

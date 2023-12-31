const convertToCelsius = function(fah) {
  let celsius = (5/9) * (fah -32);
  return Math.round(celsius * 10) / 10; 
};

const convertToFahrenheit = function(cel) {
  let fahrenheit = ((9/5) * cel) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// ? Convert Fahrenheit p/ celsius :

const tempFahrenheit = [32, 68, 86, 104];
const subtTemp = temp => temp - 32
const divisorTemp = 5 / 9;
const mult = temp => temp * divisorTemp;

const convertCelsius = tempFahrenheit.map(subtTemp).map(mult)

console.log(convertCelsius);


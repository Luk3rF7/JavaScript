const { data } = require('./data');
// programação normal

var coords = [],
  totalTemperature = 0,
  averageTemperature = 0;

for (var i = 0; i < data.length; i++) {
  totalTemperature = 0;

  for (var j = 0; j < data[i].temperatures.length; j++) {
    totalTemperature += data[i].temperatures[j];
  }

  averageTemperature = totalTemperature / data[i].temperatures.length;

  coords.push([averageTemperature, data[i].population]);
}

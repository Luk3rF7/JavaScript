var students = [
  { name: 'Anna', grade: 6 },
  { name: 'John', grade: 4 },
  { name: 'Maria', grade: 9 }
];

var teachers = [
  { name: 'Mark', salary: 2500 },
  { name: 'Todd', salary: 3700 },
  { name: 'Angela', salary: 1900 }
];
/* normal */
var byName = function (object) {
  return object.name;
};
/* utilizando map */
var byNames = function (list) {
  return list.map(byName);
};

byNames(students); // ["Anna", "John", "Maria"]
byNames(teachers); // ["Mark", "Todd", "Angela"]
const students = [
  { name: 'Anna', grade: 6 },
  { name: 'John', grade: 4 },
  { name: 'Maria', grade: 9 }
];
/* ES6 */
const teachers = [
  { name: 'Mark', salary: 2500 },
  { name: 'Todd', salary: 3700 },
  { name: 'Angela', salary: 1900 }
];

const byName = object => object.name;
const byNames = list => list.map(byName);

byNames(students); // ["Anna", "John", "Maria"]
byNames(teachers); // ["Mark", "Todd", "Angela"]
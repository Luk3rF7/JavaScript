// Here's an example of each
const array = [1, 2, 3];

const mappedArray = array.map(function (element) {
  return element + 1;
});
// mappedArray is [2, 3, 4]

const reduced = array.reduce(function (firstElement, secondElement) {
  return firstElement + secondElement;
});
// reduced is 6

const filteredArray = array.filter(function (element) {
  return element !== 1;
});
// filteredArray is [2, 3]

const ages = [12, 32, 32, 53]
const newAges = ages.map(function (age) {
  if (age == 12) { return 20; }
  else { return age; }
})
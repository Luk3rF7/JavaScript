// Here's a non-functional example
const ages = [12, 32, 32, 53]
for (var i = 0; i < ages.length; i++) {
  finalAge += ages[i];
}

// Here's a functional example
const ages = [12, 32, 32, 53]
const totalAge = ages.reduce(function (firstAge, secondAge) {
  return firstAge + secondAge;
})

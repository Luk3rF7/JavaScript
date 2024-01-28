const { data } = require("./data");

// Notice we're accepting two values, the list and the current total
function totalForArray(currentTotal, arr) {

  currentTotal += arr[0];

  // Note to experienced JavaScript programmers, I'm not using Array.shift on 
  // purpose because we're treating arrays as if they are immutable.
  var remainingList = arr.slice(1);

  // This function calls itself with the remainder of the list, and the 
  // current value of the currentTotal variable
  if (remainingList.length > 0) {
    return totalForArray(currentTotal, remainingList);
  }

  // Unless of course the list is empty, in which case we can just return
  // the currentTotal value.
  else {
    return currentTotal;
  }
}

var totalTemp = totalForArray(0, temperatures);
function addNumbers(a, b) {
  return a + b;
}
function totalForArray(currentTotal, arr) {
  currentTotal = addNumbers(currentTotal, arr[0]);

  var remainingArr = arr.slice(1);

  if (remainingArr.length > 0) {
    return totalForArray(currentTotal, remainingArr);
  }
  else {
    return currentTotal;
  }
}

// The reduce method takes a function as its first argument, and that function 
// accepts both the current item in the list and the current total result from 
// whatever calculation you're performing.
var totalTemp = temperatures.reduce(function (previousValue, currentValue) {
  // After this calculation is returned, the next currentValue will be 
  // previousValue + currentValue, and the next previousValue will be the 
  // next item in the array.
  return previousValue + currentValue;
});
var totalTemp = temperatures.reduce(addNumbers);

function average(total, count) {
  return total / count;
}

function averageForArray(arr) {
  return average(totalForArray(arr), arr.length);
}

var averageTemp = averageForArray(temperatures);
// The map method takes a single argument, the current item in the list. Check
// out the link above for more complete examples.
var allTemperatures = data.map(function (item) {
  return item.temperatures;
});

// Pass in the name of the property that you'd like to retrieve
function getItem(propertyName) {
  // Return a function that retrieves that item, but don't execute the function.
  // We'll leave that up to the method that is taking action on items in our 
  // array.
  return function (item) {
    return item[propertyName];
  }
}
var temperatures = data.map(getItem('temperature'));
function pluck(arr, propertyName) {
  return arr.map(getItem(propertyName));
}

var allTemperatures = pluck(data, 'temperatures');
var data = [
  {
    name: "Jamestown",
    population: 2047,
    temperatures: [-34, 67, 101, 87]
  },
];
var populations = pluck(data, 'population');
var allTemperatures = pluck(data, 'temperatures');
var averageTemps = allTemperatures.map(averageForArray);
//
function combineArrays(arr1, arr2, finalArr) {
  // Just so we don't have to remember to pass an empty array as the third
  // argument when calling this function, we'll set a default.
  finalArr = finalArr || [];

  // Push the current element in each array into what we'll eventually return
  finalArr.push([arr1[0], arr2[0]]);

  var remainingArr1 = arr1.slice(1),
    remainingArr2 = arr2.slice(1);

  // If both arrays are empty, then we're done
  if (remainingArr1.length === 0 && remainingArr2.length === 0) {
    return finalArr;
  }
  else {
    // Recursion!
    return combineArrays(remainingArr1, remainingArr2, finalArr);
  }
};

var processed = combineArrays(averageTemps, populations);
//
var processed = combineArrays(pluck(data, 'temperatures').map(averageForArray), pluck(data, 'population'));

// [
//  [ 55.25, 2047 ],
//  [ 5.5, 3568 ],
//  [ 75, 1000000 ]
// ]
function makeArrayCount(keys, arr) {

  // for each of the unique tagNames
  return keys.map(function (key) {
    return [
      key,
      // Find all the elements in the full list of tag names that match this key
      // and count the size of the returned array.
      arr.filter(function (item) { return item === key; }).length
    ]
  });

}
function setGraphData(data) {
  var node = svg.selectAll(".node")
    // Here's where we pass our data to the pack object.
    .data(bubble.nodes(data)
      .filter(function (d) { return !d.children; }))
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

  // Append a circle for each tag name.
  node.append("circle")
    .attr("r", function (d) { return d.r; })
    .style("fill", function (d) { return color(d.className); });

  // Add a label to each circle, using the tag name as the label's text
  node.append("text")
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .style("font-size", "10px")
    .text(function (d) { return d.className });
}
function processData(dataResponse) {
  var tagNames = pluck(_.flatten(pluck(dataResponse.data, 'tags')), 'name');
  var tagNamesUnique = _.uniq(tagNames);

  var packData = makeArrayCount(tagNamesUnique, tagNames).map(function (tagArray) {
    return {
      className: tagArray[0],
      package: "cluster",
      value: tagArray[1]
    }
  });

  return packData;
}

function updateGraph(dataResponse) {
  setGraphData(processData(dataResponse));
}


dataRequest.done(updateGraph);

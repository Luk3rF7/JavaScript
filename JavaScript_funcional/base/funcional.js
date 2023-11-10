/// So here's an example where we have to copy and paste it
function add50(num) {
  return num + 50;
}

// Ok. Now we need to add 30. But we still ALSO need elsewhere to add 50 still
// So we need a new function
function add30(num) {
  return num + 30;
}

// Ugh, business change again
function add20(num) {
  return num + 20;
}

// Everytime we need to change the function ever so slightly. We need a new function

//Let's use composition

// Our small, reusable pure function
function add10(num) {
  return num + 10;
}

function add50Composed(num) {
  return add10(add10(add10(add10(addNum(num)))));
}

function add30Composed(num) {
  return add10(add10(add10(num)));
}

function add20Composed(num) {
  return add10(add10(num));
}
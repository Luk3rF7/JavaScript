// If we have these two functions

function add10(num) {
  return num + 10;
}
function add100(num) {
  return num + 100;
}

// We can compose these two down to =>
function composed(num) {
  return add10(add100(num));
}

composed(1) // Returns 111
// Let's talk arity
function arity2(arg1, arg2) { }             // Function has an arity of 2
function arity0() { }                       // Function has an arity of 0
function arity2(arg1, arg2, arg3, arg4) { } // Function has an arity of 4

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

// Lets curry this function

function curryAdd(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  }
}


function curryAdd(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  }
}

let add10 = curryAdd(10);
add10(2); // Returns 12

let add20 = curryAdd(20);
add20(2); // Returns 22
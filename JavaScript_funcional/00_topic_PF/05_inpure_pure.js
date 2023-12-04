// pure

function add(x, y) {
  return x + y;
}

add(1, 2);
add(1, 2);
add(1, 3);

// funcao inpura 

function addInpure(x, y) {
  // external and produces an abservable 
  //side effect  
  console.log(x + y);
  return x + y;
}
addInpure(1, 2)
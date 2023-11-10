function recurse(start, end) {
  if (start == end) {
    console.log(end)
    return;
  } else {
    console.log(start)
    return recurse(start + 1, end)
  }
}

// recurse(1, 10);
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

const arr = [1, 2, 3, , 4, 5, 6]

recurse(arr, 10)
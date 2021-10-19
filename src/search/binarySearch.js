function binarySearch(key, table, size) {
  let left = -1;
  let right = size - 1;

  while (left <= right) {
    let middle = (left + right) / 2;
    if (table[middle] < key) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return table[right];
}
 
//versão recursiva

function binarySearchRecursive(key, table, left, right) {
  let middle = (left + right) / 2;
  if (table[middle] === key) {
    return table[middle];
  } if (left >= right) {
    return - 1;
  } else {
    if (table[middle] < key) {
      return binarySearchRecursive(key, table, middle + 1, right);
    } else {
      return binarySearchRecursive(key, table, middle, right - 1);
    }
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let x = 8;
let n = array.length;
let l = -1;
let r = n;

console.log(array)
let result = binarySearchRecursive(x, array, l, r);
(result == -1)
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
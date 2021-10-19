function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);

  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  while (l < left.length) {
    result.push(left[l]);
    l++
  }

  while (r < right.length) {
    result.push(right[r]);
    r++;
  }
  return result;
}
let array = [5, 4, 8, 1, 2, 6, 7, 3];

console.log(`\n Initial Array: [${array}]`);
console.log(`\n Array Sorted: [${mergeSort(array)}]\n`);
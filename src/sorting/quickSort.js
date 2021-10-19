/**let array = [6,4,8,1,5,2,7,3] */
/**left - start of array, right - end of array */
function tradeObjects(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

function partition(array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)];

  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      tradeObjects(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
}

let array = [5, 4, 8, 1, 2, 6, 7, 3];

console.log(`\n\n Initial Array: [${array}]\n`);
console.log(`\n\n Array Sorted: [${quickSort(array, 0, array.length)}]\n`);


/**
function quickSort(array, left, right) {
  let pivot;
  let i, j;
  if (left <= right) {
    let aux_pivot = array[right - 1];
    i = left - 1;
    for (j = left; j <= right - 1; j++) {
      if (array[j] <= pivot) {
        i++;
        [array[j], array[i]] = array[array[i], array[j]];
      }

      [array[right - 1], array[i + 1]] = [array[i + 1], array[right - 1]];

      pivot = i + 1;

      quickSort(array, left, pivot - 1);
      quickSort(array, pivot + 1, right - 1);
      return array
    }
  }
}

let array = [5, 4, 8, 1, 2, 6, 7, 3];

console.log(`\n\n Initial Array: [${array}]\n`);
quickSort(array, 0, array.length);
console.log(`\n\n Initial Sorted: [${array}]\n`);

*/
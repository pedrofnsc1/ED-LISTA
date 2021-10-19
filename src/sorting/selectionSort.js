function sortArray(array, i, min) {
  let aux;
  aux = array[i];
  array[i] = array[min];
  array[min] = aux;
}

function selectionSort(array, size) {
  let i, j, min_index, aux;

  for (i = 0; i < size; i++) {
    min_index = i;
    for (j = i + 1; j < size; j++) {
      if (array[min_index] >= array[j]) {
        min_index = j;
      }
    }
    if (i != min_index) {
      sortArray(array, i, min_index);
    }
  }
}
let time = '';
console.time(time);
let array = [5, 7, 15, 22, 43, 9, 12];
let size = 7;
console.log(`\nentry: ${array}`);
selectionSort(array, size);
console.log(`sorted: ${array}\n\n`);
console.timeEnd(time);
function sortArray(array, j, jp) {
  let temp;

  temp = array[j];
  array[j] = array[jp];
  array[jp] = temp;
}

function bubbleSort(arrayOfObjects) {
  for (let i = 0; i < arrayOfObjects.length; i++) {
    for (let j = 0; j < arrayOfObjects.length - 1 - i; j++) {
      if (arrayOfObjects[j] >= arrayOfObjects[j + 1]) {
        sortArray(arrayOfObjects, j, j + 1);
      }
    };
  };
}
let array = [5, 7, 15, 22, 43, 9, 12];
console.log(`\nentry: ${array}`);
bubbleSort(array);
console.log(`sorted: ${array}\n\n`);

/**
 * BEST CASE
 * for the best case time complexity is: O(n)/O(1) */
let bestCase = [5, 7, 9, 12, 15, 22, 43];
console.log(`Best case entry: ${bestCase}`);
bubbleSort(bestCase);
console.log(`Best case sorted: ${bestCase}\n\n`);

/**
 * WORST CASE
 * for the worst case time complexity is: O(n^2) */
let worstCase = [43, 22, 15, 12, 9, 7, 5];
console.log(`Worst case entry: ${worstCase}`);
bubbleSort(worstCase);
console.log(`Worst case sorted: ${worstCase}\n`);
function insertionSort(arrayOfObjects) {
  for (let i = 0; i < arrayOfObjects.length; i++) {
    let key = arrayOfObjects[i];
    let j = i - 1;

    while (j >= 0 && arrayOfObjects[j] > key) {
      arrayOfObjects[j + 1] = arrayOfObjects[j];
      j = j - 1;
    }
    arrayOfObjects[j + 1] = key;
  }
  return arrayOfObjects;
}
let array = [5, 7, 15, 22, 43, 9, 12];
console.log(`\nBest case entry: ${array}`);

console.log(`Best case sorted: ${insertionSort(array)}\n\n`);
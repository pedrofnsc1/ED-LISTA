function sequentialSearch(data, key, size) {
  for (let i = 0; i < size; i++) {
    if (data[i] == key) {
      return data[i];
    }
  }
  return -1;
}
 
function sequencialSearchWithSentinel(key, data){
  let size = data.length;
  data[size] = key;

  for(let i = 0; key != data[i] && i < size; i++) {
    if(key === data[i] && i != size){
      return data[i];
    }
    return - 1;
  }
}

let array = [2, 3, 4, 10, 40];
let x = 2;
let n = array.length;

console.log(array)

let result = sequentialSearch(array, x, n);
(result == -1)
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);

// Recursively splitting the array until the array length is 1 or 0 
function mergeSort(array) {
   const half = array.length / 2;

   if (array.length <= 1) {
      return array;
   }

   const left = array.splice(0, half);
   const right = array;
   return merge(mergeSort(left), mergeSort(right));
}

// Merging the numbers back together in the order of least to highest
function merge(left, right) {
   let sortedArray = [];

   while (left.length && right.length) {
      if (left[0] < right[0]) {
         sortedArray.push(left.shift());
      } else {
         sortedArray.push(right.shift());
      }
   }

   return [...sortedArray, ...left, ...right];
}
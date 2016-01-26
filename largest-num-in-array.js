function largestOfFour(arr) {
/* Returns an array consisting of the
    largest number from each provided sub-array.
*/
  
  var largestNums = [];
  
  for (var i = 0; i < arr.length; i ++) { // interate through each array
    var largest = 0;
    for (var j = 0; j < arr[i].length; j++) {   // iterate through each subarray
      if (arr[i][j] > largest) {
        largest = arr[i][j];  // if num in subarray greater > largest num in subarray so far, reassign as current largest
      }
    }
    largestNums.push(largest);
  }
  return largestNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

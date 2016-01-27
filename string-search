function mutation(arr) {
  /* Returns true if the string in the first element of the array 
      contains all of the letters of the string in the second element of the array. */

  var count = 0;
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  
  for (i = 0; i < arr[1].length; i++) {  // for each letter in 2st arg
    // if at any point char in arr[1] not in arr[2], return false
      if (arr[0].indexOf(arr[1][i]) < 0) {
        return false;
      }
  }
  return true;
}

mutation(["Alien", "line"]);

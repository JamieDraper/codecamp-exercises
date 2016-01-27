function destroyer(arr) {
  /*Removes all elements from the initial array 
    that are of the same value as these arguments.*/

  // get a list of items to destroy
  var itemsToDestroy = [];
  for (i = 1; i < arguments.length; i++) {
    itemsToDestroy.push(arguments[i]);
  }
  // filter out any elements that are present in itemsToDestroy
  arr = arr.filter(function(el) {
    return itemsToDestroy.indexOf(el) <= -1;
  });

  return arr;
  
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

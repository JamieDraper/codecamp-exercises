function end(str, target) {
  /* Checks if a string (first argument)
      ends with the given target string (second argument). */
      
  // get end of str with length = targetLength
  var strEnd = str.substr(-target.length);
  // compares end of str arg with target arg  
  if (strEnd == target) {
    return true;
  } else {
    return false;
  }
}

end("Bastian", "tian");

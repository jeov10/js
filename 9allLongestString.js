function allLongestStrings(inputArray) {
    var repo = []
    var size  = cont = 0

inputArray.forEach(function(a) {
  if(a.length >= size) {
   size=a.length
   }
});

inputArray.forEach(function(a) {
  if(a.length === size) {
    repo[cont] = a;
    cont++
   }
});

    return repo
}

function allLongestStrings(inputArray) {
    var repo = []
    var size  = 0, cont = 0

inputArray.forEach(function(element) {
  if(element.length >= size) {
   size = element.length
   }
} )

inputArray.forEach(function(element) {
  if(element.length === size) {
    repo[cont] = element
    cont ++
   }
} )
    return repo
}

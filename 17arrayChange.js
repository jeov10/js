var inputArray = [-1000, 0, -2, 0]
var loopCounter = 0

for (var i = 0 ; i < inputArray.length ; i++ ) {
  while (inputArray[i] >= inputArray[i+1]) {
    inputArray[i+1] ++
    loopCounter ++
  }
}

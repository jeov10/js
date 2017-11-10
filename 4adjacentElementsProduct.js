function adjacentElementsProduct(inputArray) {
    var higher = inputArray[0] * inputArray[1]

    for(var i = 0 ; i < inputArray.length ; i++) {
        if(inputArray[i] * inputArray[i+1] > higher) {
            higher = inputArray[i] * inputArray[i+1]
        }
    }
    return higher
}

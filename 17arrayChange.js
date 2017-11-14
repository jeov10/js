function arrayChange(inputArray) {
  for (var i = 0, loopCounter = 0 ; i < inputArray.length ; i ++ ) {
    while (inputArray[i] >= inputArray[i + 1]) {
      inputArray[i + 1] ++ //incrementa el valor posterior hasta que sea mayor que el anterior
      loopCounter ++ //guarda el número de ciclos para lograr una cadena creciente
    }
  }
  return loopCounter
}
//var inputArray = [-1000, 0, -2, 0]
//arrayChange(inputArray)

function arrayMaximalAdjacentDifference(inputArray) {
  maxDifference = 0

  for (i = 0; i < inputArray.length-1; i ++) {
    aux = Math.abs(inputArray[i] - inputArray[i + 1]) //Diferencia absoluta
    maxDifference = Math.max(maxDifference, aux) //guarda el mayor de ambos
  }

  return maxDifference
}

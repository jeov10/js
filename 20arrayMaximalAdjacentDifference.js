inputArray = [2, 4, 1, 0]

maxDifference = 0

for (i = 0; i < inputArray.length-1; i ++) {
  aux = Math.abs(inputArray[i] - inputArray[i + 1]) //Diferencia absoluta
  if(aux > maxDifference) {
    maxDifference = aux
  }
}

console.log(maxDifference);

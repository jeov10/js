function commonCharacterCount(s1, s2) {
  var i = j = biggerChain = solution = stopWhile = 0
  var arraySmall = arrayBig = []

  if (s1.length > s2.length) {
    arraySmall = Array.from(s2)
    arrayBig = Array.from(s1)
    biggerChain = s1.length
  } else {
    arraySmall = Array.from(s1)
    arrayBig = Array.from(s2)
    biggerChain = s2.length
  }

  do {
    for (i = 0 ; i < arraySmall.length ; i ++){
      for (j = 0 ; j < arrayBig.length ; j ++){
        if (arraySmall[i] === arrayBig[j]) {
            arraySmall.splice(i, 1)
            arrayBig.splice(j, 1)
            i = j = 0
        }
      }
    }
    stopWhile ++
  } while (stopWhile <= 3)
  
  solution = biggerChain - arrayBig.length
  return solution
}

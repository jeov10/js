function avoidObstacles(inputArray) {
  arrSort = inputArray.sort(function (a, b){ //reordena el arreglo respetando al 10
    return a - b
  })

  jump = 1
  loop = 0
  while (loop <= arrSort.length) { //revisa todos los obstáculos del arreglo
    for (var i = 0; i < arrSort.length; i++) { //
      if(arrSort[i] % jump === 0) { //busca coincidencia entre saltos y obstáculos
        jump ++ //incrementa el salto
        break //reinicia el ciclo para buscar nuevamente coincidencia en saltos y obstáculos
      }
    }
    loop ++
  }

  return jump
}

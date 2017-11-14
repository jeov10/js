function matrixElementsSum(matrix) {
    var solve = 0

    for (var i = 0 ; i < matrix.length ; i ++) {
      for (var j = 0 ; j < matrix[0].length ; j ++) {
          if (matrix[i][j] === 0) { //busca los ceros
              for (var a = i ; a < matrix.length ; a ++) {
                  matrix[a][j] = 0 // elimina todos los datos debajo de 0's
              }
          }
      }
    }

    for (var i = 0 ; i < matrix.length ; i ++) { //suma todos los elementos
      for (var j = 0 ; j < matrix[0].length ; j ++) {
        solve = solve + matrix[i][j]
     }
    }

    return solve
}

function matrixElementsSum(matrix) {

var solve = 0
var column = matrix[0].length;
var row =  matrix.length;

for (var i = 0 ; i < row ; i++) {
  for (var j = 0 ; j < column ; j++) {
      if (matrix[i][j]===0) { //busca los ceros
          for (var a = i ; a < row ; a++) {
              matrix[a][j] = 0 // elimina todos los datos debajo de 0's
          }
      }
  }
}

for (var i = 0 ; i < row ; i++) { //suma todos los elementos
  for (var j = 0 ; j < column ; j++) {
    solve = solve + matrix[i][j]
 }
}

return solve
}

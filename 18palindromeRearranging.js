var inputString = "bbabba"
inputString = Array.from(inputString)
var reverseString = inputString.slice().reverse()
var cont = 0

//if(inputString.toString() === reverseString.toString()) { //si la cadena es palindromo sin modificar
//    return true
//}

for (var i = 0 ; i < inputString.length ; i ++) {
  for (var j = 1 ; j < sizeString ; j ++) {
    if(inputString[i] === inputString[j]) {
      inputString.splice(j, 1)
      inputString.splice(i, 1)
      i = 0
    }
    console.log(inputString)
  }
  console.log('i: ' + i + ' j: ' + j)
}


//si el palíndromo es par el inputString quedará vacío
//si el palíndromo es impar tendrá sólo un elemento
//si el inputString resultante tiene 2 o más elementos no es in palíndromo

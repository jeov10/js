var inputString = "bbabba"
var palindrome = []
var sizeString = inputString.length
inputString = Array.from(inputString)
var reverseString = inputString.slice().reverse()
var cont = 0

//if(inputString.toString() === reverseString.toString()) { //si la cadena es palindromo sin modificar
//    return true
//}

for ( var j = 0 ; j < sizeString ; j ++) {
  for (var i = 1 ; i < sizeString ; i ++) { // cuando el string es par
    if (inputString[j] === inputString[i + 1]) {
        inputString.splice(i, 1)
        inputString.splice(j, 1)
    }
  }
}

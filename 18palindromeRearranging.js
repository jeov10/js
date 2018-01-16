var inputString = "abbcde"

if(inputString === inputString.split("").reverse().join("")){
  //return true
  console.log('true')
} //comprueba si es palindromo

inputString = Array.from(inputString) //convierte la cadena a array

for (var i = 0 ; i < inputString.length ; i ++) {
  for (var j = 1 ; j < inputString.length ; j ++) {
    if(inputString[i] === inputString[j]) {
      console.log(inputString[i] + ' coincide con ' + inputString[j])
      console.log(i + ' pos ' + j)
      inputString.splice(j, 1)//Borra del array el elem seleccionado
      inputString.splice(i, 1)//Borra del array el elem seleccionado
      j = 1;
    }
    console.log(inputString)
  }
  i = 0;
}

if(inputString.length < 2) {
  //return true
  console.log('true')
} else {
  //return false
  console.log('false')
}

//si el palíndromo es par el inputString quedará vacío
//si el palíndromo es impar tendrá sólo un elemento
//si el inputString resultante tiene 2 o más elementos no es in palíndromo

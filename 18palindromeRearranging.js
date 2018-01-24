function palindromeRearranging(inputString) {
  if(inputString === inputString.split("").reverse().join("")){ //Invierte el string y determina si es palindromo
    return true
  }

  letterCount = {}

  for (i = 0; i < inputString.length; i++) { //crea una objeto e inicializa cada letra (unico) en cero
    letter = inputString[i]
    letterCount[letter] = letterCount[letter] || 0 // si el elemento existe mantiene su valor sino asigna cero
    letterCount[letter]++ //incrementa el valor actual del elemento
  }

  const arr = []
  for (var key in letterCount) { //para los elementos key que existan en letterCount
    (letterCount[key] % 2 != 0) && arr.push(letterCount[key]) //si el módulo del elemento es diferente de cero, lo guarda en el arreglo arr
  }

  if( arr.length > 1 ) { //si el valor del arreglo es mayor a 1 no puede reordenarse como palíndromo
    return false
  }
  return true //No es palindromo pero puede reordenarse como uno
}

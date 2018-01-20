inputString = "abbcde"

if(inputString === inputString.split("").reverse().join("")){
  //return true
  console.log('true')
} //comprueba si es palindromo

letterCount = { }
for (i = 0; i < inputString.length; i++) { //crea una objeto e inicializa cada letra (unico) en cero
  letter = inputString[i]
  console.log('letter: ' + letter)
  letterCount[letter] = 0
  console.log(letterCount)
}
for (var i = 0; i < inputString.length; i++) { //cuentas cuantas veces aparece una letra
  letter = inputString[i]
  letterCount[letter]++
  console.log(letterCount)
}


console.log(letterCount)

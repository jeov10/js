inputString = "abbbba"

if(inputString === inputString.split("").reverse().join("")){
  //return true
  console.log('true')
} //comprueba si es palindromo

letterCount = { }
letterSum = 0
for (i = 0; i < inputString.length; i++) { //crea una objeto e inicializa cada letra (unico) en cero
  letter = inputString[i]
  letterCount[letter] = 0
}

for (var i = 0; i < inputString.length; i++) { //cuentas cuantas veces aparece una letra
  letter = inputString[i]
  letterCount[letter]++
}

for (var i = 0; i < inputString.length; i++) { //Determina si es palindromo
  letter = inputString[i]
  letterSum += letterCount[letter] % 2
}

if (letterSum < 2) {
  //return true
  console.log('true')
} else {
  //return false
  console.log('false')
}

inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"

if(inputString === inputString.split("").reverse().join("")){
  //return true
  console.log('true')
} //comprueba si es palindromo

letterCount = {}

for (i = 0; i < inputString.length; i++) { //crea una objeto e inicializa cada letra (unico) en cero
  letter = inputString[i]
  letterCount[letter] = letterCount[letter] || 0 //
  letterCount[letter]++
}

const arr = []
for (var key in letterCount) {
  (key % 2 != 0) && arr.push(key)
}

arr.length > 1 ? console.log(false) : console.log(true)

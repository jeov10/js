var s = "The ((quick (brown) (fox) jumps over the lazy) dog)"

var aux = [], solution = []
var cont = 0, cont2 = 0, stop = 0
var flag = null
var firstBracket = 0, lastBracket = 0, contBracket = 0
var backupS = s
s = Array.from(s) //convierte la cadena original en array

s.forEach(function(e) { //cuenta cuantos paréntesis hay
  if(e==="("){contBracket++}
})

if(contBracket === 0) {
  return backupS
}

else {
  do{
    cont = 0
    flag = false
    do{ //encuentra el un grupo más centrico entre paréntesis
      if(s[cont] === "(") {
        firstBracket = cont
      }
      if (s[cont] === ")") {
        lastBracket = cont
        flag = true
      }
      cont ++
    }while (flag != true)

    s.forEach(function(e, i) {
      if(i > firstBracket && i < lastBracket) {//Guarda lo que está dentro de los parentecis
        aux[cont2] = e
        cont2 ++
      }
    })
    console.log("aux " + cont + ": " + aux)
    aux = aux.reverse() //invierte lo que está dentro de parentesis
    cont2 = 0 //reset al count2 si lo necesitas no lo borres!!!
    s.forEach(function (e, i) { //inserta los elementos dentro de (invertido)
      if(i > firstBracket && i < lastBracket) {
        s[i] = aux[cont2]
        cont2 ++
      }
    })
    aux = []
    cont2 = 0
    lastBracket = lastBracket - 1 //elimina los parentesis actuales
    s.splice(firstBracket, 1)
    s.splice(lastBracket, 1)
    stop++
    console.log(stop + ": " + s)
  } while (stop != contBracket)

  s = s.toString()
  solution = s[0]

  for(var i = 0 ; i < s.length-2 ; i++ ) {
    if(i % 2 === 0) {
      solution = solution + s[i+2]
    }
  }
}

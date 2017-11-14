function reverseParentheses(s) {
  var solution = [], bracketBackup = []
  var auxiliaryCounter = 0, positionArrayCounter = 0, doWhileStop = 0
  var flag = null
  var firstBracket = 0, lastBracket = 0, contBracket = 0
  var backupS = s

  s = Array.from(s)

  s.forEach(function(element) { //cuenta cuantos paréntesis hay
    if (element === '(') contBracket++
  } )

  if (contBracket === 0) {
    return backupS
  }
  do {
    auxiliaryCounter = 0
    flag = false
    do { //encuentra el un grupo más centrico entre paréntesis
      if (s[auxiliaryCounter] === '(') {
        firstBracket = auxiliaryCounter
      }
      if (s[auxiliaryCounter] === ')') {
        lastBracket = auxiliaryCounter
        flag = true
      }
      auxiliaryCounter ++
    } while (flag != true)

    s.forEach(function(e, i) {
      if (i > firstBracket && i < lastBracket) {//Guarda lo que está dentro de los parentecis
        bracketBackup[positionArrayCounter] = e
        positionArrayCounter ++
      }
    } )

    bracketBackup = bracketBackup.reverse() //invierte lo que está dentro de paréntesis
    positionArrayCounter = 0 //reset al count2 si lo necesitas no lo borres!!!

    s.forEach(function (e, i) { //inserta los elementos dentro de (invertido)
      if (i > firstBracket && i < lastBracket) {
        s[i] = bracketBackup[positionArrayCounter]
        positionArrayCounter ++
      }
    } )

    bracketBackup = []
    positionArrayCounter = 0

    lastBracket = lastBracket - 1 //elimina los parentesis actuales
    s.splice(firstBracket, 1)
    s.splice(lastBracket, 1)
    doWhileStop ++
  } while (doWhileStop != contBracket)

  s = s.toString()
  solution = s[0]

  for (var i = 0 ; i < s.length - 2 ; i ++ ) {
    if (i % 2 === 0) {
      solution = solution + s[i + 2]
    }
  }
  return solution
}

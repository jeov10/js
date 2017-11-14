function areSimilar(a, b) { // el array es exactamente igual
  if(a.toString() === b.toString()) {
      return true
  }
  var aResidue = []
  var bResidue = []

  for(var i = 0 ; i < a.length ; i ++) { //compara elemento vs elemento
    if(a[i] != b[i]) { //saca los elementos que no coinciden
      aResidue.push(a[i])
      bResidue.push(b[i])
    }
  }

  if(aResidue.length <= 2) { // Los elementos a cambiar es menor a dos
    bResidue = bResidue.reverse() //cambio de posiciones del array 2
    if(aResidue.toString() === bResidue.toString()){ //compara ambos residuos como cadenas
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

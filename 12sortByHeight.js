function sortByHeight(a) {
  var aux = 0, neg = [], cont = 0, size = a.length

  for(var i = 0 ; i < a.length ; i ++) { //Crea un array sólo con los -1 y sus posiciones
    if(a[i] < 0) {
      neg[i] = a[i]
    }
  }

  a = a.filter(x => x != - 1) // elimina los -1 del array original

  for(var i = 0 ; i < a.length ; i ++) { //ordena los elementos del array a
    for(var j = 0 ; j < a.length ; j ++) {
        if(a[j] > a[j + 1]) {
          aux = a[j]
          a[j] = a[j + 1]
          a[j + 1] = aux
      }
    }
  }

  for(var i = 0 ; i < size ; i ++){ //Reincerta el array a ordenado y el neg con los -1
    if(neg[i] != - 1) {
      neg[i] = a[cont]
      cont ++
    }
  }

  return neg
}

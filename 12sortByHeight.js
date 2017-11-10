function sortByHeight(a) {
  var aux = 0, neg = [], cont = 1, cont2 = 0, size = a.length
  for(var i = 0 ; i<a.length ; i++){
    if(a[i]<0) {
      neg[i] = a[i]
    }
  }

  a = a.filter(x => x != -1)

  for(var i=0 ; i<a.length ; i++) {
    for(var j=0 ; j<a.length ; j++) {
        if(a[j]>a[j+1]) {
          aux = a[j]
          a[j] = a[j+1]
          a[j+1] = aux
      }
    }
  }

  for(var i = 0 ; i < size ; i++){
    if(neg[i] != -1) {
      neg[i] = a[cont2]
      cont2++
    }
  }

  return neg
}

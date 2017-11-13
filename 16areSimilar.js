function areSimilar(a, b) {
  var cont = 0
  var solution = null
  var aux = 0

  while(cont < a.length){
    for (var i = 0 ; i < a.length ; i ++){
      console.log(a + " " + b)
      if (a[i] === b[i]) {
        a.splice(i, 1)
        b.splice(i, 1)
        i = 0
      }
      console.log(a + " " + b)
    }
    cont ++
  }

  if (a.length === 0) {
    return true
  }

  aux = b[0]
  b[0] = b[1]
  b[1] = aux

  if (a[0] === b[0]) {
    a.splice(0, 1)
    b.splice(0, 1)
  } else {
    return false
  }

  if(a.length === 0) {
    return true
  } else {
    return false
  }

}

var a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
var b = [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]

areSimilar(a,b)

function areSimilar(a, b) { // el array es exactamente igual
  if(a.toString() === b.toString()) {
      return true
  }
  var c = []
  var d = []

  for(var i = 0 ; i < a.length ; i ++) { //compara elemento vs elemento
    if(a[i] != b[i]) { //saca los elementos que no coinciden
    c.push(a[i])
    d.push(b[i])
    }
  }

var a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
var b = [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]

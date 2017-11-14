function isLucky(n) {
  var first = 0, second = 0, value = null
  var arr = Array.from(n.toString())

  for (var i = 0 ; i < (n.toString().length) ; i ++) { //suma las dos mitades del array n
    i < ((n.toString().length) / 2) ? first = first + parseInt(arr[i], 10) : second = second + parseInt(arr[i], 10)
  }

  first === second ? value = true : value = false //la suma de ambas partes es igual
  return value
}

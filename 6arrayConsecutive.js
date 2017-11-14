function makeArrayConsecutive2(statues) {
  var min = Math.min(...statues) //obtiene valor mínimo del array
  var max = Math.max(...statues) //obtiene valor máximo del array
  var counter = max - min

  return counter + 1 - statues.length
}

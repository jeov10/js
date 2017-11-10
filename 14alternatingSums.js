function alternatingSums(a) {
  var even = 0, odd = 0
  a.forEach(function(element, index){
    index%2 === 0 ? even = even + element : odd = odd + element
  })

  a = []
  a[0] = even
  a[1] = odd
  return a
}

var a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
var b = [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
var cont = 0
var solution = null

do {
for(i=0 ; i < a.length ; i++){
  for(j=0 ; j < b.length ; j++){
    if(a[i] === b[j]) {
        a.splice(i, 1)
        b.splice(j, 1)
        i = j = 0
    }
    console.log()
  }
}
cont ++
}while(cont <= a.length)

a.length === 0 ? solution = true : solution = false

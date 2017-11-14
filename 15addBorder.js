function addBorder(picture) {
  var aux = '', firstRow = ''
  var pictureLength = picture.length
  var whileStop = 0

  while(whileStop < picture[0].length + 2){
    firstRow = firstRow + '*'
    whileStop ++
  }

  for (var i = pictureLength ; i > 0 ; i --) {
    aux = '*' + picture[i - 1] + '*'
    picture[i] = aux
  }

  picture[0] = firstRow
  picture[pictureLength + 1] = firstRow
  return picture
}

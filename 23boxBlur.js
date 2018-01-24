image = [[36,0,18,9], [27,54,9,0], [81,63,72,45]]

column = image[1].length //columnas
row = image.length //filas

column % 3 == 0 ? incrCol = 3 : incrCol = 1
row % 3 == 0 ? incrRow = 3 : incrRow = 1
 console.log(incrCol);
 console.log(incrRow);

i = 0

while(i <= image.length)
{
  for (i < incrCol; i++) {
    console.log(image[0][i])//Filas x columnas
  }
}

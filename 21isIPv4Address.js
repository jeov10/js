function isIPv4Address(inputString) {
  arr = inputString.split('.',) //separa los valores tomando como parámetro el punto y lo asigna a arr como arreglo

  for (var i = 0; i < arr.length; i++) {
    if(arr.length === 4 && arr[i] != "" && arr[i] >= 0 && arr[i] <= 255) {
      flag = true
    } else {
      return false
    }
  }

  return flag
}

//Condiciones del if debe tener 4 números, no pueden ser vacíos, y deben estar entre 0 y 255

function checkPalindrome (inputString) {
     var cont = 0
     var flag = null

     for ( var i = inputString.length ; i > 0 ; i -- ) {
        if ( inputString[cont] === inputString[i - 1] ) {
            flag = true
        } else {
            flag = false
            break
        }
          cont++
     }
     return flag
}

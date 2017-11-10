function checkPalindrome (inputString) {
     var flag = null

     for ( var i = inputString.length, cont = 0 ; i > 0 ; i --, cont ++) {
        if ( inputString[cont] === inputString[i - 1] ) {
            flag = true
        } else {
            return false
        }
     }
     return flag
}

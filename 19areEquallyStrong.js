function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
   if(yourLeft === friendsRight) {
    if(yourRight === friendsLeft) {
      return true
    }
    return false
  }

  if(yourLeft === friendsLeft) {
    if(yourRight === friendsRight) {
      return true
    }
    return false
  }

  return false
}

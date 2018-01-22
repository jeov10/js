yourLeft = 10
yourRight = 15
friendsLeft = 5
friendsRight = 20

if(yourLeft === friendsRight) {
  if(yourRight === friendsLeft) {
    console.log('true diferent')
  } else {
    console.log('false diferent')
  }
}

if(yourLeft === friendsLeft) {
  if(yourRight === friendsRight) {
    console.log('true same')
  } else {
    console.log('false same')
  }
}

console.log('false');

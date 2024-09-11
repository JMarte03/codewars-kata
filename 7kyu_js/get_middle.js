// Return the middle character in a given string

function getMiddle(s)
{
  //Code goes here!
  let iOdd = ((s.length - 1 )/ 2)
  let iEven = (s.length/2) - 1
  if (s.length === 1){
    return s
  }
  else if (s.length % 2 === 0){
    return s.slice(iEven, iEven + 2)
  }
  else {
    return s.slice(iOdd, iOdd + 1)
  }
  
}

console.log(getMiddle('testing'))
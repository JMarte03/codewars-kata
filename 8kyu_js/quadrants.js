/* 

    Given a point in a Euclidean plane (x and y), return the quadrant 
    the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero 
    integers, therefore the given point never lies on the axes.

*/

function quadrant(x, y) {
    if (x > 0 && y > 0 ){
      return 1
    }
    else if (x < 0 && y > 0 ){
      return 2
    }
    else if (x < 0 && y < 0 ){
      return 3
    }
    else {
      return 4
    }
  }

console.log(quadrant(1, 2)) // => 1
console.log(quadrant(3, 5)) // => 1
console.log(quadrant(-10, 100)) // => 2
console.log(quadrant(-1, -9)) // => 3
console.log(quadrant(19, -56)) // => 4

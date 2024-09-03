/* 
    Define a function that removes duplicates from an array of non negative 
    numbers and returns it as a result.

    The order of the sequence has to stay the same.
*/

function distinct(a) {
  let array = []
  a.forEach(element => {
    if (!array.includes(element)) {
        array.push(element)
    }
  });
  return array
}

console.log(distinct([1,2,2,1,4,8,3])) //OUTPUT: [1,2,4,8,3]



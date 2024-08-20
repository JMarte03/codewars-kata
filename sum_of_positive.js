/* 

    You get an array of numbers, return the sum of 
    all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum, 
    the sum is default to 0.

*/

function positiveSum(arr) {
    let positiveN = arr.filter ( value => value >= 0) // filter the positive numbers in the array
    let sum = positiveN.reduce((acc, value) => acc+=value, 0) // sum the positive numbers
    return sum
}

console.log(positiveSum([1,2,3,4,5])) // output: 15
console.log(positiveSum([1,-2,3,4,5])) // output: 13
console.log(positiveSum([])) // output: 0
/* 

    Create a function that always returns True/true for every item in a given list.
    However, if an element is the word 'flick', switch to always returning the opposite 
    boolean value.

*/

function flickSwitch(arr){
    let boolVar = true
    return arr.map((word) => {
        return word === 'flick' ? boolVar = !boolVar : boolVar
    });
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])) // ➞ [True, False, False, False]
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])) //  ➞ [False, False, False, False]
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])) // ➞  ➞ [True, True, False, False, True]

 




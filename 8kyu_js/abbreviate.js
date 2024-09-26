/* 

    Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot separating them.

    It should look like this:

    Sam Harris => S.H

    patrick feeney => P.F

*/

function abbrevName(name){

    let arr = name.split(" ")
    let mod = arr.map((word) => {
      word = word[0].toUpperCase()
      return word
    })
    return mod[0] + '.' + mod[1]

}

console.log(abbrevName('Jhon Smith')) // OUPUT: J.S
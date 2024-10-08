/* 

    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after 
    it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. If 
    there are numbers or special characters included in the string, they should be returned as 
    they are. Only letters from the latin/english alphabet should be shifted, like in the original 
    Rot13 "implementation".

*/

function rot13(message){
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" // string with the alphabet

    const cipher = {
        'a': 'n',
        'b': 'o',
        'c': 'p',
        'd': 'q',
        'e': 'r',
        'f': 's',
        'g': 't',
        'h': 'u',
        'i': 'v',
        'j': 'w',
        'k': 'x',
        'l': 'y',
        'm': 'z',
        'n': 'a',
        'o': 'b',
        'p': 'c',
        'q': 'd',
        'r': 'e',
        's': 'f',
        't': 'g',
        'u': 'h',
        'v': 'i',
        'w': 'j',
        'x': 'k',
        'y': 'l',
        'z': 'm',
    } // dictionary with the cipher
    
    let arr = message.split("") // turn the message into an array to loop through
    return arr.map((letter) => {
        if (alphabet.indexOf(letter) !== -1){ // checks if a character is a letter
            if (letter === letter.toUpperCase()){ // checks if a letter is uppercased
                letter = letter.toLowerCase() // lowercase it to use in the cipher
                letter = cipher[letter].toUpperCase() // find it's matching letter in the cipher, then uppercase it again
            }
            else {
                letter = cipher[letter] // if it's not uppercased 
            }
        }
        return letter // return the letter transformed
    }).join("") // join the array
}

console.log(rot13('test')) // OUTPUT: 'grfg'
console.log(rot13('Codewars')) // OUTPUT: 'Pbqrjnef'
console.log(rot13('Ruby is cool!')) // OUTPUT: 'Ehol vf pbby!'
console.log(rot13('10+2 is twelve.')) // OUTPUT: '10+2 vf gjryir.'


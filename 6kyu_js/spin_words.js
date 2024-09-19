/* 

    Write a function that takes in a string of one or more words, and returns the same string, 
    but with all words that have five or more letters reversed (Just like the name of this Kata).
    Strings passed in will consist of only letters and spaces. Spaces will be included only when 
    more than one word is present.

    Examples:

    "Hey fellow warriors"  --> "Hey wollef sroirraw" 
    "This is a test        --> "This is a test" 
    "This is another test" --> "This is rehtona test"

*/

function spinWords(string){
  let arr = string.split(" ")

  let modified = arr.map((word) => {
    if (word.length >= 5){
        let wordArr = word.split("")
        wordArr.reverse();
        return wordArr.join("")
    }
    else {
        return word
    }
  })

  return modified.join(" ")
}

console.log(spinWords('Hey fellow warriors')) // Ouput: Hey wollef sroirraw
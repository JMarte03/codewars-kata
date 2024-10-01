/* 

    Write a function that accepts a string, and returns the same string with all even indexed characters 
    in each word upper cased, and all odd indexed characters in each word lower cased. The indexing 
    just explained is zero based, so the zero-ith index is even, therefore that character should be 
    upper cased and you need to start over for each word.

    The passed in string will only consist of alphabetical characters and spaces(' '). 
    Spaces will only be present if there are multiple words. Words will be separated by a single 
    space(' ').

    Examples:
        "String" => "StRiNg"
        "Weird string case" => "WeIrD StRiNg CaSe"

*/

function toWeirdCase(string) {
  let arr = string.split(" "); // create array of words
  let newArr = arr.map((word) => {
    //iterate through the array of words
    let letterArr = []; // create array of letters
    for (let i = 0; i < word.length; i++) {
      // iterate through the words
      if (i % 2 == 0 || i == 0) {
        // if the index of the letter is even uppercase it
        letterArr.push(word[i].toUpperCase());
      } else {
        letterArr.push(word[i].toLowerCase()); // otherwise
      }
    }
    return letterArr.join(""); // return the words with letters modified
  });
  return newArr.join(" "); // return array with words modified
}

console.log(toWeirdCase("This is a test")); // ThIs Is A TeSt
console.log(toWeirdCase("unique")); // UnIqUe

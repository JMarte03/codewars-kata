/* 

    Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
    Leave punctuation marks untouched.

*/

function pigIt(str) {
  let arr = str.split(" ");
  let modified = arr.map((word) => {
    if (word != "!" && word != "?") {
      let f = word.slice(0, 1);
      let l = word.slice(1);
      return `${l}${f}ay`;
    } else {
      return word;
    }
  });
  return modified.join(" ");
}

console.log(pigIt('Pig latin is cool !')); // OUTPUT: igPay atinlay siay oolcay
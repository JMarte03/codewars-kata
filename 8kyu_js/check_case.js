/* 

    Write a function that will check if two given characters are the same case.

    - If either of the characters is not a letter, return -1
    - If both characters are the same case, return 1
    - If both characters are letters, but not the same case, return 0

*/

function sameCase(a, b) {
  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );
  if (letters.includes(a) && letters.includes(b)) {
    if (
      (a.toUpperCase() == a && b.toUpperCase() == b) ||
      (a.toLowerCase() == a && b.toLowerCase() == b)
    ) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return -1;
  }
}

console.log(sameCase('a', 'g')) // => 1
console.log(sameCase('A', 'C')) // => 1
console.log(sameCase('b', 'G')) // => 0
console.log(sameCase('0', '?')) // => -1


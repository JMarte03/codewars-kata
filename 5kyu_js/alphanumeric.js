/* 

    In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

    The string has the following conditions to be alphanumeric:

    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces / underscore

    NOTE: no special characters are valid, empty strings are invalid


*/

function alphanumeric(string) {
  const invalidChars = [
    " ",
    "_",
    "!",
    "\n",
    "\t",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
  ];

  let arr = string.split("");

  if (string == "") {
    return false;
  } else {
    for (let i = 0; i < invalidChars.length; i++) {
      if (arr.includes(invalidChars[i])) {
        return false;
      }
    }
  }

  return true;
}

console.log(alphanumeric('Mazinkaiser')) // OUTPUTS: true
console.log(alphanumeric('hello world_')) // OUTPUTS: false
console.log(alphanumeric('   ')) // OUTPUTS: false
console.log(alphanumeric('')) // OUTPUTS: false

/* 

    BETTER ALTERNATIVE WITHOUTH REGEX:

    const alphanumeric = (str) => {
        if (!str.length) return false;
        const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let char of str) {
            if (!ALLOWED_CHARS.includes(char)) return false;
        }
        return true;
    };

*/
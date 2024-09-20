/* 

    Write a function that takes a string of braces, and determines if 
    the order of the braces is valid. It should return true if the 
    string is valid, and false if it's invalid.

    All input strings will be nonempty, and will only consist of parentheses, 
    brackets and curly braces: ()[]{}.

    What is considered Valid?
    A string of braces is considered valid if all braces are matched 
    with the correct brace.

    Examples
    "(){}[]"   =>  True
    "([{}])"   =>  True
    "(}"       =>  False
    "[(])"     =>  False
    "[({})](]" =>  False
    
*/

// PREP
// Only valid if the first char is an opening brace => ({[
// Only valid if:
//      the next char is a closure to the brace inmediately before OR => ()
//      the next char is an opening of another type of brace => ({[

function validBraces(braces) {
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // push opening braces to the stack
      stack.push(currentChar);
    } else {
      // if it's a closing brace
      if (currentChar !== matches[stack.pop()]) { //if the closing brace does not match with the last opening brace in the stack
        return false;
      }
    }
  }

  return stack.length === 0; 

  /* 
  
    After the loop finishes, the function returns true if the stack is empty
    (i.e., all the opening braces had matching closing braces).

    If the stack is not empty, it means some opening braces were not closed, 
    and it returns false.
  
  */
}

console.log(validBraces("([{}])")) // OUTPUT: true 
console.log(validBraces("[(])")) // OUTPUT: false

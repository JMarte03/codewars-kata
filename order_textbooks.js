/* 
    HELP! Jason can't find his textbook! It is two days before the test date, and Jason's 
    textbooks are all out of order! Help him sort a list (ArrayList in java) full of 
    textbooks by subject, so he can study before the test.

    The sorting should NOT be case sensitive.

*/

function sorter(arr) {
    return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}

/* 
    TEST CASES
*/

// Basic
console.log(sorter(['Algebra', 'History', 'Geometry', 'English'])) 
// Expected output: ['Algebra', 'English', 'Geometry', 'History']

// Capitalization
console.log(sorter(['Algebra', 'history', 'Geometry', 'english']))
// Expected output: ['Algebra', 'english', 'Geometry', 'history']

// Symbols
console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']))
// Expected output: ['$istory', '**english', 'Alg#bra', 'Geom^try']
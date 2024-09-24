/* 

    Your task, is to create N×N multiplication table, of size provided in parameter.

    For example, when given size is 3:

    1 2 3
    2 4 6
    3 6 9

    For the given example, the return value should be:

    [[1,2,3],[2,4,6],[3,6,9]]

*/

// PREP
// The size parameter means the amount of tables that are to be generated, and also the size of each table
// If size = 2 => [[1, 2], [2, 4]]
// Create a main array (one that contains all tables)
// Add 'size' arrays (tables) to the main array with a loop
// for each array of the main Array, make the multiplication table

multiplicationTable = function(size) {
    let mainArr = [] // Creates the main array (the one that contains the tables)
    for (let i = 0; i < size; i++){ 
        mainArr.push([]) // Creates a table
        let n = i + 1 // Determines the index of the table created
        for (let j = 1; j <= size; j++){
            mainArr[i].push(n*j) // Access the table and pushes a multiplication line
        }
    }
    return mainArr
    
}

console.log(multiplicationTable(3)) // OUTPUT: [ [], [] ]
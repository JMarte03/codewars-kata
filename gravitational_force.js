/* 
    This code creates a function that takes two arrays:

    - arr_val = [massObject1, massObject2, distanceBetween]
    - arr_unit = [unitMassObject1, unitMassObject2, unitDistance]

    We have to calculate the gravitational force between those two objects with this formula:

    F = (G * m1 * m2) / distance^2

    Where F is the gravitational force and G is a constant and is:

    G = 6.67 × 10^−11 

    And is F meassured in Newtons (N)

    So we have to calculate the force, and convert the units into SI, so F can be in Newtons.

    NOTE:

    Mass units: kilogram (kg), gram (g), milligram (mg), microgram (μg), pound (lb) 
    Distance units: meter (m), centimeter (cm), millimeter (mm), micrometer (μm), feet (ft)

*/

const g = 6.67 * 10 ** -11;  // Declaring the constant G of the formula

// Creating a function that changes the values based on the unit (converts). 
//Mass units have to be converted into kg, and distance units into m.
function convert (value, unit) {
    switch(unit){
        case 'kg': return value
        case 'g': return value * 0.1
        case 'mg': return value * 0.01
        case 'μg': return value * 0.001
        case 'lb': return value * 0.0001
        
        case 'm': return value
        case 'cm': return value * 0.1
        case 'mm': return value * 0.01
        case 'μm': return value * 0.001
        case 'ft': return value * 0.0001
    }
}

// NOTE: these conversion values are just placeholders, they are not accurate.

// Creating the function that calculates the gravitational force.
function gravForce (arr_value, arr_unit) { //the function takes in two parameters: array with the values, array with the units.
    const [m1, m2, dist] = arr_value.map((value, i) => convert(value, arr_unit[i]))  //Assigning the values of the new array to three constants: m1, m2 and distance
    return (g * m1 * m2)/(dist ** 2) + ' N'    //Calculating the gravitational force with the formula.
}
    
console.log(gravForce([20, 30, 40], ['g', 'kg', 'cm']))
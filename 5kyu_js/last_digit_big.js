/* 

    Define a function that takes in two non-negative integers 'a' and 'b'
    and returns the last decimal digit of a^b. Note that 'a' and 'b' may be
    very large!

    For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The 
    Also please take 0^0 to be 1.

    You may assume that the input will always be valid.

*/

function lastDigit(n, m) {  
    if (m == 0n){
        return 1n;
    }

    // Handle when the base ends in 0, 1, 5, or 6
    if (n % 10n === 0n) return 0n;
    if (n % 10n === 1n) return 1n;
    if (n % 10n === 5n) return 5n;
    if (n % 10n === 6n) return 6n;

    // Handle large m with the modular cycle trick
    const lastDigitOfN = n % 10n;  // Get the last digit of the base
    const cycle = [lastDigitOfN];  // Initialize the cycle
    
    let next = (lastDigitOfN * lastDigitOfN) % 10n; 
    while (!cycle.includes(next)) {
        cycle.push(next);
        next = (next * lastDigitOfN) % 10n;
    }
    
    // Calculate the position in the cycle (using m % cycle.length)
    const cycleIndex = Number((m - 1n) % BigInt(cycle.length));  
    
    return cycle[cycleIndex];
}

console.log(lastDigit(0n, 0n))            // returns 1
console.log(lastDigit(4n, 1n))            // returns 4n
console.log(lastDigit(4n, 2n))            // returns 6n
console.log(lastDigit(9n, 7n))            // returns 9n  
console.log(lastDigit(10n, 17294823523958982847n))  // returns 0n


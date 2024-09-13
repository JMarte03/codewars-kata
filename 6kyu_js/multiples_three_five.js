// PREP
// I'll get a max number
// I have to find all the multiples of 3 or 5 that go below that max number
// I have to sum those numbers

// Max => 10
// n (number < 10)
// If n multiple of 5 or 3 => store the number somewhere
// When I get all the possible numbers, I sum them

/* 

    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

    Additionally, if the number is negative, return 0.

    Note: If the number is a multiple of both 3 and 5, only count it once.

*/


function solution(number) {
  nums = [];
  for (let i = 0; i < number; i++) {
    if (i % 5 == 0 || i % 3 == 0) {
      nums.push(i);
    }
  }
  return nums.reduce((acc, value) => (acc += value), 0);
}

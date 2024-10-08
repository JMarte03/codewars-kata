// PREP
// returns true as long as:
//  the array's length == 10
//  the steps amount is balanced => north === south and east === west

function isValidWalk(walk) {
  const north = walk.filter((item) => {
    return item === "n";
  }).length;
  const south = walk.filter((item) => {
    return item === "s";
  }).length;
  const east = walk.filter((item) => {
    return item === "e";
  }).length;
  const west = walk.filter((item) => {
    return item === "w";
  }).length;

  return walk.length === 10 && north === south && east === west;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // Should return true
console.log(isValidWalk(["n", "s", "n", "s", "s", "s", "n", "s", "n", "s"])); // Should return false

/* 

    The objective of Duck, duck, goose is to walk in a circle, tapping on each 
    player's head until one is chosen.

    Task:

    Given an array of Player objects and a position (first position is 1), 
    return the name of the chosen Player.name is a property of Player objects, 
    e.g Player.name

*/

duckDuckGoose = (players, goose) => players[ (goose - 1) % players.length]
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 1)) // should return 'a'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 5)) // should return 'a'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 4)) // should return 'd'
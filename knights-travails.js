function knightMoves(startCoord, endCoord) {
    const directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const queue = [[startCoord, [startCoord], 0]]; // [[current position, path, number of moves], [current,path,moves],...]
    const visited = new Set(); // stores visited squares, only allows unique values
    visited.add(startCoord.toString); // string to allow comparisons to check for duplicates

    while (queue.length) { // loop until queue empty (all moves used and still not at endCoord)
        // shift() returns first element of queue which is an array with current, its path, and number of moves
        const [current, path, numMoves] = queue.shift();
        const x = current[0];
        const y = current[1];
        // check if arrived at endCoord
        if (x === endCoord[0] && y === endCoord[1]) {
            console.log("You made it in " + numMoves + " moves!  Here's your path:");
            for (const square of path) {
                console.log(square);
            };
            return;
        }

        // check all possible neighbours, repeat until target is found
        directions.forEach(([dx, dy]) => {
            const possibleNext = [x + dx, y + dy];

            // if square has not been visited, then add it
            // square has to be between 0 and 7
            if (!visited.has(possibleNext.toString()) && possibleNext.every(coord => coord >= 0 && coord < 8)) {
                visited.add(possibleNext.toString()); // ensure the check and the add are both the same (strings in this case)
                // push another array (next square, path thus far with next square)
                queue.push([possibleNext, [...path, possibleNext], numMoves + 1]);
            }
        });
    }

    // no possible paths
    console.log("No possible paths found");
}

const startCoord = [3, 3];
const endCoord = [4, 3];
knightMoves(startCoord, endCoord);
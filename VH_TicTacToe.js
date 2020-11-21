// Given a 3x3 matrix of a completed tic-tac-toe game, 
// create a function that returns whether the game 
// is a win for "X", "O", or a "Draw", where "X" and "O" 
// represent themselves on the matrix, and "E" represents an empty spot.

var calculateWinner = ticTacToe => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
      const newticTacToe = [...ticTacToe[0], 
                            ...ticTacToe[1], 
                            ...ticTacToe[2]];
    //console.log(newticTacToe);

    // Change "E" to null
    newticTacToe.forEach(function(item, i) { if (item == "E") newticTacToe[i] = null; });
    //console.log(newticTacToe);

    for (let i = 0; i < lines.length; i++) {
        //console.log(lines[i]);
        const [a, b, c] = lines[i];
        // console.log([a, b, c]);
        // console.log(i, newticTacToe[a]);
        // console.log(i, newticTacToe[b]);  
        // console.log(i, newticTacToe[c]);      
        // console.log(i, (newticTacToe[a] === newticTacToe[b]));
        // console.log(i, (newticTacToe[a] === newticTacToe[c]));      
      if (newticTacToe[a] && 
         (newticTacToe[a] === newticTacToe[b]) && 
         (newticTacToe[a] === newticTacToe[c])) {
        return newticTacToe[a]; // winner
      }
    }
    return null; // draw
}
ticTacToe =
  [[["O", "O", "E"],
    ["E", "X", "O"],
    ["X", "X", "X"]], // "X"

   [["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]], // "X"

   [["O", "O", "O"],
    ["O", "X", "X"],
    ["E", "X", "X"]], // "O"

   [["O", "X", "X"],
    ["O", "O", "O"],
    ["E", "X", "X"]], // "O"

   [["X", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]], // null

   [["O", "X", "X"],
    ["E", "X", "X"],   
    ["O", "O", "O"]], // "O"
     
   [["E", "O", "X"],
    ["O", "E", "X"],
    ["O", "E", "X"]], // "X"

   [["X", "O", "E"],
    ["X", "O", "E"],
    ["E", "O", "X"]], // "O"

   [["X", "X", "O"],
    ["X", "O", "O"],
    ["X", "O", "X"]], // "X"

   [["X", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]]];  // null

// let result, i;
// for (i=0; i < ticTacToe.length; i++) {
//   result = calculateWinner(ticTacToe[i]);
//   console.log(ticTacToe[i]);
//   console.log(result == null ? "Draw" : '"'+ result +'" wins');
// }

module.exports = calculateWinner;
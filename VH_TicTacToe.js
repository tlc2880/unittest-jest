// Name: Tommy Cao
// Date: 6/9/20
// Description: Implementation of winner calculation of TicTacToe.
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

    // Change "E" to null
    newticTacToe.forEach(function(item, i) { if (item == "E") newticTacToe[i] = null; });

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];    
      if (newticTacToe[a] && 
         (newticTacToe[a] === newticTacToe[b]) && 
         (newticTacToe[a] === newticTacToe[c])) {
        return newticTacToe[a]; // winner
      }
    }
    return null; // draw
}

// ticTacToe =
//   [[["O", "O", "E"],
//     ["E", "X", "O"],
//     ["X", "X", "X"]], // Winner: "X"

//    [["X", "O", "X"],
//     ["O", "X", "O"],
//     ["O", "X", "X"]], // Winner: "X"

//    [["O", "O", "O"],
//     ["O", "X", "X"],
//     ["E", "X", "X"]], // Winner: "O"

//    [["O", "X", "X"],
//     ["O", "O", "O"],
//     ["E", "X", "X"]], // Winner: "O"

//    [["X", "X", "O"],
//     ["O", "O", "X"],
//     ["X", "X", "O"]], // Winner: null (draw)

//    [["O", "X", "X"],
//     ["E", "X", "X"],   
//     ["O", "O", "O"]], // Winner: "O"
     
//    [["E", "O", "X"],
//     ["O", "E", "X"],
//     ["O", "E", "X"]], // Winner: "X"

//    [["X", "O", "E"],
//     ["X", "O", "E"],
//     ["E", "O", "X"]], // Winner: "O"

//    [["X", "X", "O"],
//     ["X", "O", "O"],
//     ["X", "O", "X"]], // Winner: "X"

//    [["X", "X", "O"],
//     ["O", "O", "X"],
//     ["X", "X", "O"]]]; // Winner: null (draw)

// let result, i;
// for (i=0; i < ticTacToe.length; i++) {
//   result = calculateWinner(ticTacToe[i]);
//   console.log(ticTacToe[i]);
//   console.log(result == null ? "Draw" : '"'+ result +'" wins');
// }

module.exports = calculateWinner;
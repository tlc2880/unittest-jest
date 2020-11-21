const calculateWinner = require('./VH_TicTacToe');

let inputArray;

inStrArray =
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

inStrArrayResults = [
   "X",
   "X",
   "O",
   "X", // This should be "O"
   null,
   "O",
   "X",
   "O",
   "X",
   null
];   

test('calculateWinner function exists', () => {
    expect(calculateWinner(inStrArray[0])).toBeDefined();
  });

for (let i=0; i<inStrArray.length; i++){
    test('Find TicTacToe Winner', () => {
        inputArray = calculateWinner(inStrArray[i]);
        expect(inputArray).toEqual(inStrArrayResults[i]);
    });
}
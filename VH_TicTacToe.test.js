// Name: Tommy Cao
// Date: 8/12/20
// Description: This is the automated Jest unit test of the VH_TicTacToe.js function.

const calculateWinner = require('./VH_TicTacToe');

let result;

inStrArray = [
     [["O", "O", "E"], 
      ["E", "X", "O"], 
      ["X", "X", "X"]], // Winner: 'X'

     [["O", "O", "E"], 
      ["X", "X", "X"],     
      ["E", "X", "O"]], // Winner: 'X' 

     [["X", "X", "X"],  
      ["O", "O", "E"], 
      ["E", "X", "O"]], // Winner: 'X'

     [["X", "O", "X"], 
      ["O", "X", "O"], 
      ["O", "X", "X"]], // Winner: 'X'
  
     [["O", "O", "O"], 
      ["O", "X", "X"], 
      ["E", "X", "X"]], // Winner: 'O'
  
     [["O", "X", "X"], 
      ["O", "O", "O"], 
      ["E", "X", "X"]], // Winner: 'O'
  
     [["X", "X", "O"], 
      ["O", "O", "X"], 
      ["X", "X", "O"]], // Winner: null (draw)
  
     [["O", "X", "X"], 
      ["E", "X", "X"], 
      ["O", "O", "O"]], // Winner: 'O'
       
     [["E", "O", "X"], 
      ["O", "E", "X"], 
      ["O", "E", "X"]], // Winner: 'X'

     [["E", "X", "O"], 
      ["O", "X", "E"],
      ["O", "X", "E"]], // Winner: 'X'

     [["X", "E", "O"], 
      ["X", "O", "E"], 
      ["X", "O", "E"]], // Winner: 'X'      

     [["X", "O", "E"], 
      ["X", "O", "E"], 
      ["E", "O", "X"]], // Winner: 'O'
  
     [["X", "X", "O"], 
      ["X", "O", "O"], 
      ["X", "O", "X"]], // Winner: 'X'
  
     [["X", "X", "O"], 
      ["O", "O", "X"], 
      ["X", "X", "O"]] // Winner: null (draw)
];   

var assertArrayPass = [
    "X",
    "X",
    "X",
    "X",    
    "O",
    "O",
    null,
    "O",
    "X",
    "X",
    "X",        
    "O",
    "X",
    null
];

var assertArrayFail = [
    "O",  
    null,
    "O",
    "O",
    "X",
    null,
    "O",
    "X",
    "O",
    null,
    "O",
    "X",
    "O",
    "O"
];

test('calculateWinner function exists', () => {
    expect(calculateWinner(inStrArray[0])).toBeDefined();
  });

for (let i=0; i < inStrArray.length; i++) {
    console.log ('Passed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ assertArrayPass[i])
    test('TicTacToe calculate winner passed:', () => {
        result = calculateWinner(inStrArray[i]);
        expect(result).toEqual(assertArrayPass[i]);
    });

    console.log ('Failed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ assertArrayFail[i])
    test('TicTacToe calculate winner failed:', () => {
        result = calculateWinner(inStrArray[i]);
        expect(result).not.toEqual(assertArrayFail[i]);
    });    
}
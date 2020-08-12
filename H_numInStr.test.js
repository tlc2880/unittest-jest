// Name: Tommy Cao
// Date: 8/12/20
// Description: This is the automated Jest unit test of the H_numInStr.js function.

const numInStr = require('./H_numInStr');
let result = [];

var inStrArray = [
    ["1a", "a", "2b", "b"],             // ["1a", "2b"]
    ["abc", "abc18-7"],                 // ["abc18-7"]
    ["abc", "ab10c", "34bc", "bcd"],    // ["ab10c", "34bc"]
    ["this is a test", "test5"],        // ["test5"]
    ["this ,s a testo", "testO"],       // []
    ["lOlO", "10", "James", "Jerry"],   // ["10"]
    ["Jeff08", "L65am", "Tr1970ang"]    // ["Jeff08", "L65am", "Tr1970ang"]
];

var assertArrayPass = [
    ["1a", "2b"],
    ["abc18-7"],
    ["ab10c", "34bc"],
    ["test5"],
    [],
    ["10"],
    ["Jeff08", "L65am", "Tr1970ang"]
];

var assertArrayFail = [
    ["1a", "b2"],
    ["abc18 7"],
    ["ab10c", "34bc", '2'],
    ["test55"],
    [1],
    ["100"],
    ["Jeff80", "L65am", "Tr1970ang"]
];

test('numInStr function exists', () => {
    expect(numInStr(["1a", "a", "2b", "b"])).toBeDefined();
  });

for (let i=0; i < inStrArray.length; i++) {
    console.log ('Passed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ assertArrayPass[i])
    test('Number in string algorithm passed:', () => {
        result = numInStr(inStrArray[i]);
        expect(result).toEqual(assertArrayPass[i]);
    });

    console.log ('Failed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ assertArrayFail[i])
    test('Number in string algorithm failed:', () => {
        result = numInStr(inStrArray[i]);
        expect(result).not.toEqual(assertArrayFail[i]);
    });
}
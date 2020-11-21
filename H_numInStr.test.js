const numInStr = require('./H_numInStr');

var inStrArray = [
    ["1a", "a", "2b", "b"],             // ["1a", "2b"]
    ["abc", "abc18-7"],                 // ["abc18-7"]
    ["abc", "ab10c", "34bc", "bcd"],    // ["ab10c", "34bc"]
    ["this is a test", "test5"],        // ["test5"]
    ["this ,s a testo", "testO"],       // []
    ["lOlO", "10", "James", "Jerry"],   // ["10"]
    ["Jeff08", "L65am", "Tr1970ang"]    // ["Jeff08", "L65am", "Tr1970ang"]
];

var inStrArrayResults = [
    ["1a", "2b"],
    ["abc18-7"],
    ["ab10c", "34bc"],
    ["test55"], // Failed. It should be ["test5"]
    [],
    ["10"],
    ["Jeff08", "L65am", "Tr1970ang"]
];

var inputArray;

test('numInStr function exists', () => {
    expect(numInStr(inStrArray[0])).toBeDefined();
  });

for (let i=0; i<inStrArray.length; i++){
    test('Number in String Array', () => {
        inputArray = numInStr(inStrArray[i]);
        expect(inputArray).toEqual(inStrArrayResults[i]);
    });
}
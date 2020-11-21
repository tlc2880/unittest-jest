// Returns an array with only the strings that have numbers in them. 
// If there are no strings containing numbers, return an empty array.

var numInStr = inStrArray => {
    var patt1 = new RegExp("[0-9]");
    var result, outStrArray = [];
    for ( var i=0; i < inStrArray.length; i++ ) {
        //console.log(inStrArray[i]);
        //result = inStrArray[i].match(patt1);
        //console.log(result);
        // if (inStrArray[i].match(/[0-9]/g)) { // same as below  
        if (inStrArray[i].match(patt1)) {                    
            outStrArray.push(inStrArray[i]); // add number string to array
        }
    }
    return outStrArray;
} 

var inStrArray = [
    ["1a", "a", "2b", "b"],             // ["1a", "2b"]
    ["abc", "abc18-7"],                 // ["abc18-7"]
    ["abc", "ab10c", "34bc", "bcd"],    // ["ab10c", "34bc"]
    ["this is a test", "test5"],        // ["test5"]
    ["this ,s a testo", "testO"],       // []
    ["lOlO", "10", "James", "Jerry"],   // ["10"]
    ["Jeff08", "L65am", "Tr1970ang"]    // ["Jeff08", "L65am", "Tr1970ang"]
];

// for (let i=0; i < inStrArray.length; i++) {
//     console.log(numInStr(inStrArray[i]));
// }

module.exports = numInStr;
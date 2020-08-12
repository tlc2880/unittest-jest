// Name: Tommy Cao
// Date: 6/9/20
// Description: 
// Given an array of strings and an original string, 
// write a function to output an array of boolean values – 
// true if the word can be formed from the original word by 
// swapping two letters only once and false otherwise.

var validateSwaps = inStrArray => {
    let outBoolArray = [];
    let strArray= inStrArray[0]; // Array of string
    let orgStr = inStrArray[1]; // Original string
    let orgStrLen = orgStr.length;
    let i, j, k, str1, tempChar;

    for ( i=0; i < strArray.length; i++ ) {
        outBoolArray[i] = false; // if match is not found, set to false          
        for ( j=0; j < orgStrLen-1; j++) {
            for ( k=0; k < orgStrLen-1-j; k++) {
                str1 = strArray[i].split(''); // split characters

                // swap characters
                tempChar = str1[k];
                str1[k] = str1[j+k+1];
                str1[j+k+1] = tempChar;

                // join characters
                str1 = str1.join('');

                if (!orgStr.localeCompare(str1)) {
                    outBoolArray[i] = true; // match found
                    j = orgStrLen - 1; // exit j loop
                    break; // exit k loop
                }
            }
        }
   }
    return outBoolArray;     
} 

// inStrMainArray = [
//     [["EBCDA", "BACDE", "AECDB", "AECDB", "BCDEA", "ACBED"], "ABCDE"],// ➞ [true, true, true, true, false, false]
//     [["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"],                  // ➞ [true, true, false, false]
//     [["32145", "12354", "15342", "12543"], "12345"],                  // ➞ [true, true, true, true]
//     [["9786", "9788", "97865", "7689"], "9768"],                      // [true, false, false, false]
//     [["lveo","evol","vole","loev","olve","lvoe","eovl"], "love"],     // [false, false, true, true, true, true, true]
//     [["ajvascript","javascritp","jaavscript","vtjascripa"], "javascript"] //[true, true, true, false]
// ];

// for (i=0; i < inStrMainArray.length; i++) {
//     console.log(validateSwaps(inStrMainArray[i]));
// }

module.exports = validateSwaps;
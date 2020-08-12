// Name: Tommy Cao
// Date: 8/12/20
// Description: This is the automated Jest unit test of the VH_ValidateSwaps.js function.

const validateSwaps = require('./VH_ValidateSwaps');

let result;

inStrArray = [
    [["EBCDA", "BACDE", "AECDB", "AECDB", "BCDEA", "ACBED"], "ABCDE"],// ➞ [true, true, true, true, false, false]
    [["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"],                  // ➞ [true, true, false, false]
    [["32145", "12354", "15342", "12543"], "12345"],                  // ➞ [true, true, true, true]
    [["9786", "9788", "97865", "7689"], "9768"],                      // [true, false, false, false]
    [["lveo","evol","vole","loev","olve","lvoe","eovl"], "love"],     // [false, false, true, true, true, true, true]
    [["ajvascript","javascritp","jaavscript","vtjascripa"], "javascript"] //[true, true, true, false]
];

assertStrArrayPass = [
    [true, true, true, true, false, false],
    [true, true, false, false],
    [true, true, true, true],
    [true, false, false, false],
    [false, false, true, true, true, true, true],
    [true, true, true, false]
];

assertStrArrayFail = [
    [true, true, true, true, false, true],
    [true, true, false, false, true],
    [true, true, true],
    [false, false, false, false],
    [],
    [null]
];

test('validateSwaps function exists', () => {
    expect(validateSwaps(inStrArray[0])).toBeDefined();
});
  
for (let i=0; i < inStrArray.length; i++) {
    test('ValidateSwaps unit test passed:', () => {
    console.log ('Passed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ assertStrArrayPass[i])
        result = validateSwaps(inStrArray[i]);
        expect(result).toEqual(assertStrArrayPass[i]);
    });

    test('ValidateSwaps unit test failed:', () => {
    console.log ('Failed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ assertStrArrayFail[i])
        result = validateSwaps(inStrArray[i]);
        expect(result).not.toEqual(assertStrArrayFail[i]);
    });    
}
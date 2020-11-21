const validateSwaps = require('./VH_ValidateSwaps');

let inputArray;

inStrArray = [
    [["EBCDA", "BACDE", "AECDB", "AECDB", "BCDEA", "ACBED"], "ABCDE"],// ➞ [true, true, true, true, false, false]
    [["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"],                  // ➞ [true, true, false, false]
    [["32145", "12354", "15342", "12543"], "12345"],                  // ➞ [true, true, true, true]
    [["9786", "9788", "97865", "7689"], "9768"],                      // [true, false, false, false]
    [["lveo","evol","vole","loev","olve","lvoe","eovl"], "love"],     // [false, false, true, true, true, true, true]
    [["ajvascript","javascritp","jaavscript","vtjascripa"], "javascript"] //[true, true, true, false]
];

inStrArrayResults = [
    [true, true, true, true, false, false],
    [true, true, false, false],
    [true, true, true, false], // Forth item should be true.
    [true, false, false, false],
    [false, false, true, true, true, true, true],
    [true, true, true, false]
];

test('validateSwaps function exists', () => {
    expect(validateSwaps(inStrArray[0])).toBeDefined();
});

for (let i=0; i<inStrArray.length; i++){
    test('Validate Swaps', () => {
        inputArray = validateSwaps(inStrArray[i]);
        expect(inputArray).toEqual(inStrArrayResults[i]);
    });
}
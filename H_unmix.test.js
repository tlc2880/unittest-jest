const unmix = require('./H_unmix');

var inStrArray = [
    "123456",                               // ➞ "214365"
    "hTsii  s aimex dpus rtni.g",           // ➞ "This is a mixed up string."
    "badce",                                // ➞ "abcde"
    "oTmm y.HC oa",                         // ➞ "Tommy H. Cao"
    " Iolevj vasarcpi trpgoarmmnig",        // I love javascript programming
    "lPaeesh le pemu mnxit ehess rtnisg!",  // Please help me unmix these strings!
    "hTyec la lemC bunaP te.e",             // They call me Cuban Pete.
    "oCvnre thtsis rtni.g"                  // Convert this string.
];

var inStrArrayResults = [
    "214365",
    "This is a mixed up string.",
    "abcde",
    "Tommy L. Cao", // Error here.  It should be "Tommy H. Cao"
    "I love javascript programming",
    "Please help me unmix these strings!",
    "They call me Cuban Pete.",
    "Convert this string."
];

var inputArray;

test('Unmix function exists', () => {
    expect(unmix(inStrArray[0])).toBeDefined();
});

for (let i=0; i<inStrArray.length; i++){
    test('Unmix String', () => {
        inputArray = unmix(inStrArray[i]);
        expect(inputArray).toMatch(inStrArrayResults[i]);
    });
}
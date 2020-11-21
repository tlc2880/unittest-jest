const overlap = require('./overlap');

var inStrArray = [
    ["abcdfksdh", "a"],                 // a
    ["abcdfksdh", "axyz"],              // a
    ["abcdfksdh", "bxyz"],              // b
    ["abcdfksdh", "mnopqrtuvwxyzh"],    // h

    ["abcdfksdh", "abxyz"],             // ab
    ["abcdfksdh", "wxabyz"],            // ab
    ["abcdfksdh", "xyzab"],             // ab
    ["xyzab", "abcdfksdh"],             // ab

    ["abcdfksdh", "mnopqrtuvwxyzabc"],  // abc
    ["abcdfksdh", "mnopqabcrtuvwxyz"],  // abc
    ["abcdfksdh", "mnopqabcrtuvwxyzab"],// abc
    ["mnopqabcrtuvwxyzab", "abcdfksdh"],// abc

    ["I love JavaScript", "mnlovexyzab"], // love
    ["I love JavaScript", "love"],        // love
    ["mnlovexyzab", "I love JavaScript"], // love

    ["Web pages are not the only place where JavaScript is used", "Many desktop and server programs use JavaScript"], // " JavaScript"
    ["abcdfksdh", "mnopqrtuvwxyz"],       // null
    ["abcdfksdh", "dsjkfabcd"],           // abcd
];

var inStrArrayResults = [
    'a',
    'a',
    'b',
    'h',

    'ab',
    'ab',
    'ab',
    'ab',

    'abc',
    'abcd',
    'abc',
    'abc',

    'love',
    'love',
    'love',

    'e JavaScript',
    null, // It could not check a null.
    'abcd'
];

var inputArray;

test('Overlap function exists', () => {
    expect(overlap(inStrArray[0])).toBeDefined();
});

for (let i=0; i<inStrArray.length; i++){
    test('Overlap String', () => {
        inputArray = overlap(inStrArray[i]);
        expect(inputArray).toMatch(inStrArrayResults[i]);
    });
}
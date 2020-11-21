const reverseOdd = require('./H_reverseOdd');

var inStrArray = [
    "Make sure uoy only esrever sdrow of ddo length", // => Make sure you only reverse words of odd length
    "Bananas", // => sananaB
    "One two three four", // => enO owt eerht four
    "I kniht  javascript gnimmargorp is nuf", // I think  javascript programming is fun
    "nraeL eht MERN kcats by building  an  noitacilppa", // Learn the MERN stack by building  an  application
    "m'I eht king of eht abmuR beat" // I'm the king of the Rumba beat
 ];

 var inStrArrayResults = [
    "Make sure you only reverse words of odd length",
    "sananaBB",
    "enO owt eerht four",
    "I think  javascript programming is fun",
    "Learn the MERN stack by building  an  application",
    "I'm the king of the Rumba beat"
 ];

var inputArray;

test('reverseOdd function exists', () => {
    expect(reverseOdd(inStrArray[0])).toBeDefined();
  });

for (let i=0; i<inStrArray.length; i++){
    test('Reverse Odd Word Number String', () => {
        inputArray = reverseOdd(inStrArray[i]);
        expect(inputArray).toEqual(inStrArrayResults[i]);
    });
}

// test('Censor String Array', () => {
//     inputArray = reverseOdd("Make sure uoy only esrever sdrow of ddo length");
//     expect(inputArray).toEqual("Make sure you only reverse words of odd length");
// });

// test('Censor String Array', () => {
//     inputArray = reverseOdd("Bananas");
//     expect(inputArray).toEqual("sananaB");
// });

// test('Censor String Array', () => {
//     inputArray = reverseOdd("One two three four");
//     expect(inputArray).toEqual("enO owt eerht four");
// });

// test('Censor String Array', () => {
//     inputArray = reverseOdd("I kniht  javascript gnimmargorp is nuf");
//     expect(inputArray).toEqual("I think  javascript programming is fun");
// });

// test('Censor String Array', () => {
//     inputArray = reverseOdd("nraeL eht MERN kcats by building  an  noitacilppa");
//     expect(inputArray).toEqual("Learn the MERN stack by building  an  application");
// });

// test('Censor String Array', () => {
//     inputArray = reverseOdd("m'I eht king of eht abmuR beat");
//     expect(inputArray).toEqual("I'm the king of the Rumba beat");
// });

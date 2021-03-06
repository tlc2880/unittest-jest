// Given a string, reverse all the words which have odd length. 
// The even length words are not changed.

var reverseOdd = inStrArray => {
   var wordStr;
   var inStrArray = inStrArray.split(' ');

   for (var i=0; i < inStrArray.length; i++) {
        wordStr = inStrArray[i];
        //console.log(wordStr, wordStr.length);
        if (wordStr.length % 2 !== 0) { // find odd length
           wordStr = wordStr.split('').reverse().join(''); // Note that reverse() will change original array
           //console.log(i, wordStr);
           inStrArray[i] = wordStr; // insert new word back into array
        }
   }
//    inStrArray.join(' '); // This does not work because join() does not change the orginal array.
//    return inStrArray;    // inStrArray should reference a different location such as inStrArray = inStrArray.join(' ')
   return inStrArray.join(' ');   
}

var inStrArray = [
   "Make sure uoy only esrever sdrow of ddo length", // => Make sure you only reverse words of odd length
   "Bananas", // => sananaB
   "One two three four", // => enO owt eerht four
   "I kniht  javascript gnimmargorp is nuf", // I think  javascript programming is fun
   "nraeL eht MERN kcats by building  an  noitacilppa", // Learn the MERN stack by building  an  application
   "m'I eht king of eht abmuR beat" // I'm the king of the Rumba beat
];

// for (let i=0; i < inStrArray.length; i++) {
//    console.log(reverseOdd(inStrArray[i]));
// }

module.exports = reverseOdd;
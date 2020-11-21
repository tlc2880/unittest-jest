var overlap = inStrArray => {
    let string1 = inStrArray[0];
    let string2 = inStrArray[1];

	var comparsions = []; //2D array for the char comparsions ...
	var maxSubStrLength = 0;
	var lastMaxSubStrIndex = -1, i, j, char1, char2, startIndex;

	for (i = 0; i < string1.length; ++i) {
		comparsions[i] = new Array();

		for (j = 0; j < string2.length; ++j) {
			char1 = string1.charAt(i);
			char2 = string2.charAt(j);
            // console.log(char1, char2);
			if (char1 === char2) {
                // console.log("char1 === char2");
				if (i > 0 && j > 0) {
					comparsions[i][j] = comparsions[i - 1][j - 1] + 1;
				} else {
					comparsions[i][j] = 1;
				}
			} else {
                // console.log("char1 !== char2");
				comparsions[i][j] = 0;
			}

			if (comparsions[i][j] > maxSubStrLength) {
                // console.log("Max string found");
				maxSubStrLength = comparsions[i][j];
				lastMaxSubStrIndex = i;
			}
		}
	}

	if (maxSubStrLength > 0) {
		startIndex = lastMaxSubStrIndex - maxSubStrLength + 1;

		return string1.substr(startIndex, maxSubStrLength);
	}

	return null;
} 

inStrArray = [
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

    ["Web pages are not the only place where JavaScript is used", "Many desktop and server programs use JavaScript"], // "e JavaScript"
    ["abcdfksdh", "mnopqrtuvwxyz"],       // null
    ["abcdfksdh", "dsjkfabcd"],           // abcd
];

// for (i=0; i < inStrArray.length; i++) {
//     console.log(overlap(inStrArray[i]));
// }

module.exports = overlap;
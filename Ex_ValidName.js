// Name: Tommy Cao
// Date: 6/9/20

// For this exercise, keep in mind the following definitions:

// 1. A term is either an initials or word.
// 2. initials = 1 character
// 3. words = 2+ characters (no dots allowed)

// Rules
// 1. Both initials and words must be capitalized.
// 2. Initials must end with a dot.
// 3. A name must be either 2 or 3 terms long. 
// 4. If the name is 3 words long, you can expand the first and middle name or expand the first name only. 
// You cannot keep the first name as an initial and expand the middle name only.
// 5. The last name must be a word (not an initial).
// Your task is to write a function that determines whether a name is valid or not. 
// Return true if the name is valid, false otherwise.

var validName = nameString => {
    let strArray = nameString.split(' ');
    let nameStrArray = strArray.length;

    // console.log(nameString);
    // console.log(strArray);
    // console.log("Length of name:", nameStrArray);

    // Check for single name error
    if (nameStrArray < 2) {
        //console.log("Single name is not allowed");
        return false; // single name is not allowed
    }

    for (let i=0; i < nameStrArray; i++) {
        // console.log(i, strArray[i], );
        if (strArray[i][0] !== strArray[i][0].toUpperCase()) { // look at capitalization of first letter of word
            //console.log("Incorrect capitalization");
            return false;  // incorrect capitalization
        }
        else if (strArray[i].length === 1) { // missing period
            //console.log("Missing period");
            return false;
        }
        else if ((strArray[i].length > 2) && // check if word have period
                  strArray[i].endsWith('.')) {
            //console.log("Word can not have period");
            return false;
        }
    }
    
    // Last name can not be initial
    if (strArray[nameStrArray-1].endsWith('.')) {
        //console.log("Last name can not be initial");
        return false;
    }

    // Expansion of middle name with first name initialized error
    if ((nameStrArray > 2) &&  // check if there is a middle name
        (strArray[0][1] === '.') && // 2nd letter of the first name
        (strArray[1].length > 1) && // check if middlename is a word
        (strArray[1][1] !== '.')) { // check if middlename is not initial
        //console.log("Middle name expanded, while first name is still left as initial");
        return false;
    }

    return true; // it passes all, it's a good name
}

const nameArray = [
    "H. Wells", // true
    "Wells", // false
    "H. G. Wells", // true
    "Herbert george Wells", // false    
    "Herbert G. Wells", // true
    "h. Wells", // false    
    "Herbert George Wells", // true
    "H. wells", // false
    "He Ge Wells",  // true
    "h. g. Well", // false
    "He Ge We",  // true    
    "herbert G. Wells", // false
    "H. G. We",  // true 
    "H Wells", // false
    "He G. We",  // true 
    "H. G Wells", // false
    "Herbert George We", // true
    "H. G. W.", // false
    "Herbert G. We", // true
    "H. G. Wells.", // false
    "Herbert Ralph George Wells", // true
    "Herbert. George Wells", // false
    "Herbert R. G. Wells", // true
    "H. George Wells", // false
    "Herbert R. George Wells", // true
    "H. Ge Wells", //i=25; false

    "Tommy H. Cao", //i=26; true
    "T. Hu Cao", // false    
    "T. H. Cao", // true
    "Tommy H. Cao.", // false    
    "Tommy Huu Cao", // true
    "T H. Cao", // false
    "T. Cao", // true
    "Tommy Lam Huu C.", // false  
    "Tommy Lam Huu Cao", // true      
    "Tommy Lam. Huu Cao", // false    
    "Tommy L. H. Cao", // true
    "Tommy L H Cao", // false    
    "T. L. H. Cao", // true
    "T. Lam Huu Cao" // i=39; false
];

// Run program here.
// for (i=0; i < nameArray.length; i++) {
//     console.log(validName(nameArray[i]));
// }

module.exports = validName;
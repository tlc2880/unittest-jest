// Name: Tommy Cao
// Date: 6/9/20

const validName = require('./Ex_ValidName');

let inputArray;

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

test('validName function exists', () => {
    expect(validName("Wells")).toBeDefined();
  });


for (let i=0; i<40; i++) {
    test('validName test function for true or false', () => {
        inputArray = validName(nameArray[i].toString());
        if ((i % 2) === 0) { // even numbers are true
                expect(inputArray).toEqual(true);
        } 
        else { // odd numbers are false
                expect(inputArray).toEqual(false);
                //console.log(i, inputArray);
        }
    });
}


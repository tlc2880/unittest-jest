// Name: Tommy Cao
// Date: 8/12/20
// Description: This is the automated Jest unit test of the H_numInStr.js function.

const uncensor = require('./H_censor_strings');
let result = [];

var inStrArray = [
    ["Wh*r* d*d my v*w*ls g*?", "eeioeo"],  // => Where did my vowels go?
    ["abcd", ""],// => abcd
    ["*PP*RC*S*", "UEAE"], // => UPPERCASE
    ["* l*v* j*v*scr*pt pr*gr*mm*ng.", "Ioeaaioai"], // I love javascript programming.
    ["D*v*l*p*d f*ll st*ck v*c*t**n r*nt*l w*bs*t* f*r 6.5 y**rs", "eeoeuaaaioeaeieoea"], // Developed full stack vacation rental website for 6.5 years
    ["L**rn th* M*RN st*ck by b**ld*ng *n *pp.", "eaeEauiiaa"], // Learn the MERN stack by building an app.
    ["My n*m* *s T*mmy C**", "aeioao"] // My name is Tommy Cao
];

var assertArrayPass = [
    "Where did my vowels go?",
    "abcd",
    "UPPERCASE",
    "I love javascript programming.", 
    "Developed full stack vacation rental website for 6.5 years",
    "Learn the MERN stack by building an app.",
    "My name is Tommy Cao"
];

var assertArrayFail = [
    "Where did my vewols go?",
    "abcde",
    "UPPERCASEE",
    "I love javascript progrimmang.", 
    "Developed full stack vacation rental website for 6.5 yaers",
    "Learn the MERN  stack by building an app.",
    "My name is Tommy Coa"
];

test('Uncensor String function exists.', () => {
    expect(uncensor(inStrArray[3])).toBeDefined();
    });

for (let i=0; i < inStrArray.length; i++) {
    test('Uncensor function passed:', () => {
        console.log ('Passed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ assertArrayPass[i])
        result = uncensor(inStrArray[i]);
        expect(result).toEqual(assertArrayPass[i]);
    });

    test('Uncensor function failed:', () => {
        console.log ('Failed, '+i+', In: '+ inStrArray[i]+ '; Assert: '+ assertArrayFail[i])
        result = uncensor(inStrArray[i]);
        expect(result).not.toEqual(assertArrayFail[i]);
    });
}
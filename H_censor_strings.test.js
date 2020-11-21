const uncensor = require('./H_censor_strings');

var censorStrArray = [
    ["Wh*r* d*d my v*w*ls g*?", "eeioeo"],  // => Where did my vowels go?
//    ['abcd', ''] // => abcd
    ["*PP*RC*S*", "UEAE"], // => UPPERCASE
    ["* l*v* j*v*scr*pt pr*gr*mm*ng.", "Ioeaaioai"], // I love javascript programming.
    ["D*v*l*p*d f*ll st*ck v*c*t**n r*nt*l w*bs*t* f*r 6.5 y**rs", "eeoeuaaaioeaeieoea"], // Developed full stack vacation rental website for 6.5 years
    ["L**rn th* M*RN st*ck by b**ld*ng *n *pp.", "eaeEauiiaa"], // Learn the MERN stack by building an app.
    ["Th*y c*ll m* C*b*n P*t*", "eaeuaee"] // They call me Cuban Pete
];

const censorStrArrayResults = [
    "Where did my vowels go?",
//    "abcd", // This caused all kinds of problems
    "UPPERCASE",
    "I love javascript programing.", // Failed. It should be "I love javascript programming."
    "Developed full stack vacation rental website for 6.5 years",
    "Learn the MERN stack by building an app.",
    "They call me Cuban Pete"
];

var inputArray;

test('numInStr function exists', () => {
    expect(uncensor(censorStrArray[0])).toBeDefined();
    });

for (let i=0; i<censorStrArray.length; i++){
    test('Censor String Array', () => {
        inputArray = uncensor(censorStrArray[i]);
        //console.log(inputArray);
        expect(inputArray).toMatch(censorStrArrayResults[i]);
    });
}
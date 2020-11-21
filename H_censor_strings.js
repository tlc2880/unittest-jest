// Given a censored (C*ns*r*d Str*ngs) string and a string of the censored vowels, 
// return the original uncensored string.

const uncensor = inCensorStr => {
    var censorStr = inCensorStr[0]; // censored string
    var str = inCensorStr[1]; // censored vowels
    var n = 0;

    function setCharAt(str,index,chr) { // Replace character at particular index
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    for (var i=0; i < str.length; i++) {
        //console.log(censorStr[i]);
        n = censorStr.indexOf('*', n); // find '*' in string
        //console.log(n);
        censorStr = setCharAt(censorStr, n, str[i]);
        //console.log(censorStr);
    }

    //console.log(censorStr); // "Where did my vowels go?", "abcd", "UPPERCASE"
    return censorStr;
}

const censorStrArray = [
    ["Wh*r* d*d my v*w*ls g*?", "eeioeo"],  // => Where did my vowels go?
    ["abcd", ""], // => abcd // This worked fine.
    ["*PP*RC*S*", "UEAE"], // => UPPERCASE
    ["* l*v* j*v*scr*pt pr*gr*mm*ng.", "Ioeaaioai"], // I love javascript programming.
    ["D*v*l*p*d f*ll st*ck v*c*t**n r*nt*l w*bs*t* f*r 6.5 y**rs", "eeoeuaaaioeaeieoea"], // Developed full stack vacation rental website for 6.5 years
    ["L**rn th* M*RN st*ck by b**ld*ng *n *pp.", "eaeEauiiaa"], // Learn the MERN stack by building an app.
    ["Th*y c*ll m* C*b*n P*t*", "eaeuaee"] // They call me Cuban Pete
];

// for (let i=0; i < censorStrArray.length; i++) {
//     console.log(uncensor(censorStrArray[i]));
// }

module.exports = uncensor;

///////////////////////////////////// Replace character at particular index - 1
// This is easier to understand
// function rep() {
//     var str = 'Hello Tommy';
//     str = setCharAt(str, 4, 'a');
//     alert(str);
// }

// function setCharAt(str,index,chr) {
//     if(index > str.length-1) return str;
//    //console.log(str.substr(0,index));
//    //console.log(str.substr(index+1));
//     return str.substr(0,index) + chr + str.substr(index+1);
// }

// rep(); // Hella Tommy

/////////////////////////////////// Replace character at particular index - 2
// String.prototype.replaceAt = function(index, replacement) {
//     return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }

// var hello = "Hello Tommy";
// alert(hello.replaceAt(2, "!!")); // Should display He!!o Tommy
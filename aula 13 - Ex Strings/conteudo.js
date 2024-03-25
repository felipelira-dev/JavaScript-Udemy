// indice de caracteres 0123456789//
//let umaString = "Um \"texto\"";
let umaString = "O rato roeu a roupa do rei de roma.";
let doisString = "Um \\texto";

console.log(umaString);
console.log(doisString);

// chartAt
console.log(umaString.charAt(4));

// concat
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

// indexOf
console.log(umaString.indexOf('u', 3));

// lastindexOf
console.log(umaString.lastIndexOf('r', 5));

// replace
console.log(umaString.replace(/r/g, '#'));

// length
console.log(umaString.length);

// slice
console.log(umaString.slice(2, 6));
console.log(umaString.slice(- 5));
console.log(umaString.slice(- 5, -1));

// split
console.log(umaString.split(' '))

// toUpperCase
console.log(umaString.toUpperCase());

// toLowercase
console.log(umaString.toLowerCase());


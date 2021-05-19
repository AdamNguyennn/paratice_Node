   // Modules
// Common Js, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)
/***********************************/
const names = require('./2-names');
const dataNe = require('./3-alternative_flavor');
const sayHi = require('./1-callNames');
require('./4-mind_grenate');

console.log(names.someThing[0]);
console.log(names.someThing[1]);
console.log(sayHi);
// sayHii('Susan');
// sayHii(names.Na);
// sayHii(names.Pa);

// console.log(dataNe);

// console.log(dataNe.singlePerson.name);
// console.log(dataNe.singlePerson.age);
// console.log(dataNe.items[0]);
// console.log(dataNe.items[1]);
/***********************************/
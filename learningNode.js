    // GLOBAL - NO WINDOW !!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

/***********************************/

// setTimeout(() =>{
//     console.log("hello son of a b****");
// }, 3000); // after 3s differ than setInterval every times sette

// setInterval(() => {
//     console.log("dcmm");
// }, 500);

/***********************************/

// npm - global command, comes with node
// npm --version (npm --v)

// npm i 'packageNmae' local packages
// npm install -g 'packageName'
// npm init (install package step by step)
// npm init -y (install package json automatically)

/************************************/
const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);




// create the Path
const path = require('path');

console.log(path.sep);

// link to the folder of the folder containing test.txt
const filePath = path.join('/folderTest','folderTest2','test.txt');
console.log(filePath);

// link to test.txt
const base = path.basename(filePath);
console.log(base);

// concat current directory with link containing test.txt 
const absolute = path.resolve(__dirname,'folderTest','folderTest2','test.txt');
console.log(absolute);
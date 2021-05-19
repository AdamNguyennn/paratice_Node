const {readFileSync, writeFileSync} = require('fs');

const test = readFileSync('./folderTest/folderTest2/test.txt','utf8');
const first = readFileSync('./folderTest/folderTest2/first.txt','utf8');

writeFileSync(
    './folderTest/folderTest2/Na.txt',
    `Here is the Boss ne: ${test}, ${first}`,
    {flag: 'a'}
);

console.log('done');
console.log('next one');
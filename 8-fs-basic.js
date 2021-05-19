    
    // Read file and write File basic
// const {readFileSync, writeFileSync} = require('fs');

// const test = readFileSync('./folderTest/folderTest2/test.txt','utf8');
// const first = readFileSync('./folderTest/folderTest2/first.txt','utf8');

// writeFileSync(
//     './folderTest/folderTest2/SecondText.txt',
//     `Here is the something we do: ${test}, ${first}`,
//     // {flag: 'a'} // flag :'a' will over write SecondText everytimes run node
// );

// console.log(test, first);
    
/*************************************/

    // Read file and write file use callback()
// const {readFile, writeFile} = require('fs');

// readFile('./folderTest/folderTest2/test.txt','utf8', (err,result) => {
//     if(err) {
//         console.log(err);
//         return;
//     } 
//     const test = result;
//     readFile('./folderTest/folderTest2/first.txt','utf8', (err,result) => {
//     if(err) {
//         console.log(err);
//         return;
//     } const first = result;
//     writeFile('./folderTest/folderTest2/SecondTest.txt',
//     `Here is the something we do: ${test}, ${first}`,
//     {flag:'a'},
//     (err,result) => {
//     if(err) {
//         console.log(err);
//         return;
//     }    
//     console.log(result);
//     });
    
//     });

// });
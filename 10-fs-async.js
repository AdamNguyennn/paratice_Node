const {readFile, writeFile} = require('fs');

console.log("start");

readFile('./folderTest/folderTest2/test.txt','utf8', (err,result) => {
    if(err) {
        console.log(err);
        return;
    } 
    const test = result;
    readFile('./folderTest/folderTest2/first.txt','utf8', (err,result) => {
    if(err) {
        console.log(err);
        return;
    } const first = result;
    writeFile('./folderTest/folderTest2/SecondTest.txt',
    `Here is the something we do: ${test}, ${first}`,
    {flag:'a'},
    (err,result) => {
    if(err) {
        console.log(err);
        return;
    }    
    console.log('done the task');
    });
    
    });

});

console.log('starting the next one');
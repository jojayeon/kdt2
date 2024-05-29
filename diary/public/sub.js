const obj = require('./data.json');
const fs = require("fs");
const path = require("path");
module.exports = obj;
console.log(obj);
const obj1 = obj.title; 
console.log(obj1);
const obj2 = obj.date; 
console.log(obj2);
const obj3 = obj.content; 
console.log(obj3);
const DATA = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <div id="root">
      <h1>${obj1}</h1>
      <p>${obj2}</p>
      <p>${obj3}</p>
    </div>
  </body>
</html>
        `
//조건
fs.writeFile(path.join(__dirname, "index.html"),DATA, (err)=>{
    if(err){
    console.log(err);
  }


  // fs.appendFile 버튼 만들기 추가
  // - 기존에 있느 거에서 추가 
});
const fs = require("fs");
const path = require("path");





console.log(__dirname)
let dir1 = '/Users/Administrator/Desktop/kdt2/diary/html';
let dir2 = path.join(__dirname, "public")
console.log(dir1);
console.log(dir2);


//필요한 부분
let dir = path.join(__dirname, "html")
let dirfilele = fs.readdir(dir, (err, file) => {
  if(err){
    console.log(err);
  }
  return file.length + 1
});
console.log(dirfilele);

console.log(dir);
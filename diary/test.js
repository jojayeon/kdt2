const fs = require("fs");
const path = require("path");





console.log(__dirname)
let dir = '/Users/Administrator/Desktop/kdt2/diary/html';
let dir1 = path.join(__dirname, "html")
let dir2 = path.join(__dirname, "public")
console.log(dir);
console.log(dir1);
console.log(dir2);

let a = fs.readdir(dir1, (err, file) => {
  if(err){
    console.log(err);
  }
	console.log(file.length);
});
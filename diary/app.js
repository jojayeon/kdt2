const http = require("http");
const fs = require("fs");
const path = require("path");


let number = 0;


// 이거 사용해서 폴더 에서 파일 제목들 가져와서 사용하기 length로 하면 충분히 가능해보임


const server = http.createServer((req,res)=>{
  if(req.method === "GET"){
    //전부 메인 페이지 보이게 만드는 요소
    if(req.url === "/"){
      fs.readFile(path.join(__dirname, "main.html"), (err, data)=>{
        if(err){
          console.log("err~!~!~!~");
        }
        res.writeHead(200,{"content-type": "text/html; charset = utf-8"});
        res.end(data);
      });
    }
    if(req.url === "/main.html"){
      fs.readFile(path.join(__dirname, "main.html"), (err, data)=>{
        if(err){
          console.log("err~!~!~!~");
        }
        res.writeHead(200,{"content-type": "text/html; charset = utf-8"});
        res.end(data);
      });
    }
    //파일 위치 확인 해서 넣어주기
  //지금 부터는 서브 페이지 만들어지는 것 계속 들어가게
  for(let i = 1; i < 366; i++) {
    if(req.url === `/html/index${i}.html`){
      fs.readFile(path.join(__dirname, `html/index${i}.html`), (err, data)=>{
        if(err){
          console.log("err~!~!~!~");
        }
        res.writeHead(200,{"content-type": "text/html; charset = utf-8"});
        res.end(data);
      });
    }
  }
  //css파일도 출력되게 만들기 - css는 2개 이니까 무식하게 만들자
  if(req.url === "/main.css"){
    fs.readFile(path.join(__dirname, "main.css"), (err, data)=>{
      if(err){
        console.log("err~!~!~!~");
      }
      res.writeHead(200,{"content-type": "text/css; charset = utf-8"});
      res.end(data);
    });
  }
//서브 css 미리만들어둠 - 파일 위치만 확인
  if(req.url === "/public/sub.css"){
    fs.readFile(path.join(__dirname, "public/sub.css"), (err, data)=>{
      if(err){
        console.log("err~!~!~!~");
      }
      res.writeHead(200,{"content-type": "text/css; charset = utf-8"});
      res.end(data);
    });
  }  


  }else if(req.method === "POST"){
    if(req.url === "/submit"){
      //입력한 일기를 저장하는 파일을 보내도 메인 화면이 남아있게 추가
      let body = "";
      req.on("data", (check)=>{
        body += check.toString();
      });
      req.on("end",()=>{
        const parseData = new URLSearchParams(body);
        const title = parseData.get("title");
        const content = parseData.get("content")
        const date = parseData.get("date")

        const jsonData = {
          title: title,
          date: date,
          content: content,
        };
        
        const jsonDataString = JSON.stringify(jsonData, null, 2);
        fs.writeFile(path.join(__dirname, `json/data${number}.json`),jsonDataString, (err)=>{
          if(err){
            console.log(err);
          }
        });
        //html안에 link에 주석이랑 주소 바꾸기
        const DATA = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../public/sub.css">
  </head>
  <body>
    <div id="root">
      <div>
        <h1>${title}</h1>
        <p>${date}</p>
      </div>
      <div>
        <p>${content}</p>
      </div>
      <div>
        <a href=/html/index${number-1}.html>이전페이지</a>
        <a href="/main.html">홈</a>
        <a href=/html/index${number+1}.html>다음페이지</a>
      </div>
    </div>
  </body>
</html>
        `
        fs.writeFile(path.join(__dirname, `html/index${number}.html`),DATA, (err)=>{ //indexobj지우기
          if(err){
            console.log(err);
          }
        }); 
      })
      fs.readFile(path.join(__dirname, "main.html"), (err, data)=>{
        if(err){
          console.log("err~!~!~!~");
        }
        res.writeHead(200,{"content-type": "text/html; charset = utf-8"});
        res.end(data);
      });
      
    }
    number++;
  }
});
//로컬 서버 오픈
const PORT = 3000;
server.listen(3000, (err) =>{
  if(err){
    console(err);
  }
  console.log(`http://localhost:${PORT}`);
});
console.log(__dirname)
let dir = '/Users/Administrator/Desktop/kdt2/diary/html';
let dir1 = path.join(__dirname, "html")
console.log(dir);
console.log(dir1);
fs.readdir(dir, (err, file) => {
  if(err){
    console.log(err);
  }
	console.log(file);
  return file
});

const { appendFile } = require("fs");
const http = require("http");
const fs = require("fs");

// create a server
const myServer = http.createServer((req, res) => {
  console.log(req.headers);
  console.log("New req rec.");
  res.end("hello from server");
});

// create a http server that a contain a log file
// how this word first create a server myServer -> in log variable fetch the date from Date class
// then append the file and write date when ever server hit -> after that hit the req on the browser.
// so the main purpose of log is paste the entry in form of date when server hit and paste that entry in log.txt file
const myServer1 = http.createServer((req, res) => {
  // req,res are server handler to handle the server request and response.
  const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("Hey this side Harsh");
        break;
      default:
        res.end("404 Page not found");
    }
  });
});

// listen the server or run the server on specific port
myServer1.listen(8000, () => {
  console.log("Server started");
});

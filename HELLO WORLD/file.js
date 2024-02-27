const fs = require("fs");
// code some useful methods in file handling
fs.writeFileSync("./test.txt", "Hello world");

// below writeFile in used for async task
// fs.writeFile("./test.txt", "Hey this side Async Hello World", (err) => {});

// readFile
const result = fs.readFileSync("./contacts.txt", "utf-8"); // Sync used for synchronous task
console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

// append
fs.appendFileSync("./test.txt", `Hey How\n`);
fs.appendFileSync("./test.txt", `${Date.now()} Harsh\n`);

// copy the file
fs.cpSync("./test.txt", "./copyTest.txt");

// delete the file or unlink with your current project
fs.unlinkSync("./copyTest.txt");

const os = require("os");
console.log(os.cpus().length);

// at min in node js we have 4 thread means 4 core and max depend on your cpu machine core.

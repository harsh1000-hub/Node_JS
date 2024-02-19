const math = require("./math"); // here we import the module that is math.js

// you also destructure the module
// const {add,sub}=require("./math")
// console.log(add(2,3));  // directly call the function from math.js module
console.log("hello world");
console.log(math.add(2, 3));
console.log(math.sub(5, 3));

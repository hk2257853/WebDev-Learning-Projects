// console.log(__filename);
// console.log(__dirname);

// read a file:
const fs = require("fs");

fs.readFile("hi.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});
// <Buffer 68 65 68 65 62 6f 69>
//  if I don't put toString() or specify "uft8" as parameter in readFile, I'll get above

console.log("Outside"); // this gets printed 1st (asynchronous). It will take time to read the file
// Once read, only then output
// write readFileSync if I want synchronous version. see js file 2_1

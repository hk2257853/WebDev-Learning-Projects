const { readFileSync, readFile } = require("fs");
//imported only specific stuff inplace of full
// read file synchronous version.

try {
  const data = readFileSync("hi.txt", "utf8");
  console.log(data);
} catch (er) {
  console.error(err);
}

console.log("Outside");

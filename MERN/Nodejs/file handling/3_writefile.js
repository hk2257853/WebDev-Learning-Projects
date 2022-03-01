const { writeFileSync, writeFile } = require("fs");

const newContent = "  hi there   ";

//flag: "a" means append (). curson/pointer in file will go to end like cpp ig
writeFile("hi.txt", newContent, { flag: "a" }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Content written");
});

// synchronous version: similar to read. 10:20 to 10:35
// 10:45 to 10:33 better way to append...

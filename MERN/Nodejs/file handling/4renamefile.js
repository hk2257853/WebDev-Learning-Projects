const { rename } = require("fs");

// rename file

rename("hi.txt", "hello.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file renamed");
});

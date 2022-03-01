const http = require("http");
const fs = require("fs");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");

  ////////////// basic routing
  // 22:00 to 22:10 http://localhost:3000/about & http://localhost:3000 load same pg
  // so lets do the url part:
  let path = "./"; // current dir
  switch (request.url) {
    case "/":
      path += "index.html";
      // response.statusCode = 200; // will work without that too. Its just to know the status in the sever
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      break;

    default:
      // path += "404.html";
      // response.statusCode = 404;

      /////////// redirect
      response.setHeader("Location", "/");
      response.statusCode = 301;
      break;
  }

  // response.end("<h1> Hello World <h1>");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      response.end(); // what will this do?
    } else {
      response.end(data);
    }
  });
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Servermare at http://${HOSTNAME}:${PORT}/`);
});

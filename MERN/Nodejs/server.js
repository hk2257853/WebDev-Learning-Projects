const http = require("http"); // import
const HOSTNAME = process.env.HOSTNAME || "localhost";
// || means OR. Will take later is former is not defined
const PORT = process.env.PORT || 3000;

// http server:
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Servermare at http://${HOSTNAME}:${PORT}/`);
});

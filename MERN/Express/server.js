const express = require("express"); //import express
const app = express();

// 2 set up view engine (To display that html file - give it ejs extension)
app.set("view engine", "ejs");
// app.use(logger); //defined below

// app.use(express.static("public")); // If just want to render a simple static file
app.use(express.urlencoded({ extended: true })); //form part (see at end)
// app.use(express.json()) // exact like urlencoded but for json req

// 1 creating my route
app.get("/", logger, (req, res) => {
  // logger is another function I just passed...

  //console.log("here");
  //res.sendStatus(500).send("Custom error message");

  //res.send("hi"); // print a text
  //res.download("server.js"); // will download this server.js on page refresh
  //res.json({ message: "I can send json code too!" });
  res.render("index", { text: "Hi from server!" }); // render some html
});

// 2 importing from users.js
const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
// http://localhost:3000/ // type in browser to open

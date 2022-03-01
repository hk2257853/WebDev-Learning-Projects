// I could have written in server.js, but doing this is better for organising
const express = require("express"); //import express
const router = express.Router();
// This becomes like a mini app in main app(sever.js)

// it checks the url... for whichever one its a match, it runs(wrt get()). Put static ones up

//  / actually mean /users here
router.get("/", (req, res) => {
  res.send("user list");

  //Last thing in this tutorial: Query parameter (a part from the url as parameter)
  console.log(req.query.name); // http://localhost:3000/users?name=Kyle
});
// http://localhost:3000/users

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "test" });
});
// http://localhost:3000/users/new

// create a user
router.post("/", (req, res) => {
  // console.log(req.body.firstname); //see the name in <input tag. Will give error. Use app.use(express.urlencoded()) in server to access the name
  // res.send("Create user");

  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstname }); // push back in the array below
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstname });
  }
});

// // /:id its dynamic... (takes id from the url). so anything after users/ will be the id
// router.get("/:id", (req, res) => {
//   res.send(`Get user with ID ${req.params.id}`);
// }); //http://localhost:3000/users/2

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user); // (Part of param code below)
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

const users = [{ name: "hk" }, { name: "sk" }];
// param: Run this code if that parameter (here string id) matchs
router.param("id", (req, res, next, id) => {
  req.user = users[id]; // get the element from array using id from url. 0 is hk, 1 is sk
  next(); // Otherwise the page will keep loading. This executed b4 the above code(.get() in /:id). These type of codes r called middleware n need to put next to execute the next code!
});
// http://localhost:3000/users/1

module.exports = router;

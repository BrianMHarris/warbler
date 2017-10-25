var express = require("express");
var router = express.Router();
var db = require("../models");
var jwt = require("jsonwebtoken");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/:id", function(req, res, next) {
  db.User
    .findById(req.params.id)
    .then(function(user) {
      res.json(user);
    })
    .catch(function(reason) {
      res.status(404).send("Whoops, 404");
    });
});

router.post("/", function(req, res, next) {
  db.User.create(req.body).then(function(user) {
    res.status(201).send("Ok");
  });
});

router.post("/login", function(req, res, next) {
  /*
    Get username and password
    Lookup user in db
    verify(?) their token, issue new one I guess? I have no clue
  */
  console.log(req.body);

  if (req.body.username && req.body.password) {
    db.User
      .findOne(req.params.username)
      .then(function(user) {
        if (user.password === req.body.password) {
          console.log("PASSWORDS MATCH!");
          // var payload = { id: user.id };
          // var token = jwt.sign({ fuck: "this" }, "secret");
          // res.json({ message: "ok", token: token });
          res.json("eriogjeorigjeog");
        }
      })
      .catch(function(reason) {
        res.status(404).send("Whoops, 404");
      });
  }
});

router.patch("/:id", function(req, res, next) {
  db.User.findByIdAndUpdate(req.params.id, req.body).then(function(user) {
    res.status(200).send("Ok");
  });
});

module.exports = router;

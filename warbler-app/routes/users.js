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
  if (req.body.username && req.body.password) {
    db.User
      .findOne(req.params.username)
      .then(function(user) {
        if (user.password === req.body.password) {
          console.log("PASSWORDS MATCH!");
          var payload = { id: user.id };
          var token = jwt.sign({ what: "ever" }, "secret");
          res.json({
            message: "ok",
            username: user.username,
            email: user.email,
            token: token
          });
        } else {
          res.status(400).send("Bad request");
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

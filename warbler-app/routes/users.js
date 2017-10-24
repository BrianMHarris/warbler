var express = require("express");
var router = express.Router();
var db = require("../models");

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

router.patch("/:id", function(req, res, next) {
  db.User.findByIdAndUpdate(req.params.id, req.body).then(function(user) {
    res.status(200).send("Ok");
  });
});

module.exports = router;

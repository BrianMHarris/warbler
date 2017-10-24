var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/warbler");
mongoose.Promise = Promise;

module.exports.User = require("./user");

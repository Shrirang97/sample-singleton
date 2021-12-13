var express = require('express');
var router = express.Router();

/* GET users listing. */


var app = express();

router.get('/', function(req, res, next) {
  console.log("user controller = " + app.locals.name)
  res.send('respond with a resource');
});


console.log(express.application.name);

module.exports = router;

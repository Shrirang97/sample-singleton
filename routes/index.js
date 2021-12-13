var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var app = express();
  console.log("index controller = " + app.locals.name)
  res.render('index', { title: 'Express' });
});

module.exports = router;
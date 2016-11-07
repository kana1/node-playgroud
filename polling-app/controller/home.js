var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});

module.exports = router;
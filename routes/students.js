var express = require('express');
var router = express.Router();
const studentList = require('../studentList')

router.get('/', function(req, res, next) {
  res.send(studentList);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const session = require('express-session');



/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('register');
});

module.exports = router;

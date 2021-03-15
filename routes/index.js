const express = require('express');
const router = express.Router();
const session = require('./session');
router.use(session)



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{data:req.session.userId});
});

module.exports = router;

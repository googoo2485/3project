const express = require('express');
const router = express.Router();
const session = require('express-session');



/* GET users listing. */

// router.get('/', function(req, res, next) {
//   res.render('login',{  title:'login'});
// });

router.get("/", function(req,res){ 
  res.render('login'); 
});

module.exports = router;

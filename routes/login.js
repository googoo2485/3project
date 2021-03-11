const express = require('express');
const router = express.Router();
const session = require('express-session');
const client = require('./mysql');
const { connect } = require('./mysql');



/* GET users listing. */

// router.get('/', function(req, res, next) {
//   res.render('login',{  title:'login'});
// });

router.get("/", function(req,res){ 
  res.render('login'); 
});

// router.post('/login',(req,res)=>{
//   if(req.body.idx==);
// });


client.connect();
let sql = 'SELECT * FROM user WHERE id = ?';
client.query(sql,(req,res)=>{

})
module.exports = router;

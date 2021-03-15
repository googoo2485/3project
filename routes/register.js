const express = require('express');
const router = express.Router();
const session = require('express-session');
const client = require('./mysql');
const bcrypt = require('bcryptjs');


/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('register');
});

// exports.ragister = (req,res)=>{
//   let user = {
//     "id":req.body.id,
//     "pw":req.body.pw,
//     "name":req.body.name,
//     "email":req.body.email,
//     "created":req.body.created
//   }
// }

client.connect();
router.post('/', function (req, res) {
  let body = req.body;
  console.log(body);
  // body.pw =bcrypt.hash(body.pw,12);
  // bcrypt.genSalt(10,function(err,salt){
  //   if(err){
  //     console.log('bcrypt.genSalt() errer :',err.message);
  //   }
  //   else{
  //     bcrypt.hash(plainTextPassword,salt,null,function(err,hash){
  //       if(err){console.log('bcrypt.hash() errer:',err.message);}
  //       else{console.log(hash);}
  //     });
  //   }
// ?
  // });

  let sql = 'INSERT INTO user (id,pw,email,created) VALUES(?, ?, ?,NOW())';
  console.log(sql);
  client.query(sql,[body.id ,body.pw ,body.email ,body.created],()=>{
    console.log('????')
    res.redirect('/');
  });
});

module.exports = router;

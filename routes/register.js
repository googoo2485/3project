const express = require('express');
const router = express.Router();
const session = require('express-session');
const client = require('./mysql');



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

//client.connect();

// let sql = "INSERT INTO user(id,pw,name,email,created)VALUSES(?,?,?,?,?)";
// client.query(sql,(req,res)=>{
// })

router.post('/', function (req, res) {
  let body = req.body;
  console.log(body);
  let sql = 'INSERT INTO user (id,pw,email,created) VALUES(?, ?, ?,NOW())';
  console.log(sql);
  client.query(sql,[body.id ,body.pw ,body.email ,body.created],()=>{
    console.log('????')
    res.render('index');
  });
});

module.exports = router;

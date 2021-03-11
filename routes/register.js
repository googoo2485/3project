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
client.connect();
// let sql = "INSERT INTO user(id,pw,name,email,created)VALUSES(?,?,?,?,?)";
// client.query(sql,(req,res)=>{
// })

// router.get('/register', function (req, res) {
//   var body = req.body;
//   console.log(body);

//   var sql = 'INSERT INTO user VALUES(?, ?, ?, ?,NOW())';
//   var params = [body.id, body.pw, body.name,body.email,body.created];
//   console.log(sql);
//   conn.query(sql, params, function(err) {
//       if(err) console.log('query is not excuted. insert fail...\n' + err);
//       else res.redirect('/list');
//   });
// });

module.exports = router;

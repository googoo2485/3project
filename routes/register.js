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
  router.post('/checkId', (req, res) =>{
    let input_id = req.body.data;
    client.query('select * from user_table where id=?',[input_id],(err,data)=>{
        console.log(err);
        console.log('data ==>',data);

        if(data.length == 0){
            res.send({result:true});
            console.log('사용 가능 ID');
        }else{
            res.send({result:false});
            console.log('사용 불가 ID');
        }
    });
});


  let sql = 'INSERT INTO user (id,pw,email,created) VALUES(?, ?, ?,NOW())';
  console.log(sql);
  client.query(sql,[body.id ,body.pw ,body.email ,body.created],()=>{
    console.log('????')
    res.redirect('login');
  });
});

module.exports = router;

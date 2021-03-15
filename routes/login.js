const express = require('express');
const router = express.Router();
const session = require('./session');
const client = require('./mysql');
const { connect } = require('./mysql');

router.use(session)



/* GET users listing. */

router.get("/", function (req, res) {
  res.render('login');
});
client.connect();

router.post('/', (req, res) => {
  const body = req.body;
  let sql = "SELECT * FROM user where id=? and pw=?";
  client.query(sql, [body.id, body.pw], (err, result) => {
    console.log(result)
    if (result == '') {
      res.send('<script>alert("없는 아이디 입니다.");</script>');
    }else {
      req.session.loggedin = true;
      req.session.userId = result[0].id;
      console.log(req.session, '여기')
      req.session.save(() => {
        res.redirect('/');
      })
    }
  })
});

router.post('/checkID', (req, res) => {
  let inp_id = req.body.data;

  client.query('use tkdrn2485',()=>{
      console.log("데이터베이스 사용");
  });

  client.query('SELECT * FROM user WHERE id=?', [inp_id], (err, sql_result) => {
      console.error(err);
      console.log('sql_result ==> ',sql_result);

      if(sql_result == "") {
          res.send({result: true});
          console.log("사용 가능 ID");
      }
      else {
          res.send({result: false});
          console.log("사용 불가 ID");
      }
  });
});


module.exports = router;

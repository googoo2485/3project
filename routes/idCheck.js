const express = require('express');
const router = express.Router();
const session = require('./session');
const client = require('./mysql');
const { connect } = require('./mysql');

router.use(session);
router.post('/checkID', (req, res) => {
    let inp_id = req.body.data;

    client.query('use goom0803',()=>{
        console.log("데이터베이스 사용");
    });

    client.query('SELECT * FROM userInfo WHERE userid=?', [inp_id], (err, sql_result) => {
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
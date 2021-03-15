const express = require('express');
const router = express.Router();
const session = require('./session');
router.use(session)



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{data:req.session.userId});
});


$("#id").focusout(() => {
  let inp_id = $('#id').val();
  let idExp = id_pattern.test(inp_id);
  if(inp_id == "") {
      $('#id_msg').html("필수 입력");
      idBool = 1;
      $("#signUpBtn").attr("disabled", true);
  }
  else {
      if(!idExp) {
          $('#id_msg').html("영어, 숫자 사용 3~15자");
          idBool = 1;
          $("#signUpBtn").attr("disabled", true);
      }


      else {
          // 중복검사
          // ajax 사용해서 라우터로 데이터를 전송
          // 라우터에서 디비 검사
          $.ajax({
              url: '/signup/checkID',
              dataType: 'json',
              type: 'POST',
              data: { 'data': inp_id },
              success: (result) => {
                  if(result['result'] == true) {
                      $('#id_msg').html("사용 가능");
                      idBool = 0;

                      if((idBoolpwBoolreEnterBoolemailBoolnameBool||birthBool) == 0) {
                          $("#signUpBtn").attr("disabled", false);
                      }
                  }
                  else {
                      $('#id_msg').html("중복된 아이디");
                      idBool = 1;
                      $("#signUpBtn").attr("disabled", true);
                  }
              },
          });
      }
  }
});



module.exports = router;

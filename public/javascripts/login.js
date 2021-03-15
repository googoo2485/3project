$(document).ready(function(e) {
    let id_bool = 0;
    let pw_bool = 0;
    let re_pw_bool = 0;
    let name_bool = 0;
    let phone_bool = 0;
    let email_bool = 0;

$("#user_id").focusout(() => {
    let inp_id = $('#user_id').val();
    let id_pattern = /^[a-z][a-z\d]{4,11}$/;
    let id_res = id_pattern.test(inp_id);
    if(input_id == ""){
        $(".loginCheck").html("필수 입력");
        id_bool = 1;
        $("#submit").attr("disabled", "true"); // 비활성화
    }else{
        if(!id_res){
            $(".loginCheck").html("영어 소문자,숫자 4-12자리");
            $(".loginCheck").css("color","red");
            id_bool = 1;
            $("#submit").attr("disabled", "true");
        }else{
            $.ajax({
                url: "/signup/checkId",
                type: "POST",
                data: {
                    'data': input_id
                },
                dataType: "json",
                success: (result)=>{
                    if(result['result'] == true) {
                        $(".id_regex").html("사용 가능한 아이디");
                        $(".id_regex").css("color","red");
                        id_bool = 0;
                        if((id_bool||pw_bool||re_pw_bool||name_bool||email_bool) == 0) {
                            $("#submit").attr("disabled", false);//사용가능
                        }
                    }
                    else {
                        $(".id_regex").html("중복된 아이디");
                        id_bool = 1;
                        $("#submit").attr("disabled", "true");
                        }
                    },
                });
            }
        }
    });
});

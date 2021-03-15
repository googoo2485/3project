


$(document).ready(function(e) {
    let id_bool = 0;
    let pw_bool = 0;
    let re_pw_bool = 0;
    let name_bool = 0;
    let email_bool = 0;

    $("#user_id").focusout(() => {
    let input_id = $('#user_id').val(); // 입력 값 받아오는 부분
    let id_pattern = /^[a-z0-9_]{4,12}$/; // 정규표현식
    let id_res = id_pattern.test(input_id); // 검사 => t/f
    if(input_id == ""){ // null 검사
        $(".loginCheck").html("필수 입력");
        id_bool = 1;
        $(".submit").attr("disabled", true); // 비활성화
    }else{
        if(!id_res){ // 정규 표현식 => flase 일 경우
            $(".loginCheck").html("영어 소문자,숫자 4-12자리");
            $(".loginCheck").css("color","red");
            id_bool = 1;
            $(".submit").attr("disabled", true);
        }else{
            $.ajax({
                url: "/register/checkId",
                type: "POST",
                data: {
                    'data': input_id,
                },
                dataType: "json",
                success:(result)=>{
                    if(result['re_result'] == true) {
                        $(".loginCheck").html("사용 가능한 아이디");
                        $(".loginCheck").css("color","blue");
                        id_bool = 0;
                        if((id_bool||pw_bool||re_pw_bool||name_bool||email_bool) == 0) {
                            $(".submit").attr("disabled", false); //사용가능
                        }
                    }
                    else {
                        $(".loginCheck").html("중복된 아이디");
                        $(".loginCheck").css("color","red");
                        id_bool = 1;
                        $(".submit").attr("disabled", "true");
                        }
                    },
                });
            }
        }
    });

    $("#user-email").focusout(() => {
        let input_email = $('#user-email').val();
        let email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

        let email_res = email_pattern.test(input_email);
        if(input_email == ""){
            $(".emailCheck").html("필수 입력");
            email_bool = 1;
            $(".submit").attr("disabled", "true"); // 비활성화
        }else if(!email_res){
            
                $(".emailCheck").html("이메일 형식을 확인해주세요");
                $(".emailCheck").css("color","red");
                email_bool = 1;
                $(".submit").attr("disabled", "true");
            }
            else{
                $(".emailCheck").html("사용가능");
                $(".emailCheck").css("color","blue");
                email_bool = 0;
            }
        });


        $("#user_name").on("keyup", function() {
            let input_name = $('#user_name').val();
            let name_pattern = /^[가-힣\s]+$/;
    
            let name_res = name_pattern.test(input_name);
            if(input_name == ""){
                $(".nameCheck").html("필수 입력");
                name_bool = 1;
                $(".submit").attr("disabled", "true"); // 비활성화
            }else if(!name_res){
                
                    $(".nameCheck").html("한글만 가능 띄어쓰기ok");
                    $(".nameCheck").css("color","red");
                    name_bool = 1;
                    $(".submit").attr("disabled", "true");
                }
                else{
                    $(".nameCheck").html("사용가능");
                    $(".nameCheck").css("color","blue");
                    name_bool = 0;
                }
            });

            $("#user-pw").focusout(() => {
                let input_pw = $('#user-pw').val();
                let pw_pattern = /^[a-z0-9_]{4,12}$/;
        
                let pw_res = pw_pattern.test(input_pw);
                if(input_pw == ""){
                    $(".pwCheck").html("필수 입력");
                    pw_bool = 1;
                    $(".submit").attr("disabled", "true"); // 비활성화
                }else if(!pw_res){
                    
                        $(".pwCheck").html("4~12자 영문소문자, 숫자, 언더라인(_) 사용가능");
                        $(".pwCheck").css("color","red");
                        pw_bool = 1;
                        $(".submit").attr("disabled", "true");
                    }
                    else{
                        $(".pwCheck").html("사용가능");
                        $(".pwCheck").css("color","blue");
                        pw_bool = 0;
                    }
                });


                $("#user-repw").on("keyup", function() {
                    if($("#user-pw").val() !== $("#user-repw").val()) {
                        $(".repwCheck").html("입력값이 다름");
                        $(".repwCheck").css("color","red");
                        re_pw_bool = 1;
                        $(".submit").attr("disabled", "disabled");
                    }
                    else {
                        $(".repwCheck").html("비밀번호 일치");
                        $(".repwCheck").css("color","blue");
                        re_pw_bool = 0;
                        if((id_bool||pw_bool||re_pw_bool||name_bool||email_bool) != 1) {
                            $(".submit").removeAttr("disabled");
                        }
                    }
                });

               
                
});

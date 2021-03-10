$(document).ready(function(){
    $('.menu').click(function(){
        $(this).toggleClass('on');
    });
});


$(".container .Hbox").hover(function(){
    $(this).find("li").fadeToggle();
});

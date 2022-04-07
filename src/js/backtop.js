$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('#bttop').fadeIn();
        }else{
            $('#bttop').fadeOut();
        }
    });
    $("#bttop").click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
})
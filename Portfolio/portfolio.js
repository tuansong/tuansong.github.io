$(document).ready(function() {
    
    $(".img-gallery").mouseover(function() {
        $(".info").css("display","flex");
        $(".info").addClass("infoshow");
    });

    $(".img-gallery").mouseout(function() {
        $(".info").css("display","none");
    });

    $(".top-page").click(function(){
        $(window).scrollTop($('.navbar').offset().top);
    });
});
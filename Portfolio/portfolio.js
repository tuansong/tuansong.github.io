$(document).ready(function() {
    
    $(".img-gallery").mouseover(function() {
        $(".info").css("display","flex");
        $(".info").addClass("infoshow");
    });

    $(".img-gallery").mouseout(function() {
        $(".info").css("display","none");
    });

    $(".toppage").click(function(){
        $("window").scrollTo(".navbar");
    });
});
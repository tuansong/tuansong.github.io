$(document).ready(function() {    
    
    $(".img-gallery").each(function() {
       $(this).mouseover(function(){
       console.log($(this))    
       $(this).find(".info").css("display","flex");

     });
        $(this).mouseout(function(){
        $(".img-gallery").mouseout(function() {
        $(".info").css("display","none");
       
         });
        })
     });

     
    $(".top-page").click(function(){
        $(window).scrollTop($('.navbar').offset().top);
    });
});
$(document).ready(function(){

    if($(window).width() > 1300) {
        $(".d-block").addClass("w-100");
        location.reload();
        break;
    }
    else {
        $(".d-block").removeClass("w-100");
        location.reload();
        break;
    }

})
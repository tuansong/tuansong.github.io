$(document).ready(function(){
     $(document).scroll(function(){
        console.log("hello");
         $(".navbar").toggleClass("bg-light", $(this).scrollTop() > $(".navbar").height());
     });

    //  $("#contact").click(function(){
    //      console.log("test");
    //     $(window).scrollTop($('.middle-img').offset().top);
    // });
})

// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.12),
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.HYBRID
//     }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }

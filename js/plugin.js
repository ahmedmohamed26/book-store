 // button x
$(document).ready(function(){
$(".navbar-toggler").click(function(){
$(".navbar-toggler").toggleClass("active");
});
});
 

 // navbar
$(document).ready(function(){
$(".navbar-toggler").click(function(){
$("#navbarNav").toggleClass("open");
});
});
// animation item
$(document).ready(function(){
$(".navbar-toggler").on("click",function(){
$(".navbar-nav .nav-item").toggleClass("show");
});
});

// static item two
$(document).ready(function(){
$(".navbar-toggler").click(function(){
  $(".navbar-nav .two").toggleClass("static");
 
});
});
 
 // remove product
$(document).ready(function () {    
$(".total-cart #remove").click(function(){
$("#listgroup").remove();
});
});

// slider
$(document).ready(function () {
    var owl = $('.featured .owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: true,
        itemsTablet: [768, 2],
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }

    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

 $('.nstSlider').nstSlider({
    "crossable_handles": true,
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue + " L.E");
        $(this).parent().find('.rightLabel').text(rightValue + " L.E");
    }
});




})




var first = document.getElementById('first');
var second = document.getElementById('second');
var description = document.getElementById('description');
var review = document.getElementById('review');
var view = document.getElementById('view');
var button = document.getElementById('button');

first.onclick = function(){
    "use strict" 
    description.style.display = "block";
          first.style.transition = "all .5s ease-in-out";
    first.style.background = "#ff9706";
    second.style.background = "#777";
    review.style.display = "none";
    };


    second.onclick = function(){
        "use strict" 
        review.style.display = "block";
        second.style.transition = "all .5s ease-in-out";
        description.style.display = "none";
            first.style.background = "#777";
    second.style.background = "#ff9706";

        };

        
$(".description .active").click(function(){

    $(this).addClass("active").siblings().removeClass("active");
    
    });

 
 
 
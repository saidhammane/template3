var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

		// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days + " <small>days</small> ";
    document.getElementById("hours").innerHTML = hours + " <small>hours</small> ";
    document.getElementById("minutes").innerHTML = minutes + " <small>minutes</small> ";
    document.getElementById("seconds").innerHTML = seconds + " <small>seconds</small> ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("fh5co-countdown").innerHTML = "EXPIRED";
    }
}, 1000);

$(document).ready(function(){
    $(".colorWhite").css("color" , "white");
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".sticky-banner").css("background" , "white");
            $(".colorWhite").css("color" , "");
        }

        else{
            $(".sticky-banner").css("background" , "transparent"); 
            $(".colorWhite").css("color" , "white"); 	
        }
    })
    })
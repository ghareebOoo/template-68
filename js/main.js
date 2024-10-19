



$(".loading").fadeOut(6000 , function(){
    $("body").css("overflow" , "auto");
});

$("header .content .icon").css("left" , "15px");

$(".sidebar span").on("click" , function(){
    $(".sidebar").css("transform" , "translatex(-100%)");
    $("header .content .icon").css("left" , "15px");
    });

    $("header .icon").on("click" , function(){
        $(".sidebar").css("transform" , "translatex(0px)");
        $("header .content .icon").css("left" , "160px");
    });

    $(".message h3").on("click", function() {
        let currentParagraph = $(this).next(); 
        if (currentParagraph.is(':visible')) {
            currentParagraph.slideUp(500);
        } else {
            $(".message p:visible").slideUp(500);
            currentParagraph.slideDown(2000);
        }
    });

    $("#message").on("input" , function(){
        let remaining = 100 - $("#message").val().length;
        $("#char-count").text(remaining);
        if(remaining <= 0){
            $("#char-count").text("your available character finished");
            $(this).val( $(this).val().substring(0 , 100));
        }
    })


    $(".sidebar a").on("click" , function(){
        let myId = $(this).attr("href");
        let myScrollTop = $(myId).offset().top;
        $("html , body").animate({scrollTop: myScrollTop} , 2500);
    })




    let targetDate = new Date("oct 25, 2024").getTime();

    let countdownFunction = setInterval(function() {
        let now = new Date().getTime();
        let distance = targetDate - now;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".hour").text(`${hours} h`);
        $(".minute").text(`${minutes} m`);
        $(".second").text(`${seconds} s`);

        if (distance < 0) {
            clearInterval(countdownFunction);
            $(".waiting").html("it's time to open");
            $(".hour").html("");
            $(".minute").html("");
            $(".second").html("");
        }
    }, 1000);



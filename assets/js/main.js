$(document).ready(function() {
    console.log("ready!");


    $(function() {
        $('#main').onepage_scroll();
    });

    $("#openbtn").click(function() {
        $(".nav-items-wrapper").removeClass('hide'), 1000;
    });

    $(".closebtn").click(function() {
        $(".nav-items-wrapper").fadeOut("fast", function() {
            // perform reset
            $(this).fadeIn();
        });
    });

    // section fraction numbers
    $('.fraction').each(function(key, value) {
        $this = $(this)
        var split = $this.html().split("/")
        if (split.length == 2) {
            $this.html('<span class="top">' + split[0] + '</span><span class="bottom">' + split[1] + '</span>')
        }
    });


    $("#moveDown-2").click(function() {
        console.log("You have clicked move down arrow");
        $('html, body').animate({
            scrollTop: $("#secondSection").offset().top
        }, 2000);
    });



});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

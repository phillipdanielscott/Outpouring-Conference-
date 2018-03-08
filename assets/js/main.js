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


});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

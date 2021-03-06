var my_val = 0;
$(document).ready(function() {


   
    var speed = 300;
    $('#close-bar').on('click', function() {

        var $$ = $(this),
            panelWidth = $('#hiddenPanel').outerWidth();

        if ($$.is('.myButton')) {
            $('#hiddenPanel').animate({ right: 0 }, speed);
            $$.removeClass('myButton')
        } else {
            $('#hiddenPanel').animate({ right: -panelWidth }, speed);
            $$.addClass('myButton')
        }

    });
    window.onscroll = function() { myFunction() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }




    $(function() {
        $(window).scroll(function(e) {
            if ($(this).scrollTop() > 150) {
                $('.back-to-top').fadeIn(1); // Fading in the button on scroll after 150px
            } else {
                $('.back-to-top').fadeOut(1); // Fading out the button on scroll if less than 150px
            }
        });

        $('.back-to-top').click(function(e) {
            $('body, html').animate({ scrollTop: 0 }, 800);
        });
    })
  ``
  
});


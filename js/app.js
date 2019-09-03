$(document).ready(function(){
    $('.menu').on('click', function() {
        $(this).toggleClass('active');
        $('.overlay').toggleClass('menu-open')
       
    });
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});




// document.addEventListener("DOMContentLoaded", function () {
//     const status = document.querySelector('.status');
//     const statusBar = () => {
//         currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);

//         status.style.width = currentScroll + "%";
//     }

//     window.addEventListener("scroll", statusBar);

// }







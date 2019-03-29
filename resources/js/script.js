
$(document).ready(function() {
    /**
     * Fo sticky nav
     */

    // get the header
    var navBar = document.getElementById('stickyNav');

    // get the offset position of the navbar
    // TODO: add the nav header when the section scrolls up
    var sticky = navBar.offsetTop;
    window.addEventListener('scroll', scrollHeaderFunction);

    // toggle between the header normal and header sticky
    function scrollHeaderFunction() {
        if(window.pageYOffset > sticky) {
            navBar.classList.add('sticky');
        } else {
            navBar.classList.remove('sticky');
        }
    }

    /**
     * for button scroll
     */
    $('.js--scroll-to-plan').click(function() {
        $('html, body')
            .animate({ scrollTop: $('.js--section-plans').offset().top }, 1000)
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body')
            .animate({ scrollTop: $('.js--section-features').offset().top }, 1000)
    });

});

/** Navigation */
function citiesFun(pathName) {
    cities.innerHTML = window.mycity;
    console.log('cities', window.location.origin + pathName);
        $('html, body')
            .animate({ scrollTop: $('#cities').offset().top }, 1000)
}

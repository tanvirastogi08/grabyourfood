$(document).ready(function() {
    var stickyHeader = $('#sticky');

    if (stickyHeader.length) {
        var contentNav = stickyHeader.offset().top; 
        console.log('sticky header postion from top: ', contentNav);
        var stickyNav = function() {
                stickyHeader.on("scroll", function(e) {

                if (this.scrollTop > contentNav) {
                    stickyHeader.addClass("sticky");
                } else {
                    stickyHeader.removeClass("sticky");
                }
        
            });
        };
        stickyNav();
        $(window).scroll(function () {
            stickyNav();
        });
    }

})

var stickyHeader = $('.sticky');

if (stickyHeader.length) {
    var contentNav = stickyHeader.offset().top; 
    console.log('sticky header postion from top: ', posFromTop);
}
// var posFromTop = stickyHeader.offset().top;

// console.log('sticky header postion from top: ', posFromTop);

// var wrap = $("#wrap");
// var posFromTop = wrap.offset().top

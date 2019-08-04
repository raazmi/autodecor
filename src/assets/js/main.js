(function ($) {
    'use strict';


    /* Preloader */
    $(window).on('load', function () {
        $('.preloader').fadeOut()
    });


    /* Acitve Autodecor */
    $('.autodecor').autoDecor({
        maxHeight: '50px',
        maxWidth: '50px',
        animate: true, // Set true if you want to animate your autodecor items
        animationName: 'rotate', // You can use your custom animation name here
        animationDuration: '5s',
        animationDelay: '0s',
        opacity: 0.1
    });




})(jQuery);
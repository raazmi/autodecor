(function ($) {
    $.fn.autoDecor = function (options) {
        var settings = $.extend({
            maxHeight: '50px',
            maxWidth: '50px',
            animate: true,
            animationName: 'rotate',
            animationDuration: '5s',
            animationDelay: '0s',
            opacity: 1
        }, options);

        return this.each(function () {
            var elements = $(this).children();
            $(this).css({
                opacity: settings.opacity
            });

            $(this).find('img').css({
                maxHeight: '100%',
                maxWidth: '100%'
            });

            elements.css({
                position: 'absolute',
                maxHeight: settings.maxHeight,
                maxWidth: settings.maxWidth
            });
            var rand = function (maxNumber) {
                return Math.floor(Math.random() * maxNumber);
            }
            for (var i = 0; i <= elements.length - 1; i++) {
                elements.each(function () {
                    $(this).css({
                        left: rand(100) + '%',
                        top: rand(100) + '%',
                        right: 'auto'
                    });

                    if (settings.animate) {
                        $(this).css({
                            'animation-name': settings.animationName,
                            'animation-duration': settings.animationDuration,
                            'animation-delay': settings.animationDelay,
                            'animation-timing-function': 'linear',
                            'animation-iteration-count': 'infinite',
                            'animation-direction': 'normal',
                            'animation-fill-mode': 'both',
                        });
                    }
                })
            }
        })
    }
})(jQuery);
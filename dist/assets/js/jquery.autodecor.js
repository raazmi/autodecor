!function(o){o.fn.autoDecor=function(i){var n=o.extend({maxHeight:"50px",maxWidth:"50px",animate:!0,animationName:"rotate",animationDuration:"5s",animationDelay:"0s",opacity:1},i);return this.each(function(){var i=o(this).children();o(this).css({opacity:n.opacity}),o(this).find("img").css({maxHeight:"100%",maxWidth:"100%"}),i.css({position:"absolute",maxHeight:n.maxHeight,maxWidth:n.maxWidth});function a(i){return Math.floor(Math.random()*i)}for(var t=0;t<=i.length-1;t++)i.each(function(){o(this).css({left:a(100)+"%",top:a(100)+"%",right:"auto"}),n.animate&&o(this).css({"animation-name":n.animationName,"animation-duration":n.animationDuration,"animation-delay":n.animationDelay,"animation-timing-function":"linear","animation-iteration-count":"infinite","animation-direction":"normal","animation-fill-mode":"both"})})})}}(jQuery);
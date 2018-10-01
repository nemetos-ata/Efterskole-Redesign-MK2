var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality

$( document ).ready(function() {
    //$('.btn.menuOpen').on('shown.bs.collapse', function (e) {
    $('#collapseExample').on('shown.bs.collapse', function (e) {
        $('.logo').addClass('active');
    });
    $('#collapseExample').on('hidden.bs.collapse', function (e) {
        $('.logo').removeClass('active');
    });
    
    // Some scrool magick
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    var slides = document.querySelectorAll('.section.panel');

    for (var i=0; i < slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i])
            .addIndicators()
            .addTo(controller);
    }

    /* MAP */
    function showMap(){
        $('#map').show(600);
    }

});
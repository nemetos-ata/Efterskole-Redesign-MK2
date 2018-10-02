var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality

$( document ).ready(function() {
    $('#collapseExample').on('show.bs.collapse', function (e) {
        $('.logo').addClass('active');
        $('.menuWrp').addClass('active');
        $('.menuOpen').addClass('d-none');
    });
    $('#collapseExample').on('hide.bs.collapse', function (e) {
        $('.logo').removeClass('active');
        $('.menuWrp').removeClass('active');
        $('.menuOpen').removeClass('d-none');
    });
    
    // Some scrool magick

    document.getElementById('content').addEventListener('wheel', scrollAnimate);

    $(window).scroll(function(){
        let wih = window.innerHeight;
        let pYof = window.pageYOffset;
        let length = $('.panel').length;
        
        if((pYof >= (wih*length))){
            $('.logo').addClass('onPage');
            $('.menuOpen').addClass('onPage');
        }
        if(($('#curent').attr('curent') == 5) && (pYof <= (wih*length))){
            $('#curent').attr('curent', 4);
            $('.logo').removeClass('onPage');
            $('.menuOpen').removeClass('onPage');
            // let destination = $('#panelSlid_4').offset().top;
            // $('html').animate({
            //     scrollTop: destination
            // }, {
            //     duration: 400, 
            //     specialEasing: {
            //     position: 'easeOutBounce'
            //     },
            //     complete: function(){
            //         $('#curent').attr('offset', pYof);
            //     }
            // });
        }
    });
    
    function scrollAnimate(){
        let wih = window.innerHeight;
        let length = $('.panel').length;
        let pYof = window.pageYOffset;
        let priorOffset = $('#curent').attr('offset');
        // console.log(priorOffset);
        // console.log('window.innerHeight:  ' + wih);
        // console.log('document.body.clientHeight:  ' + document.body.clientHeight);
        // console.log('window.pageYOffset: ' + pYof );
        // console.log($('.panel').length);

        if(pYof < wih*length){
            if(priorOffset > pYof){
                let curent = $('#curent').html();
                curent = +curent;
                let target = (curent - 1) < 1 ? 1 : (curent - 1);
                $('#curent').attr('curent', target);
                let destination = $('#panelSlid_' + target).offset().top;
                $('html').stop().animate({
                    scrollTop: destination
                }, {
                    duration: 400, 
                    specialEasing: {
                    position: 'easeOutBounce'
                    },
                    complete: function(){
                        let pYof = window.pageYOffset;
                        $('#curent').attr('offset', pYof);
                    }
                });
                $('#curent').html(target);
            }

            if(priorOffset < pYof){
                let destination = "";
                let target = 1;
                let curent = $('#curent').html();
                let total = $('#total').html();
                curent = +curent;
                total = +total;
                $('#curent').attr('curent', (curent + 1) > 4 ? 5 : (curent + 1));
                if (curent + 1 > total){
                    target = 4;
                    destination = $('#serch').offset().top;
                } else {
                    target = curent + 1;
                    destination = $('#panelSlid_' + target).offset().top;
                }
                $('html').stop().animate({
                    scrollTop: destination
                }, {
                    duration: 400, 
                    specialEasing: {
                    position: 'easeOutBounce'
                    },
                    complete: function(){
                        let pYof = window.pageYOffset;
                        $('#curent').attr('offset', pYof);
                    }
                });
                $('#curent').html(target);
            }
        }
    };

    /* SCROOL MAGIC */

    // var controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 'onLeave'
    //     }
    // });

    // var slides = document.querySelectorAll('.section.panel');

    // for (var i=0; i<slides.length; i++) {
    //     new ScrollMagic.Scene({
    //             triggerElement: slides[i]
    //         })
    //         .setPin(slides[i])
    //         //.addIndicators()
    //         .addTo(controller);
    // }
    /* SCROOL MAGIC */

    $('#up').click(function() {
        let curent = $('#curent').html();
        curent = +curent;
        let target = (curent - 1) < 1 ? 1 : (curent - 1);
        $('#curent').attr('curent', target);
        let destination = $('#panelSlid_' + target).offset().top;
        $('html').animate({
            scrollTop: destination
          }, {
            duration: 400, 
            specialEasing: {
              position: 'easeOutBounce'
            },
            complete: function(){
                let pYof = window.pageYOffset;
                $('#curent').attr('offset', pYof);
            }
          });
        $('#curent').html(target);
    });
    
    $('#down').click(function() {
        let destination = "";
        let target = 1;
        let curent = $('#curent').html();
        let total = $('#total').html();
        curent = +curent;
        total = +total;
        $('#curent').attr('curent', (curent + 1) > 4 ? 5 : (curent + 1));
        if (curent + 1 > total){
            target = 4;
            destination = $('#serch').offset().top;
        } else {
            target = curent + 1;
            destination = $('#panelSlid_' + target).offset().top;
        }
        $('html').animate({
            scrollTop: destination
          }, 
          {
            duration: 400, 
            specialEasing: {
              position: 'easeOutBounce'
            },
            complete: function(){
                let pYof = window.pageYOffset;
                $('#curent').attr('offset', pYof);
            }
        });
        $('#curent').html(target);
    });

    $(window).on('keydown', function(e){
        if($('#curent').attr('curent') < 5){
            if(e.which === 38){            
                let curent = $('#curent').html();
                curent = +curent;
                let target = (curent - 1) < 1 ? 1 : (curent - 1);
                $('#curent').attr('curent', target);
                let destination = $('#panelSlid_' + target).offset().top;
                $('html').animate({
                    scrollTop: destination
                }, {
                    duration: 400, 
                    specialEasing: {
                    position: 'easeOutBounce'
                    },
                    complete: function(){
                        let pYof = window.pageYOffset;
                        $('#curent').attr('offset', pYof);
                    }
                });
                $('#curent').html(target);
            }
            if(e.which === 40){            
                let destination = "";
                let target = 1;
                let curent = $('#curent').html();
                let total = $('#total').html();
                curent = +curent;
                total = +total;
                $('#curent').attr('curent', (curent + 1) > 4 ? 5 : (curent + 1));
                if (curent + 1 > total){
                    target = 4;
                    destination = $('#serch').offset().top;
                } else {
                    target = curent + 1;
                    destination = $('#panelSlid_' + target).offset().top;
                }
                $('html').animate({
                    scrollTop: destination
                }, 
                {
                    duration: 400, 
                    specialEasing: {
                    position: 'easeOutBounce'
                    },
                    complete: function(){
                        let pYof = window.pageYOffset;
                        $('#curent').attr('offset', pYof);
                    }
                });
                $('#curent').html(target);
            }
        }
    });

    /* MAP */
    function showMap(){
        $('#map').show(600);
    }

});
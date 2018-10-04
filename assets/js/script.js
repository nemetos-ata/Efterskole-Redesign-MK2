var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality

$( document ).ready(function() {

//  BOOTSTRAP MENU TOGGLE
    // $('#collapseExample').on('show.bs.collapse', function (e) {
    //     $('.logo').addClass('active');
    //     $('.menuWrp').addClass('active');
    //     $('.menuOpen').addClass('d-none');
    // });
    // $('#collapseExample').on('hide.bs.collapse', function (e) {
    //     $('.logo').removeClass('active');
    //     $('.menuWrp').removeClass('active');
    //     $('.menuOpen').removeClass('d-none');
    // });


    $('.menuOpen').click(function(){
        $('#meinMenuWrp').animate({
                height: 'show'  
            }, {
                duration: 400, 
                specialEasing: {
                position: 'easeOutBounce'
                },
                complete: function(){
                    $('.logo').addClass('active');
                    $('.menuWrp').addClass('active');
                    $('.menuOpen').addClass('d-none');
                }
            });
    });
    $('#menuCloseBtn').click(function(){
        $('.menuWrp').removeClass('active');
        $('#meinMenuWrp').animate({
                height: 'hide'  
            }, {
                duration: 400, 
                specialEasing: {
                position: 'easeOutBounce'
                },
                complete: function(){
                    $('.logo').removeClass('active');
                    $('.menuOpen').removeClass('d-none');
                }
            });
    });
    
// ====---- Some scrool magick
    // CHECK of scrole
    $(window).scroll(function(){
        let wih = window.innerHeight;
        let pYof = window.pageYOffset;
        let length = $('.panel').length;
        
        if((pYof >= (wih*length))){
            $('.logo').addClass('onPage');
            $('.menuOpen').addClass('onPage');
        }
        if(($('#curent').attr('data-curent') == 5) && (pYof <= (wih*length))){
            $('#curent').attr('data-curent', 4);
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



    document.getElementById('content').addEventListener('wheel', scrollAnimate);    
    function scrollAnimate(){
        let wih = window.innerHeight;
        let length = $('.panel').length;
        let pYof = window.pageYOffset;
        let priorOffset = $('#curent').attr('data-offset');
        console.log(priorOffset);
        console.log('window.innerHeight:  ' + wih);
        console.log('document.body.clientHeight:  ' + document.body.clientHeight);
        console.log('window.pageYOffset: ' + pYof );
        console.log($('.panel').length);

        if(pYof < wih*length){
            if(priorOffset > pYof ){
                console.log('11');            
                scrollUpBase();
            }
            if(priorOffset < pYof){
                console.log('22');
                scrollDownBase();
            }
        }
    };

    $('#up').click(function() {      
        scrollDownBase();
    });
    
    $('#down').click(function() {
        scrollDownBase();
    });

    $(window).on('keydown', function(e){
        if($('#curent').attr('data-curent') < 5){
            if(e.which === 38){            
                scrollUpBase();
            }
            if(e.which === 40){
                scrollDownBase();
            }
        }
    });

    // suport function
    function scrollDownBase(){
        let destination = "";
        let target = 1;
        let curent = $('#curent').html();
        let total = $('#total').html();
        curent = +curent;
        total = +total;
        $('#curent').attr('data-curent', (curent + 1) > 4 ? 5 : (curent + 1));
        if (curent + 1 > total){
            target = 4;
            destination = $('#serch').offset().top;
        } else {
            target = curent + 1;
            destination = $('#panelSlid_' + target).offset().top;
        }        
        scrollAnimmate(destination);
        $('#curent').html(target);
    }
    function scrollUpBase(){
        let curent = $('#curent').html();
        curent = +curent;
        let target = (curent - 1) < 1 ? 1 : (curent - 1);
        $('#curent').attr('data-curent', target);
        let destination = $('#panelSlid_' + target).offset().top;
        scrollAnimmate(destination);
        $('#curent').html(target);
    }
    function scrollAnimmate(destination){
        $('html').animate({
            scrollTop: destination
        }, {
            duration: 400, 
            specialEasing: {
            position: 'easeOutBounce'
            },
            complete: scrollAnimComplete()
        });
    }
    function scrollAnimComplete(){
        let pYof = window.pageYOffset;
        $('#curent').attr('data-offset', pYof);
    }

    
    /* SCROOL MAGIC PLUGIN */

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

    /* MAP  HERE WILL BE  */
    function showMap(){
        console.log('form new serch');
        $('#map').show(600);
    }

});
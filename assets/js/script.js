var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality

$( document ).ready(function() {
    $('#collapseExample').on('shown.bs.collapse', function (e) {
        $('.logo').addClass('active');
    });
    $('#collapseExample').on('hidden.bs.collapse', function (e) {
        $('.logo').removeClass('active');
    });
    
    // Some scrool magick

    document.getElementById('content').addEventListener('wheel', scrollAnimate);

    // $(window).scroll(
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

            if(priorOffset < pYof){
                let destination = "";
                let target = 1;
                let curent = $('#curent').html();
                let total = $('#total').html();
                curent = +curent;
                total = +total;
                if (curent + 1 > total){
                    target = 4;
                    destination = $('#serch').offset().top;
                } else {
                    target = curent + 1;
                    destination = $('#panelSlid_' + target).offset().top;
                }
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
        }
    };
    $('#up').click(function() {
        let curent = $('#curent').html();
        curent = +curent;
        let target = (curent - 1) < 1 ? 1 : (curent - 1);
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
        if (curent + 1 > total){
            destination = $('#serch').offset().top;
        } else {
            target = curent + 1;
            destination = $('#panelSlid_' + target).offset().top;
        }
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

    /* MAP */
    function showMap(){
        $('#map').show(600);
    }

});
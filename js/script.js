$( document ).ready(function() {
    $(function() {
        $('.close svg').click(function(){
            $('.header_toasts').hide(5000);
        });
    });  

    $(function() {
        $('#nav-icon').click(function(){
            $(this).toggleClass('open');
            $('nav').toggleClass('show');
        });
    });
    /**mob */
    $(function() {
        $('.btn_tel').click(function(){
            $(this).toggleClass('active');
            $('.hover_tell').toggleClass('show_tel');
        });
    });


    /**dec */
    $(function() {
        $('.btn_tell').click(function(){
            $(this).toggleClass('active');
            $('.hover_tel').toggleClass('show_tell');
        });
    });


    $(function() {
        $('.support>h5').click(function(){
            $(this).toggleClass('active');
            $('.support>.about_use').toggleClass('show_info');
        });
    });
    $(function() {
        $('.clients>h5').click(function(){
            $(this).toggleClass('active');
            $('.clients>.about_use').toggleClass('show_info');
        });
    });

    
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        margin:0,
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


    $('[type*="radio"]').change(function () {
        var me = $(this);
        log.html(me.attr('value'));
    });

});


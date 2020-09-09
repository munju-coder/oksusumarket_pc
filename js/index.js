$(document).ready( function(){

    /**
     * index main_banner slide
     */
    var mainswiper = new Swiper('.main-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
        },
        effect: 'fade',
        
    });

    /**
     * index tab menu
     */
    $('.tablinks').each( function(){
        $(this).click( function(){
            $('.tablinks').removeClass('bg_active');
            $(this).addClass('bg_active');

            $('.tab_contents').removeClass('tab_active');
            $('.tab_contents').css('display','none');

            var chk = $(this).attr("tab_name");
            $('#' + chk).css("display", "block");
        });
    }); 
});
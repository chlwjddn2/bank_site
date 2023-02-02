$(document).ready(function(){
    var mainSwiper = new Swiper(".main_swiper", {
        spaceBetween: 0,
        centeredSlides: true,
        effect: "fade",
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".main_pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".main_btn_next",
          prevEl: ".main_btn_prev",
        },
      });
      var serviceSwiper = new Swiper(".service_swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: ".service_btn_next",
            prevEl: ".service_btn_prev",
          },
        breakpoints: {
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          668: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });
      var sw = 0;
      $('.btn_pause').click(function(){
        if(sw==0){
          $('.btn_pause').addClass('on');
          serviceSwiper.autoplay.stop();
          sw = 1;
        }else{
          $('.btn_pause').removeClass('on');
          serviceSwiper.autoplay.start();
          sw = 0;
        }
      });

      $(function(){
        $('.tabcontent > div').hide();
        $('.tabnav a').click(function () {
          $('.tabcontent > div').hide().filter(this.hash).fadeIn();
          $('.tabnav a').removeClass('active');
          $(this).addClass('active');
          return false;
        }).filter(':eq(0)').click();
      });

      $('.menu_open').on('click', function(){
        $('.all_menu').addClass('show');
      });
      $('.close_all_menu_btn').on('click', function(){
        $('.all_menu').removeClass('show');
      });
})
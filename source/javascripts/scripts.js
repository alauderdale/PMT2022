 $(document).ready(function(){


    ///toggle mobile menu
    $('.mobile-menu-toggle').on('click', function(e) {
      $('.mobile-menu-container').toggleClass("mobile-menu-hidden"); 
    });



    //tooltips

    $('[data-toggle="tooltip"]').tooltip(
      {container:'body', trigger: 'hover'}
      );   


    //slider

    var swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          992: {
              slidesPerView: 2
            },
        }
      });







  });

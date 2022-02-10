 $(document).ready(function(){


    $(window).scroll(function() {
      var scroll = $(window).scrollTop(); // how many pixels you've scrolled
      var os = $('#reached').offset().top; // pixels to the top of div1
      var ht = $('#reached').height(); // height of div1 in pixels
      // if you've scrolled further than the top of div1 plus it's height
      // change the color. either by adding a class or setting a css property
      if(scroll > os + ht){
          $('.page-nav-wrapper-outer').addClass('show-actions');
      }
      if(scroll < os + ht){
          $('.page-nav-wrapper-outer').removeClass('show-actions');
      }
    });




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

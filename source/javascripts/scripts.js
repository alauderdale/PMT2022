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


    //sliders

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


    var swiper = new Swiper(".instructor-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          576: {
              slidesPerView: 2
            },
          992: {
              slidesPerView: 4
            },
        }
      });


    var swiper = new Swiper(".home-slider", {
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      pagination: {
        el: ".swiper-pagination",
      }
    });


    ///responsive tables!!!
    $('table').footable();

    $('.read-more').readmore({
      speed: 500,
      collapsedHeight: 150,
      heightMargin: 20,
      moreLink: '<a href="#">More</a>',
      lessLink: '<a href="#">Less</a>'
    });


  });

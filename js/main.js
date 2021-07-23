$(function($) {

  "use strict";



  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

  /*=========================== preloader ===========================*/
  

/*=========================== search box ===========================*/
 $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
/*=========================== search box ===========================*/


/*=========================== hero-slider ===========================*/
 var owls = $("#hero_slider_owl");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        smartSpeed:1500,
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots:true,
        nav:false,
        
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                mouseDrag:false,
        		touchDrag:true,
            },
            767: {
                mouseDrag:false,
        		touchDrag:true,
            },
        },
    });
$("#hero_slider_owl").trigger("to.owl.carousel", [1])
/*=========================== hero-slider ===========================*/


/*=========================== hero-slider 2 ===========================*/
 var owls = $("#hero_slider_owl2");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        smartSpeed:1500,
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots:false,
        nav:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                mouseDrag:false,
        		touchDrag:true,
            },
            767: {
                mouseDrag:false,
        		touchDrag:true,
            },
        },
        navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
    });
/*=========================== hero-slider 2 ===========================*/


/*=========================== course slider ===========================*/
 var owls = $("#courses_owl_slider");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 3,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots:false,
        nav:true,
        smartSpeed:1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                mouseDrag:false,
        		touchDrag:true,
            },
            767: {
                items: 2,
                mouseDrag:false,
        		touchDrag:true,
            },
            1100: {
                items: 3,
            }
        },
        navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"]
    });

/*=========================== course slider ===========================*/


/*=========================== testimonials ===========================*/
 var owls = $("#testimonials_slider_owl");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        items: 3,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots:false,
        nav:false,
        smartSpeed:1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                mouseDrag:false,
        		touchDrag:true,
            },
            767: {
                items: 2,
                mouseDrag:false,
        		touchDrag:true,
            },
            1100: {
                items: 3,
            }
        },
    });

/*=========================== testimonials ===========================*/




/*=========================== partner slider ===========================*/
 var owls = $("#partner_slider_owl");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        items: 3,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots:false,
        nav:false,
        smartSpeed:1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 3,
            },
            1100: {
                items: 4,
            }
        },
    });

/*=========================== partner slider ===========================*/



/*=========================== popup video ===========================*/
$('.popup-youtube').magnificPopup({
  type: 'iframe',
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                +
              '</div>'
  },

  
});

  /*===========================close popup video ===========================*/

 /*=========================== popup image ===========================*/

//popup gallery
  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
  });
/*=========================== popup image ===========================*/


  

 /*=========================== isotop active ===========================*/

  //// ISOTOPE TRIGGER
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      stagger: 30
    });
    $(window).on('load', function(){ $grid.isotope('layout') }); 
    $('.filter-button-group').on( 'click', '.button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.filter-button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'a', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    //// MASONRY
    $('.grid').isotope({
      itemSelector: '.work-caption img',
      masonry: {
        columnWidth: 0
      }
    });

/*=========================== isotop active ===========================*/

/*=========================== counter js active ===========================*/

    $('.counter').counterUp({
        delay: 4,
        time: 4000
    });

/*=========================== close counter js active ===========================*/

 // ------------------------------- AOS Animation 
        AOS.init({
          duration: 1000,
          mirror: true
        });

});


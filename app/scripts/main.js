
$(document).ready(function(){

  $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('fixing');
      $('#main-image').addClass('animated fadeIn');


    }
    else {

      $('nav').removeClass('fixing');
      $('#main-image').removeClass('animated fadeIn');

    }
  });


  //scroll to bottom
  $('.downarrow').click(function () {

    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });

});


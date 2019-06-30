$(document).ready(function() {
  
  //Waypoints
  var $section2 = $('.fc-container-home .section-2-content');
  var $section4 = $('.fc-container-home .section-4-content');
  var $sectionAbout = $('.about-wrapper');
  var $sectionServices = $('.service-wrapper');
  var $sectionContact = $('.fc-contact-info');
  
  $section2.waypoint(function (direction) {
    if(direction == 'down') {
      $section2.addClass('content-appear');
    }
  }, { offset: '50%' });
    
  $section4.waypoint(function (direction) {
    if(direction == 'down') {
      $section4.addClass('content-appear');
    }
  }, { offset: '50%' });
  
  $sectionAbout.waypoint(function (direction) {
    if(direction == 'down') {
      $sectionAbout.addClass('content-appear');
    }
  }, { offset: '50%' });
  
  $sectionServices.waypoint(function (direction) {
    if(direction == 'down') {
      $sectionServices.addClass('content-appear');
    }
  }, { offset: '50%' });
  
  $sectionContact.waypoint(function (direction) {
    if(direction == 'down') {
      $sectionContact.addClass('content-appear');
    }
  }, { offset: '75%' });
  
  //Mobile Menu 
  $(".btn-toggle").on("click", function() { 
    if( $(".fc-nav").hasClass("close") ) {
      $("body").css({"overflow": "unset"});
      $(".fc-nav").removeClass("close").addClass("open");
    } else {
      $("body").css({"overflow": "hidden"});
      $(".fc-nav").removeClass("open").addClass("close");
    }
  });

  $(".btn-toggle").click( function(e) {
      e.stopPropagation(); 
  });
  
  //Quote Slideshow
  var quoteBlock = $(".quote-block");
  var quoteNav = $('.quote-nav li');
  
  var counter = 0;
  
  var interval;
  var timer = function(){
    interval = setInterval(function(){
      
      $(quoteBlock[counter]).fadeOut(500, function() {  
        if (counter == quoteBlock.length - 1) {
          counter = 0;
          quoteNav.last().removeClass("current");
        } else {
          counter++;
        }
      $(quoteBlock[counter]).fadeIn(500, function() {
        
        if($(quoteNav[counter]).prev().hasClass('current')) {
          $(quoteNav[counter]).prev().removeClass("current");
        } 
        if($(quoteNav[counter]).next().hasClass('current')) {
          $(quoteNav[counter]).next().removeClass("current");
        } 
      $(quoteNav[counter]).addClass('current');
        
      });   

    });
  
    },5000);
  };

  quoteNav.click(function(){
    var index = $(this).index();
    
    if( $(this).hasClass('current') ) {
      return;
    } else {
      $(this).addClass('current').siblings().removeClass('current');
      $('.quote-block:not(.current)').hide();
      $('.quote-block').eq(index).fadeIn('slow');
      
      counter = index;
      
       clearInterval(interval);
       timer();
    }
  });
  
  timer();
  
  //AJAX 
  $('#fcContactForm').submit(function(event) {
    event.preventDefault();
    var name = $("#mail-name").val();
    var email = $("#mail-email").val();
    var phone = $("#mail-phone").val();
    var interest = $("#mail-interest").val();
    var message = $("#mail-message").val();
    var submit = $("#mail-submit").val();
    
    $("#form-message").load("includes/contact.php", {
      name: name,
      email: email,
      phone: phone,
      interest: interest,
      message: message,
      submit: submit
    });
  });
  
});
function mobileScreenDetect() {
    if (window.outerWidth > 768) {
      $(".psvn-header-menu-icon").click(function(){  
          $(".app-wrapper").toggleClass("icon-nav");  
      });
    }
    if( window.outerWidth <= 768 ) {
      
      $(".psvn-sidebar-wrapper").addClass('mobile');
      $(".psvn-main-view").addClass('mobile');

      $('.backdrop').off().on('click',function() {
        $('.backdrop').toggleClass('show');  
        $(".psvn-sidebar-wrapper").css('transform','translateX(-500px)');
      });
      $(".psvn-header-menu-icon").off().on('click',function(){
          $('.backdrop').toggleClass('show');
          $(".psvn-sidebar-wrapper").css({'transform': 'translateX(0)','z-index': '3'});
      });  
    }         
  }
$(document).ready(function() {
    mobileScreenDetect();
    $(window).resize(
        mobileScreenDetect
    );    
  });
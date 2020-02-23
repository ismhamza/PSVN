$(document).ready(function() {
    $(window).resize(function() {
      if (window.outerWidth > 768) {
        $(".psvn-header-menu-icon").click(function(){  
            $(".app-wrapper").toggleClass("icon-nav");  
        });
      }
      if( window.outerWidth <= 768 ) {
        
        $(".psvn-sidebar-wrapper").addClass('mobile');
        $(".psvn-main-view").addClass('mobile');

        $('.backdrop').click(function() {
          $('.backdrop').toggleClass('show');  
          $(".psvn-sidebar-wrapper").css('transform','translateX(-500px)');
        });
        $(".psvn-header-menu-icon").click(function(){
                $('.backdrop').toggleClass('show');
        });
        $(".psvn-header-menu-icon").click(function(){
            $(".psvn-sidebar-wrapper").css({'transform': 'translateX(0)','z-index': '3'});
        });  
      }         
    });    
  });
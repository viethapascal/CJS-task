  	$(document).ready(function(){
  		$(window).on("scroll touchmove", function() {

  				$('#header_nav').toggleClass('tiny',$(window).scrollTop()>0);

  		});

  	});

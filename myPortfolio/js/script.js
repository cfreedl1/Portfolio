// ============== Local JS ==============

//Loading Screen
$(window).on("load", function() {
//load screen
  $("#load-screen").fadeOut("slow");

     });



$(document).ready(function() {
//Digital Art slide show	
	$('.slide-show').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
		slidesToShow: 1,
  		adaptiveHeight: true
	});
});


$(document).mousemove(function(e){
	$('.cursor').css({left:e.pageX, top:e.pageY});
  });









$(document).ready(function() {  
  $(window).scroll(function () {
  		if ($(this).scrollTop() > 695) {
  		  $(".navbar").addClass("fus-navbar-solid");
  		} else {
  			$(".navbar").removeClass("fus-navbar-solid");
  		}
  	});
});

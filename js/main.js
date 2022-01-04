$(document).ready(function () {



	//Navbar
	let nav_offset_top = $('#header').height() + 50;

	function navbarFixed() {
		if ($('#header').length) {
			$(window).scroll(function () {
				let scroll = $(window).scrollTop();

				if (scroll >= nav_offset_top) {
					$('#header .main').addClass('nav_fixed');
				} else {
					$('#header .main').removeClass('nav_fixed');
				}
			});
		}
	}
	navbarFixed();

	// Wow
	new WOW().init();

});
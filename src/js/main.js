(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	window.onscroll = function () {
		var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winscroll / height) * 100;
		document.getElementById('progress-bar').style.width = `${scrolled}%`;
		document.getElementById('progress-bar').title = `Visited ${(scrolled).toFixed(1)}% of the page`;
		document.getElementById('progress-bar-container').title = `Left ${(100 - scrolled).toFixed(1)}% of the site to visit`
	}

	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(150).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});

	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});

	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 90,
			loop: true,
			backDelay: 500,
			backSpeed: 25
		});
	}

	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

$(function () {
	var origTitle, animatedTitle, timer;

	function animateTitle(newTitle) {
		var currentState = false;
		origTitle = document.title;
		animatedTitle = "I'm still here 😔";
		timer = setInterval(startAnimation, 3000);

		function startAnimation() {
			document.title = currentState ? origTitle : animatedTitle;
			currentState = !currentState;
		}
	}

	function restoreTitle() {
		clearInterval(timer);
		document.title = origTitle;
	}

	$(window).blur(function () {
		animateTitle();
	});

	$(window).focus(function () {
		restoreTitle();
	});

});

$(document).ready(function () {
	$("#inputed").on("keyup", function () {
		let value = $(this).val().toLowerCase();
		$("#FRs").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

function resumeon() {
	document.write("<div style='color: #6c757d; text-align: center; padding: 15px; font-weight: 800; font-size: 25px;'> <h1 style='font-size: 55; color: black;'>404</h1> <br> Ooops!!   There's nothing to see here</div > ");
}
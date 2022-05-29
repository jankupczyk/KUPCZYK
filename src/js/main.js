(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	function getAgeB(dateString) {
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}
	document.getElementById('my-year').innerHTML = (`I'm ${getAgeB("2001/06/01")} years old `);

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
			$('#preloader').delay(200).fadeOut('slow', function () {
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

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-down').fadeIn('slow');
		} else {
			$('.back-to-down').fadeOut('slow');
		}
	});
	$('.back-to-down').click(function () {
		$('html, body').animate({ scrollTop: 15000 }, 1500, 'easeInOutExpo');
		return false;
	});

	$('.scrolldown-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1800) {
			$('#accessibilityBar button#universalAccessBtn').fadeIn('slow');
		} else {
			$('#accessibilityBar button#universalAccessBtn').fadeOut('slow');
		}
	});
	$('#accessibilityBar button#universalAccessBtn').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1700, 'easeInOutExpo');
		return false;
	});

	$('.counter').counterUp({
		delay: 20,
		time: 2300
	});

	$('.count').counterUp({
		delay: 15,
		time: 2900
	});

	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 7)
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
			typeSpeed: 70,
			loop: true,
			backDelay: 350,
			backSpeed: 25
		});
	}

	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 5225,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

$(document).ready(function () {
	$("#inputed").on("keyup", function () {
		let value = $(this).val().toLowerCase();
		$("#FRs").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/jankupczyk.github.ioKUPCZYK/visits')
		.then(res => res.json())
		.then(res => {
			countEl.innerHTML = res.value;
		})
}

$(function () {
	$('.scroll-down').click(function () {
		$('html, body').animate({ scrollTop: $('section#about').offset().top }, 'slow');
		return false;
	});
});

var origTitle = document.title;

function updateToOldTitle() {
	document.title = origTitle;
}

function updateToNewTitle() {
	document.title = 'Come Back!';
}

window.onblur = updateToNewTitle;
window.onfocus = updateToOldTitle;

{
	if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
		console.log('%c Cached data successful using OPR OPERA', 'color: #BF40BF')
	}
	else if (navigator.userAgent.indexOf("Edg") != -1) {
		console.log('%c Cached data successful using Microsoft Edge!', 'color: #BF40BF');
	}
	else if (navigator.userAgent.indexOf("Chrome") != -1) {
		console.log('%c Cached data successful using Google Chrome!', 'color: #BF40BF');
	}
	else if (navigator.userAgent.indexOf("Safari") != -1) {
		console.log('%c Cached data successful using Apple Safari!', 'color: #BF40BF');
	}
	else if (navigator.userAgent.indexOf("Brave") != -1) {
		console.log('%c Cached data successful using Brave Browser!', 'color: #BF40BF');
	}
	else if (navigator.userAgent.indexOf("Firefox") != -1) {
		console.log('%c Cached data successful using Mozilla Firefox!', 'color: #BF40BF');
	}
	else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
		console.log('%c Cached data successful using MSIE!', 'color: #BF40BF');
	}
	else {
		console.log('%c Error occurred while fetching browser data, sorry :( :(', 'color: #EE4B2B');
	}
}

window.addEventListener('online', () => console.log('%c Session-Tag: Session is currently online', 'color: #8fe38f'));
window.addEventListener('offline', () => console.log('%c Session-Tag: Session is currently offline, make sure you have internet connection!', 'color: #EE4B2B'));

function search_bar_wrk() {
	let input = document.getElementById('inputed').value
	input = input.toLowerCase();
	let x = document.getElementsByClassName('card card-blog');

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		}
		else {
			x[i].style.display = "list-item";
		}
	}
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})
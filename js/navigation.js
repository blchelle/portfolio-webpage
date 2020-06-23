function scrollPageTo(selector) {
	$('html, body').animate({
		scrollTop: $(selector).offset().top
	}, 500)
}

// Create an click listener for the header button to scroll to the about section 
const headerBtn =  $('.header__btn');
const headerNavAboutBtn = $('.header__nav__list__item--about');
const headerNavSkillsBtn = $('.header__nav__list__item--skills');
const headerNavProjectsBtn = $('.header__nav__list__item--projects');
const headerNavContactBtn = $('.header__nav__list__item--contact');
headerBtn.click(() => scrollPageTo('.about'));
headerNavAboutBtn.click(() => scrollPageTo('.about'));
headerNavSkillsBtn.click(() => scrollPageTo('.skills'));
headerNavProjectsBtn.click(() => scrollPageTo('.projects'));
headerNavContactBtn.click(() => scrollPageTo('.contact'));

// Show a navbar once after 1 full screen scroll
const navbar = $('.navbar');
const navbarList = $('.navbar__list');
const navbarAboutBtn = $('.navbar__list__item--about');
const navbarSkillsBtn = $('.navbar__list__item--skills');
const navbarProjectsBtn = $('.navbar__list__item--projects');
const navbarContactBtn = $('.navbar__list__item--contact');
navbarAboutBtn.click(() => scrollPageTo('.about'));
navbarSkillsBtn.click(() => scrollPageTo('.skills'));
navbarProjectsBtn.click(() => scrollPageTo('.projects'));
navbarContactBtn.click(() => scrollPageTo('.contact'));

window.onscroll = function() {
	if (window.pageYOffset >= window.innerHeight) {
		navbar.addClass('stick');
		navbarList.removeClass('hidden');
	} else {
		navbar.removeClass('stick');
		navbarList.addClass('hidden')
	}
}
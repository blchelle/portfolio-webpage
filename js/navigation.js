function scrollPageTo(element) {
	$('html, body').animate(
		{
			scrollTop: element.offset().top - NAVBAR_HEIGHT,
		},
		500,
	);
}

function selectNavBarItem(element, autoscrollTriggered) {
	element.addClass('selected');
	navbarItems.forEach((navItem) => {
		if (navItem !== element) {
			navItem.removeClass('selected');
		}
	});
}

function scrollHandler() {
	const scrollDistance = window.pageYOffset;
	if (
		scrollDistance > 0 &&
		scrollDistance < about.offset().top - (NAVBAR_HEIGHT + 5)
	) {
		selectNavBarItem(navbarHomeBtn);
	} else if (
		scrollDistance >= about.offset().top - (NAVBAR_HEIGHT + 5) &&
		scrollDistance < skills.offset().top - (NAVBAR_HEIGHT + 5)
	) {
		selectNavBarItem(navbarAboutBtn);
	} else if (
		scrollDistance >= skills.offset().top - (NAVBAR_HEIGHT + 5) &&
		scrollDistance < projects.offset().top - (NAVBAR_HEIGHT + 5)
	) {
		selectNavBarItem(navbarSkillsBtn);
	} else if (
		scrollDistance >= projects.offset().top - (NAVBAR_HEIGHT + 5) &&
		scrollDistance < contact.offset().top - (NAVBAR_HEIGHT + 5)
	) {
		selectNavBarItem(navbarProjectsBtn);
	} else if (scrollDistance >= contact.offset().top - (NAVBAR_HEIGHT + 5)) {
		selectNavBarItem(navbarContactBtn);
	}
}

const NAVBAR_HEIGHT = 80;

$(document).ready(scrollHandler);

// Get all of the sections
const header = $('.header');
const about = $('.about');
const skills = $('.skills');
const projects = $('.projects');
const contact = $('.contact');

const learnMoreButton = $('.header__btn');
learnMoreButton.click(() => scrollPageTo(about));

// Show a navbar once after 1 full screen scroll
const navbar = $('.navbar');
const navbarList = $('.navbar__list');
const navbarHomeBtn = $('.navbar__item--home a');
const navbarAboutBtn = $('.navbar__item--about a');
const navbarSkillsBtn = $('.navbar__item--skills a');
const navbarProjectsBtn = $('.navbar__item--projects a');
const navbarContactBtn = $('.navbar__item--contact a');
const navbarItems = [
	navbarHomeBtn,
	navbarAboutBtn,
	navbarSkillsBtn,
	navbarProjectsBtn,
	navbarContactBtn,
];
navbarHomeBtn.click(() => scrollPageTo(header));
navbarAboutBtn.click(() => scrollPageTo(about));
navbarSkillsBtn.click(() => scrollPageTo(skills));
navbarProjectsBtn.click(() => scrollPageTo(projects));
navbarContactBtn.click(() => scrollPageTo(contact));

window.onscroll = scrollHandler;

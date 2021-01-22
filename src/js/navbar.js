import $ from 'jquery'

/**
 * Scroll the page to a element on the page
 * @param {JQuery} element An element that exists in the DOM
 */
function scrollPageTo(element) {
	$('html, body').animate(
		{
			scrollTop: element.offset().top,
		},
		400
	)
}

/**
 * Set the styling on the navbar to select the passed in element
 * and deselect all other elements in the navbar
 * @param {JQuery} element The navbar element
 */
function selectNavBarItem(element) {
	element.addClass('selected')
	navbarItems.forEach((navItem) => {
		if (navItem !== element) {
			navItem.removeClass('selected')
		}
	})
}

/**
 * Listens for page scrolls and selects the navbar item corresponding
 * with the section of the page that the user is currently scrolled to
 */
function scrollHandler() {
	const scrollDistance = window.pageYOffset
	const navbarHeight = navbar.outerHeight()
	if (scrollDistance >= 0 && scrollDistance < about.offset().top - (navbarHeight + 5)) {
		selectNavBarItem(navbarHomeBtn)
		highlightItem('home')
	} else if (
		scrollDistance >= about.offset().top - (navbarHeight + 5) &&
		scrollDistance < skills.offset().top - (navbarHeight + 5)
	) {
		selectNavBarItem(navbarAboutBtn)
		highlightItem('about')
	} else if (
		scrollDistance >= skills.offset().top - (navbarHeight + 5) &&
		scrollDistance < projects.offset().top - (navbarHeight + 5)
	) {
		selectNavBarItem(navbarSkillsBtn)
		highlightItem('skills')
	} else if (
		scrollDistance >= projects.offset().top - (navbarHeight + 5) &&
		scrollDistance < contact.offset().top - (navbarHeight + 5)
	) {
		selectNavBarItem(navbarProjectsBtn)
		highlightItem('projects')
	} else if (scrollDistance >= contact.offset().top - (navbarHeight + 5)) {
		selectNavBarItem(navbarContactBtn)
		highlightItem('contact')
	}
}

/**
 * Listen for changes to the screen size
 * If the width is under 700px, then use the mobile navbar
 * Otherwise, use the full size navbar
 */
function resizeHandler() {
	if ($(window).width() < 700) {
		navbar.addClass('navbar--mobile')
		navbar.removeClass('navbar')
	} else {
		navbar.removeClass('navbar--mobile')
		navbar.addClass('navbar')
	}
}

function highlightItem(name) {
	navbar.removeClass('home-selected')
	navbar.removeClass('about-selected')
	navbar.removeClass('skills-selected')
	navbar.removeClass('projects-selected')
	navbar.removeClass('contact-selected')

	navbar.addClass(`${name}-selected`)
}

// Commented out for now, will maybe use in the future
// function getTheme() {
// 	const currentTheme = window.localStorage.getItem('theme');

// 	if (currentTheme) {
// 		$('body').removeClass();
// 		$('body').addClass(currentTheme);
// 	}
// }

// Query for the navbar and each of the sections
const navbar = $('.navbar')
const header = $('.header')
const about = $('.about')
const skills = $('.skills')
const projects = $('.projects')
const contact = $('.contact')

const learnMoreButton = $('.header__btn')
learnMoreButton.click(() => scrollPageTo(about))

// Query for all the navbar buttons
const navbarHomeBtn = $('.navbar__item--home')
const navbarAboutBtn = $('.navbar__item--about')
const navbarSkillsBtn = $('.navbar__item--skills')
const navbarProjectsBtn = $('.navbar__item--projects')
const navbarContactBtn = $('.navbar__item--contact')
const navbarItems = [
	navbarHomeBtn,
	navbarAboutBtn,
	navbarSkillsBtn,
	navbarProjectsBtn,
	navbarContactBtn,
]

// Set up click handlers for each of the navbar buttons
navbarHomeBtn.click(() => {
	scrollPageTo(header)
})
navbarAboutBtn.click(() => {
	scrollPageTo(about)
})
navbarSkillsBtn.click(() => {
	scrollPageTo(skills)
})
navbarProjectsBtn.click(() => {
	scrollPageTo(projects)
})
navbarContactBtn.click(() => {
	scrollPageTo(contact)
})

// Trigger the scroll handler when the window scrolls or on page load
window.onscroll = scrollHandler
$(document).ready(() => {
	scrollHandler()
	resizeHandler()
	// getTheme();
})
$(window).resize(resizeHandler)

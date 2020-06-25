function scrollContainerTo(pageNumber) {
	const newPosition = pageNumber * skillsContainer.width() 
	skillsContainer.animate(
		{
			scrollLeft: newPosition,
		},
		500,
	);
	currentPage = pageNumber;
}

function setCategoryClasses(element, array) {
	element.addClass('selected');

	array.forEach((category, index) => {
		if (category !== element) {
			category.removeClass('selected');
			sectionSelectors.removeClass(`category-${index + 1}`);
		} else sectionSelectors.addClass(`category-${index + 1}`);
	});
}

function categorySelection(category) {
	if (category === 'web' && currentPage !== 0) {
		setCategoryClasses(webSelector, categorySelectors);
		scrollContainerTo(0);
	} else if (category === 'languages') {
		setCategoryClasses(languagesSelector, categorySelectors);
		scrollContainerTo(1);
	} else if (category === 'databases') {
		setCategoryClasses(databasesSelector, categorySelectors);
		scrollContainerTo(2);
	} else if (category === 'other') {
		setCategoryClasses(otherSelector, categorySelectors);
		scrollContainerTo(3);
	}
}

// Get selectors for each of the category selectors
const sectionSelectors = $('.skills__categories');
const skillsContainer = $('.skills__container');

// Get elements for all of the pages
const webSkillsPage = $('.skills__page--web');
const languagesSkillsPage = $('.skills__page--languages');
const databasesSkillsPage = $('.skills__page--databases');
const otherSkillsPage = $('.skills__page--other');

const webSelector = $('.skills__category--web');
const languagesSelector = $('.skills__category--languages');
const databasesSelector = $('.skills__category--databases');
const otherSelector = $('.skills__category--other');
const categorySelectors = [webSelector, languagesSelector, databasesSelector, otherSelector];
webSelector.click(() => categorySelection('web'));
languagesSelector.click(() => categorySelection('languages'));
databasesSelector.click(() => categorySelection('databases'));
otherSelector.click(() => categorySelection('other'));

let currentPage = 0;
$(window).resize(() => categorySelection('web'));
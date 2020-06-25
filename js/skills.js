/**
 * Scrolls the skillsContainer to a specific page
 * Page 1 - Web Skills
 * Page 2 - Programming Language Skills
 * Page 3 - Database Skills
 * Page 4 - Other Skills
 * @param {number} pageNumber The page number to scroll the container to
 */
function scrollContainerTo(pageNumber) {
	// Calculate the new x position
	const newPosition = pageNumber * skillsContainer.width();

	// Scroll the skillsContainer to the calculated position
	skillsContainer.animate(
		{
			scrollLeft: newPosition,
		},
		500,
	);
	currentPage = pageNumber;
}

/**
 * Adds the 'selected class' to the element and removes it from all other
 * member of the array. Also moves the horizontal sliding bar below the
 * selected element
 *
 * @param {JQuery} element The selected element
 */
function setCategoryClasses(element) {
	element.addClass('selected');

	// Remove the class from all array members that are not the element
	categorySelectors.forEach((category, index) => {
		if (category !== element) {
			category.removeClass('selected');
			categoryList.removeClass(`category-${index + 1}`);
		} else categoryList.addClass(`category-${index + 1}`);
	});
}

/**
 * Sets the category selector element to the category which was selected
 * 1. Animate the horizontal sliding bar to go under the selected category
 * 2. Scroll the container to the corresponding category
 * @param {number} pageNumber The page number to select
 * @param {JQuery} categorySelector The element in the categoryList to select
 */
function categorySelection(pageNumber, categorySelector) {
	if (pageNumber === currentPage) return;

	setCategoryClasses(categorySelector);
	scrollContainerTo(pageNumber);
}

// Query for the categoryList and skillsContainer
const categoryList = $('.skills__categories');
const skillsContainer = $('.skills__container');

// Query for each of the category selectors in the categoryList
const webSelector = categoryList.find('.skills__category--web');
const languagesSelector = categoryList.find('.skills__category--languages');
const databasesSelector = categoryList.find('.skills__category--databases');
const otherSelector = categoryList.find('.skills__category--other');
const categorySelectors = [webSelector, languagesSelector, databasesSelector, otherSelector];

// Create click handlers for each of the category selectors
webSelector.click(() => categorySelection(0, webSelector));
languagesSelector.click(() => categorySelection(1, languagesSelector));
databasesSelector.click(() => categorySelection(2, databasesSelector));
otherSelector.click(() => categorySelection(3, otherSelector));

let currentPage = 0;
$(window).resize(() => categorySelection(0, webSelector));
$(document).ready(() => categorySelection(0, webSelector));

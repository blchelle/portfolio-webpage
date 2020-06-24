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
	if (category === 'web') {
		setCategoryClasses(webSelector, categorySelectors);
	} else if (category === 'languages') {
		setCategoryClasses(languagesSelector, categorySelectors);
	} else if (category === 'databases') {
		setCategoryClasses(databasesSelector, categorySelectors);
	} else if (category === 'other') {
		setCategoryClasses(otherSelector, categorySelectors);
	}
}

// Get selectors for each of the category selectors
const sectionSelectors = $('.skills__categories');

const webSelector = $('.skills__category--web');
const languagesSelector = $('.skills__category--languages');
const databasesSelector = $('.skills__category--databases');
const otherSelector = $('.skills__category--other');
const categorySelectors = [webSelector, languagesSelector, databasesSelector, otherSelector];
webSelector.click(() => categorySelection('web'));
languagesSelector.click(() => categorySelection('languages'));
databasesSelector.click(() => categorySelection('databases'));
otherSelector.click(() => categorySelection('other'));

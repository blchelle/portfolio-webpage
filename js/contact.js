/**
 * Check the input element, if the input has 0 characters, lower the placeholder
 * Otherwise, raise the placeholder above the input field
 * @param {JQuery} inputElement The input element currently being used
 */
function checkInput(inputElement) {
	if (inputElement.val().toString().length == 0) {
		inputElement.siblings('label').removeClass('raised');
	} else {
		inputElement.siblings('label').addClass('raised');
	}

	if (inputElement.is(':invalid')) {
		inputElement.siblings('label').addClass('error');
	} else {
		inputElement.siblings('label').removeClass('error');
	}
}

// Query for each of the input boxes
const nameInput = $('input#name');
const emailInput = $('input#email');
const subjectInput = $('input#subject');
const messageInput = $('textarea#message');

nameInput.on('input', () => checkInput(nameInput));
emailInput.on('input', () => checkInput(emailInput));
subjectInput.on('input', () => checkInput(subjectInput));
messageInput.on('input', () => checkInput(messageInput));

nameInput.focusout(() => nameInput.addClass('visited'));
emailInput.focusout(() => emailInput.addClass('visited'));
subjectInput.focusout(() => subjectInput.addClass('visited'));
messageInput.focusout(() => messageInput.addClass('visited'));

$(document).ready(() => {
	checkInput(nameInput);
	checkInput(emailInput);
	checkInput(subjectInput);
	checkInput(messageInput);
});

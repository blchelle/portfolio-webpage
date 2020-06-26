/**
 * Check the input element, if the input has 0 characters, lower the placeholder
 * Otherwise, raise the placeholder above the input field
 * @param {JQuery} inputElement The input element currently being used
 */
function checkInput(inputElement) {
	console.log('t');
	if (inputElement.val().toString().length == 0) {
		inputElement.siblings('label').removeClass('raised');
	} else {
		inputElement.siblings('label').addClass('raised');
	}
}

// Query for each of the input boxes
const nameInput = $('input#name');
const emailInput = $('input#email');
const phoneInput = $('input#phone');
const messageInput = $('textarea#message');

nameInput.on('input', () => checkInput(nameInput));
emailInput.on('input', () => checkInput(emailInput));
phoneInput.on('input', () => checkInput(phoneInput));
messageInput.on('input', () => checkInput(messageInput));

$(document).ready(() => {
	checkInput(nameInput);
	checkInput(emailInput);
	checkInput(phoneInput);
	checkInput(messageInput);
});

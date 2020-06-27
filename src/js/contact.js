import $ from 'jquery';

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

/**
 * Handle a form submission
 *
 */
// async function submitForm(event) {
// 	event.preventDefault();

// 	try {
// 		const formData = {
// 			name: nameInput.val(),
// 			email: emailInput.val(),
// 			details: messageInput.val(),
// 		};

// 		console.log(formData);

// 		const response = await fetch('/.netlify/functions/sendFormSubmission', {
// 			method: 'POST',
// 			body: JSON.stringify(formData),
// 		});

// 		if (!response.ok) return;
// 	} catch (err) {
// 		console.log(error);
// 	}
// }

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

// const submitButton = $('button[type=submit]');
// submitButton.click(submitForm);

$(document).ready(() => {
	checkInput(nameInput);
	checkInput(emailInput);
	checkInput(subjectInput);
	checkInput(messageInput);
});

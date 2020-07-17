import $ from 'jquery';

class TypeWriterAnimation {
	/**
	 *
	 * @param {JQuery} element The html element to apply the typewriter animation to
	 * @param {String[]} textArray The array of strings to type
	 * @param {Number} period The time period (in ms) to pause between typing and deleting
	 */
	constructor(element, textArray, period) {
		this.element = element;
		this.textArray = textArray;
		this.period = period;

		this.loopNum = 0;
		this.text = '';
		this.isDeleting = false;
		this.tick();
	}

	/**
	 * Animates the typing or deleting of a letter
	 */
	tick() {
		// Get the index of the word being typed, and then get the word
		const i = this.loopNum % this.textArray.length;
		const fullText = this.textArray[i];

		// If deleting, subtract a letter, otherwise add a letter
		if (this.isDeleting) this.text = fullText.substring(0, this.text.length - 1);
		else this.text = fullText.substring(0, this.text.length + 1);

		// Set the html of the element to match the world
		this.element.html(`<span class="wrap">${this.text}</span>`);

		const next = this;

		// Calculate the time in milliseconds to type the next letter (with a bit of randomness)
		let typingSpeed = 60 + (Math.random() * 20 - 10);

		// Make deleting twice as fast
		if (this.isDeleting) typingSpeed /= 2;

		// If the full word has been typed, set isDeleting to true
		if (!this.isDeleting && this.text === fullText) {
			typingSpeed = this.period;
			this.isDeleting = true;
		}
		// If the full word has been deleted, set isDeleting to false
		else if (this.isDeleting && this.text === '') {
			this.isDeleting = false;
			this.loopNum++;
			typingSpeed = 500;
		}

		setTimeout(function () {
			next.tick();
		}, typingSpeed);
	}
}

$(window).ready(function () {
	// Query for the roleText element to add the typewriter animation to
	const roleText = $('#typewriter-animation');

	// Pull the various texts and period off of the attribute
	const toRotate = roleText.attr('data-rotate');
	const period = roleText.attr('data-period');

	if (toRotate) {
		new TypeWriterAnimation(roleText, JSON.parse(toRotate), parseInt(period, 10) || 500);
	}

	// Inject css for the cursor
	const css = document.createElement('style');
	css.type = 'text/css';
	css.innerHTML = '#typewriter-animation > .wrap { border-right: 0.1rem solid var(--color-text)}';
	document.body.appendChild(css);
});
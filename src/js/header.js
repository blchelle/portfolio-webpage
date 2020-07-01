import $ from 'jquery';

/**
 *
 * @param {*} el
 * @param {*} toRotate
 * @param {*} period
 */
var typewriterAnimation = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

typewriterAnimation.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 120 - Math.random() * 20;

	if (this.isDeleting) {
		delta /= 1.5;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName('typewriter-animation');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new typewriterAnimation(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement('style');
	css.type = 'text/css';
	css.innerHTML = '.typewriter-animation > .wrap { border-right: 0.08em solid var(--color-text)}';
	document.body.appendChild(css);
};

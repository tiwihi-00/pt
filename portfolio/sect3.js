



gsap.registerPlugin(ScrollTrigger);

gsap.to(".Project_wrap .item01", {
	scrollTrigger: {
		trigger: ".Project_wrap .cont01",
		start: "-100% top",
		toggleClass: { targets: '.Project_wrap .item01', className: 'on' },
		scrub: 2,
	}
});

gsap.to(".Project_wrap .item02", {
	scrollTrigger: {
		trigger: ".Project_wrap .cont02",
		start: "top top",
		toggleClass: { targets: '.Project_wrap .item02', className: 'on' },
		scrub: 2,
	}
});

gsap.to(".Project_wrap .item03", {
	scrollTrigger: {
		trigger: ".Project_wrap .cont03",
		start: "top top",
		toggleClass: { targets: '.Project_wrap .item03', className: 'on' },
		scrub: 2,
	}
});





var swiper = new Swiper(".je-Swiper", {
	loop: true,
	effect: "fade",
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});





var swiper = new Swiper(".t-Swiper", {
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});










function moveToSelected(element) {
	var selected;
	if (element == "next") {
		var selected = $(".selected").next();
	} else if (element == "prev") {
		var selected = $(".selected").prev();
	} else {
		var selected = element;
	}

	var next = $(selected).next();
	var prev = $(selected).prev();
	var prevSecond = $(prev).prev();
	var nextSecond = $(next).next();

	$(selected).removeClass().addClass("selected");

	$(prev).removeClass().addClass("prev");
	$(next).removeClass().addClass("next");

	$(nextSecond).removeClass().addClass("nextRightSecond");
	$(prevSecond).removeClass().addClass("prevLeftSecond");

	$(nextSecond).nextAll().removeClass().addClass('hideRight');
	$(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function (e) {
	switch (e.which) {
		case 37: // left
			moveToSelected('prev');
			break;

		case 39: // right
			moveToSelected('next');
			break;

		default: return;
	}
	e.preventDefault();
});

$('#carousel div').click(function () {
	moveToSelected($(this));
});

$('#prev').click(function () {
	moveToSelected('prev');
});

$('#next').click(function () {
	moveToSelected('next');
});




document.addEventListener('DOMContentLoaded', () => {
	const interBubble = document.querySelector('.interactive');
	let curX = 0;
	let curY = 0;
	let tgX = 0;
	let tgY = 0;

	const move = () => {
		curX += (tgX - curX) / 20;
		curY += (tgY - curY) / 20;
		interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
		requestAnimationFrame(move);
	};

	window.addEventListener('mousemove', (event) => {
		tgX = event.clientX;
		tgY = event.clientY;
	});

	move();
});

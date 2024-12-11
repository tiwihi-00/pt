

var swiper = new Swiper(".textSwiper", {
	direction: "vertical",
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	mousewheel: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});




document.addEventListener('DOMContentLoaded', function () {
	const splideOdd = new Splide('.splide-odd', {
		type: 'loop',
		direction: 'ttb',
		drag: false,
		focus: 'center',
		height: '100%',
		gap: 30,
		autoWidth: true,
		arrows: false,
		pagination: false,
		autoScroll: {
			speed: 1,
			pauseOnHover: true,
			rewind: false,
		},
	});

	const splideEven = new Splide('.splide-even', {
		type: 'loop',
		direction: 'ttb',
		drag: false,
		focus: 'center',
		height: '900px',
		gap: 30,
		autoWidth: true,
		arrows: false,
		pagination: false,
		autoScroll: {
			speed: -1,
			pauseOnHover: true,
			rewind: false,
		},
	});

	splideOdd.mount(window.splide.Extensions);
	splideEven.mount(window.splide.Extensions);
});


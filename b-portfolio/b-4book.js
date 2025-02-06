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
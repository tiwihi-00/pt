var swiper3 = new Swiper(".banner", {
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	spaceBetween: 0,  // 이미지 간 간격을 0으로 설정
	effect: "fade",
	fadeEffect: {
		crossFade: true, // crossFade를 true로 설정하여 부드럽게 전환
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
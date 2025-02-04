var swiper = new Swiper(".mySwiper1", {
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	spaceBetween: 30,
	effect: "fade",
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

});


swiper.on('slideChange', function(){
	const aElems=document.querySelectorAll('.pager-bg a')
	let activeIdx=swiper.realIndex;

	aElems.forEach(function(item){
		item.classList.remove('on')
	});
	aElems[activeIdx].classList.add('on')
});

const aElems=document.querySelectorAll('.pager-bg a')
aElems.forEach(function(a, idx){
	a.addEventListener('click', function(e){
		e.preventDefault();

		aElems.forEach(function(item){
			item.classList.remove('on')
		});
		a.classList.add('on')
		swiper.slideToLoop(idx, 500)
	})
});



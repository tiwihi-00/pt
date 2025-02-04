var swiper4 = new Swiper('.under', {
	slidesPerView: 'auto',
	spaceBetween: 50,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		slideChangeTransitionEnd:function(){
		document.querySelectorAll('.caption').forEach(caption=>{caption.style.display='none'});

		const realIndex=this.realIndex;
		const activeSlides=this.slides;

		activeSlides.forEach(slide=>{
			if(slide.getAttribute('data-swiper-slide-Index') == realIndex){
				const caption=slide.querySelector('.caption');
				if(caption)caption.style.display='block';
			}
		})
	}
	}
})
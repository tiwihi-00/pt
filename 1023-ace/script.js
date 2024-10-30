
const menuItems = document.querySelectorAll('ul.haedM li.One_dep')
const logo = document.querySelector('.logo')

menuItems.forEach(item => {
	item.addEventListener('mouseenter', () => {
		menuItems.forEach(i => i.classList.add('on'))
		logo.style.display = 'none'
	});
	item.addEventListener('mouseleave', () => {
		menuItems.forEach(i => i.classList.remove('on'))
		logo.style.display = 'block'
	})
})

const CmenuItems = document.querySelectorAll('ul.headright li.One_dep')


CmenuItems.forEach(item => {
	item.addEventListener('mouseenter', () => {
		CmenuItems.forEach(i => i.classList.add('on'))
		logo.style.display = 'none'
	});
	item.addEventListener('mouseleave', () => {
		CmenuItems.forEach(i => i.classList.remove('on'))
		logo.style.display = 'block'
	})
})

let prevScollTop = 0
let header = document.querySelector('header')

const sectionElems = document.querySelectorAll('section')
window.addEventListener('scroll', function () {
	let currentScollTop = window.pageYOffset;
	if (currentScollTop > prevScollTop) {
		header.style.top = '-600px';
	} else {
		header.style.top = '0px'
	}
	prevScollTop = currentScollTop;
})

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 100,
	loop: true,

	centeredSlides: true,
	navigation: {
		nextEl: ".swiper-arrow prev",
		prevEl: ".swiper-arrow next",
	},
	mousewheel: true,
	keyboard: true,
});


const prev = document.querySelector('.prev')

const next = document.querySelector('.next')

prev.addEventListener('mouseenter', function (e) {
	e.preventDefault()
	this.querySelector('path').setAttribute('d', 'M 40 10 Q 10 65 40 140')
})
prev.addEventListener('mouseleave', function (e) {
	e.preventDefault()
	this.querySelector('path').setAttribute('d', 'M 40 10 Q 40 65 40 140');
})

next.addEventListener('mouseenter', function (e) {
	e.preventDefault()
	this.querySelector('path').setAttribute('d', 'M 10 10 Q 40 65 10 140');
})
next.addEventListener('mouseleave', function (e) {
	e.preventDefault()
	this.querySelector('path').setAttribute('d', 'M 10 10 Q 10 65 10 140');
})
document.querySelector('.prev').addEventListener('click', function (e) {
	e.preventDefault()
	swiper.slidePrev()
})
document.querySelector('.next').addEventListener('click', function (e) {
	e.preventDefault()
	swiper.slideNext()
})

var swiper2 = new Swiper(".videoes", {
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},

});


document.addEventListener("DOMContentLoaded", function () {
	const bullets = document.querySelectorAll('ul.swiper-bullets li');
	const videos = document.querySelectorAll('.swiper-slide video');
	const texts = document.querySelectorAll('ul.txt_area li');

	const prevButtons = document.querySelectorAll('.prev2');
	const nextButtons = document.querySelectorAll('.next2');

	let currentIndex = 0; // 현재 슬라이드 인덱스

	// 불릿 클릭 이벤트 리스너
	bullets.forEach((bullet, index) => {
		bullet.addEventListener('click', function (e) {
			e.preventDefault();
			updateSlide(index);
		});
	});

	// 이전 버튼 클릭 이벤트 리스너
	prevButtons.forEach(button => {
		button.addEventListener('click', function (e) {
			e.preventDefault();
			currentIndex = (currentIndex === 0) ? bullets.length - 1 : currentIndex - 1; // 이전 슬라이드로 이동
			updateSlide(currentIndex);
		});
	});

	// 다음 버튼 클릭 이벤트 리스너
	nextButtons.forEach(button => {
		button.addEventListener('click', function (e) {
			e.preventDefault();
			currentIndex = (currentIndex === bullets.length - 1) ? 0 : currentIndex + 1; // 다음 슬라이드로 이동
			updateSlide(currentIndex);
		});
	});

	// 슬라이드 업데이트 함수
	function updateSlide(index) {
		// 불릿 클래스 관리
		bullets.forEach(b => b.classList.remove('on'));
		bullets[index].classList.add('on');

		// 비디오 관리
		videos.forEach(video => {
			video.parentElement.classList.remove('on');
			video.pause();
		});
		videos[index].parentElement.classList.add('on');
		videos[index].play();

		// 텍스트 관리
		texts.forEach(text => text.classList.remove('on'));
		texts[index].classList.add('on');
	}
});



document.addEventListener("DOMContentLoaded", function () {
	const prevButtons = document.querySelectorAll('.prev2');
	const nextButtons = document.querySelectorAll('.next2');

	prevButtons.forEach(button => {
		button.addEventListener('mouseenter', function () {
			const path = this.querySelector('path');
			if (path) {
				path.setAttribute('d', 'M 40 10 Q 10 65 40 140');
			}
		});
		button.addEventListener('mouseleave', function () {
			const path = this.querySelector('path');
			if (path) {
				path.setAttribute('d', 'M 40 10 Q 40 65 40 140');
			}
		});
	});

	nextButtons.forEach(button => {
		button.addEventListener('mouseenter', function () {
			const path = this.querySelector('path');
			if (path) {
				path.setAttribute('d', 'M 10 10 Q 40 65 10 140');
			}
		});
		button.addEventListener('mouseleave', function () {
			const path = this.querySelector('path');
			if (path) {
				path.setAttribute('d', 'M 10 10 Q 10 65 10 140');
			}
		});
	});
});
var swiper3 = new Swiper(".se3", {
	pagination: {
		el: ".swiper-pagination",
	},
});
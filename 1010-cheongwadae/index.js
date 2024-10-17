const liElems = document.querySelectorAll('ul.main-ul li.main-menu')

const sections = document.querySelectorAll('section')
const footer = document.querySelector('footer')
const sectLast = sections[sections.length - 1]
const sectLastTop = sectLast.offsetTop

function removeOnClass() {
	liElems.forEach(function (item) {
		item.classList.remove('on');
	});
}

liElems.forEach(function (liElem) {
	liElem.addEventListener('mouseenter', function () {
		removeOnClass();
		liElem.classList.add('on');
	});
});

liElems.forEach(function (liElem) {
	liElem.addEventListener('mouseleave', function () {
		removeOnClass();
	});
});




sections.forEach((sect, i) => {
	sect.addEventListener('wheel', function (e) {
		e.preventDefault();
		let delta = e.deltaY
		if (delta < 0 && i === 0) {
			return
		} if (delta > 0 && i === sections.length - 1) {
			footer.scrollIntoView({ behavior: 'smooth' })
			return
		}
		let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
		if (secTop) {
			let targetSecTop = secTop.offsetTop
			window.scrollTo({ top: targetSecTop, behavior: 'smooth' })

		}

	})
})

// 전체 문서의 길이 페이지 전체가 3000이라고 가정하고
// console.log(document.body.scrollHeight)
// scrollY 2000(scrooltop위치)까지 내렸을 경우
// window.height 1080이라고 가정
// 2000(scrooltop위치)+1080 => 현재 커서 위치

window.addEventListener('wheel', function (e) {
	console.log(document.body.scrollHeight)
	if (e.deltaY < 0 && window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
		e.preventDefault()
		window.scrollTo({ top: sectLastTop, behavior: 'smooth' })
	}
})

const lies = document.querySelectorAll('ul.sitemap-nav li.main-mn');

lies.forEach(function (lie) {
	lie.addEventListener('click', function () {
		// 클릭한 lie가 이미 'on' 클래스를 가지고 있는지 확인
		const isOn = lie.classList.contains('on');

		// 모든 lie에서 'on' 클래스를 제거
		lies.forEach(function (item) {
			item.classList.remove('on');
		});

		// 클릭한 lie가 원래 'on' 클래스를 가지고 있지 않았다면, 'on' 클래스 추가
		if (!isOn) {
			lie.classList.add('on');
		}
	});
});


const xbtn = document.querySelector('.close-map-btn');
const sitemapBox = document.querySelector('.sitemap-box');
const bar = document.querySelector('ul.gnb li.btn')

bar.addEventListener('click', function (e) {
	e.preventDefault()
	sitemapBox.classList.add('on')
})

xbtn.addEventListener('click', function (e) {
	e.preventDefault();
	sitemapBox.classList.remove('on');

});

// 슬라이드 박스 클릭 시 이벤트
const sliElems = document.querySelectorAll('.slide2-box');


// sliElems.forEach(function(sliElem, idx) {
//     sliElem.addEventListener('click', function(e) {
//         e.preventDefault();

//         sliElems.forEach(function(item) {
//             item.classList.remove('on');
//         });


//         sliElem.classList.add('on');


//         swiper2.slideToLoop(idx, 500);
//     });
// });


document.querySelector('.left-btn').addEventListener('click', function (e) {
	e.preventDefault();
	swiper2.slidePrev();
});


document.querySelector('.right-btn').addEventListener('click', function (e) {
	e.preventDefault();
	swiper2.slideNext();
});

const homenus = document.querySelectorAll('ul.mn-list li')

function hremoveOnClass() {
	homenus.forEach(function (item) {
		item.classList.remove('on');
	});
}


homenus.forEach(function (homenu) {
	homenu.addEventListener('mouseenter', function () {
		hremoveOnClass()
		homenu.classList.add('on')
	})
});

homenus.forEach(function (homenu) {
	homenu.addEventListener('mouseleave', function () {
		hremoveOnClass()

	})
});


// const inUl = document.querySelector('.in-ul')

// const inboxs = document.querySelectorAll('.in-box')

// const prevBtn = document.querySelector('.prev-btn')
// const nextBtn = document.querySelector('.next-btn')
// let currentIndex = 0;
// const totalSlides = inboxs.length;

// function updateSlide() {
// 	inUl.computedStyleMap.marginLeft = `-${currentIndex * 25}%`;
// }

// prevBtn.addEventListener('click', (e) => {
// 	e.preventDefault()
// 	if (currentIndex > 0) {
// 		currentIndex--;
// 		updateSlide();
// 	}
// })

// nextBtn.addEventListener('click', (e) => {
// 	e.preventDefault()
// 	if (currentIndex < totalSlides - 1) {
// 		currentIndex++;
// 		updateSlide();
// 	}

// })

$(document).ready(function () {
	$('li.lilist a').click(function (e) {
		e.preventDefault();
		let href = $(this).attr('href')
	
		$('li.lilist a').removeClass('on');
		$(this).addClass('on')

		
		$('.tab').removeClass('on');
		$(href).addClass('on');
		
	})
})
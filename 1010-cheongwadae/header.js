const liElems = document.querySelectorAll('ul.main-ul li.main-menu')

// const sections = document.querySelectorAll('section')
// const footer = document.querySelector('footer')
// const sectLast = sections[sections.length - 1]
// const sectLastTop = sectLast.offsetTop

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

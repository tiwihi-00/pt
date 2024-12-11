

const articles = gsap.utils.toArray('.work__item')
gsap.to(articles, {
	xPercent: -100 * (articles.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: '#work',
		start: 'top top',
		end: '+=3000',
		pin: true,
		scrub: 1,
		snap: 'none'
	}
})
document.querySelectorAll('.work__item').forEach(function (art) {
	art.addEventListener('mouseenter', function () {
		let bg = art.getAttribute('data-bg')

		document.querySelector('#work').style.background = `url(${bg})`;
	})
})

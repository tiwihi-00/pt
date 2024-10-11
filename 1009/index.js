const listElems = document.querySelectorAll('ul.navi li')

const sections = document.querySelectorAll('section')

listElems.forEach((li) => {
	const link = li.querySelector('a[href^="#"]')


	link.addEventListener('click', function (e) {
		e.preventDefault()
		const href = this.getAttribute('href')
		const secTop = document.querySelector(href)

		window.scrollTo({
			top: secTop.offsetTop,
			behavior: 'smooth'
		})
	})
})

sections.forEach((sect, i) => {
	sect.addEventListener('wheel', function (e) {
		e.preventDefault();
		let delta = e.deltaY
		if (delta < 0 && i === 0) {
			return
		} else if (delta > 0 && i === sections.length - 1) {
			return
		}
		let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
		if (secTop) {
			let targetSecTop = secTop.offsetTop
			window.scrollTo({ top: targetSecTop, behavior: 'smooth' })
		}
	})
});

window.addEventListener('scroll', function(){
	let scrollTop = document.documentElement.scrollTop

	sections.forEach((section, i) =>{
		let sectionTop=section.offsetTop
		if(scrollTop >= sectionTop - 100){
			for (const li of listElems){
				li.classList.remove('on')
			}
			for (const sec of sections){
				sec.classList.remove('on')
			}
			listElems[i].classList.add('on')
			sections[i].classList.add('on')
		}
	})


})
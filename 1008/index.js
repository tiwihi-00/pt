// const links = document.querySelectorAll('a[href^="#sect1')
// links.forEach((link) => {
// 	link.addEventListener('click', function (e) {
// 		e.preventDefault()
// 		const href = this.getAttribute('href')
// 		const sect = document.querySelector(href)
// 		sect.scrollIntoView({
// 			behavior: 'smooth',
// 			block: 'center'
// 		})
// 	})
// })

// 페이지가 로드된 후 h2 요소를 선택하고 함수를 호출
document.addEventListener('DOMContentLoaded', function () {
	let h2 = document.querySelector('.secth-head h2');
	
	// 텍스트를 나누고 애니메이션 적용
	splitText(h2);
	moveUp(h2);

	// 나중에 애니메이션을 초기화하고 싶으면 이 코드를 사용
	// resetText(h2);
});

// h2 텍스트를 각 문자로 나누는 함수
function splitText(h2) {
	const txt = h2.innerText;
	
	let tags = '';
	txt.split('').forEach((letter) => {
		tags += `<span>${letter}</span>`;
	});
	h2.innerHTML = tags;
}

// 애니메이션으로 텍스트가 위로 올라가는 효과를 적용하는 함수
function moveUp(h2) {
	const spans = h2.querySelectorAll('span');
	
	spans.forEach((span, i) => {
		span.style.transitionDelay = `${i * 0.1}s`;
		span.style.transform = "translateY(0)";
		span.style.opacity = 1;
	});
}

// 텍스트를 초기 상태로 되돌리는 함수
function resetText(h2) {
	const spans = h2.querySelectorAll('span');
	spans.forEach((span) => {
		span.style.transform = "translateY(100%)";
		span.style.opacity = 0;
	});
}

const listElems = document.querySelectorAll('ul.navi li')
const sections = document.querySelectorAll('section')


listElems.forEach((li) => {
	const link = li.querySelector('a[href^="#sect"]')

	link.addEventListener('click', function (e) {
		e.preventDefault();
		
		const href = this.getAttribute('href')
		const secTop = document.querySelector(href)

		window.scrollTo({
			top: secTop.offsetTop,
			behavior: 'smooth'
		})
	})
});

sections.forEach((sect, i) => {
	sect.addEventListener('wheel', function (e) {
		e.preventDefault();
		let delta = e.deltaY
		//weel을 down하면 +값이 발생되고 weel을 up 하면 -값이 발생
		if (delta < 0 && i === 0) {
			return//해당 조건이면 명령loop를 빠져나감

			//배열의 index는 [0, 1, 2, 3]이고 갯수는 4개이므로 -1
		} else if (delta > 0 && i === sections.length - 1) {
			return

		}
		//3함연산자 : 조건식?참:거짓
		let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
		if (secTop) {
			let targetSecTop = secTop.offsetTop
			window.scrollTo({ top: targetSecTop, behavior: 'smooth' })
		}
	})
})

window.addEventListener('scroll', function () {
	//document의 새로운 위치값
	let scrollTop = document.documentElement.scrollTop
	//열린 창의 높이값 가져오기
	// let winHeight = window.innerHeight
	// for (const li of listElems) {
	// 	li.classList.remove('on')
	// }
	// for (const sec of sections) {
	// 	sec.classList.remove('on')
	// }

	// if (scrollTop >= 0 && scrollTop < winHeight) {
	// 	listElems[0].classList.add('on')
	// 	sections[0].classList.add('on')
	// }

	// if (scrollTop >= winHeight && scrollTop < winHeight*2) {
	// 	listElems[1].classList.add('on')
	// 	sections[1].classList.add('on')
	// }
	// if (scrollTop >= winHeight *2 && scrollTop < winHeight*3) {
	// 	listElems[2].classList.add('on')
	// 	sections[2].classList.add('on')
	// }
	// if (scrollTop >= winHeight *3 && scrollTop < winHeight*4) {
	// 	listElems[3].classList.add('on')
	// 	sections[3].classList.add('on')
	// }
	// if (scrollTop >= winHeight *4 && scrollTop < winHeight*5) {
	// 	listElems[4].classList.add('on')
	// 	sections[4].classList.add('on')
	// }
	// for (let i = 0; i < sections.length; i++) {
	// 	if (scrollTop >= winHeight * i && scrollTop < winHeight * (i + 1)) {
	// 		listElems[i].classList.add('on')
	// 		sections[i].classList.add('on')
	// 	}
	// }


	sections.forEach((section, i) => {
		let sectionTop = section.offsetTop
		if (scrollTop >= sectionTop - 100) {
			for (const li of listElems) {
				li.classList.remove('on')
			}
			for (const sec of sections) {
				sec.classList.remove('on')
			}
			listElems[i].classList.add('on')
			sections[i].classList.add('on')
		}
	})
})

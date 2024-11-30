const { chars } = new SplitText('h2', {
	type: 'chars'
})
const disX = gsap.utils.distribute({
	base: -200,
	amount: 400
})

const tl = gsap.timeline({
	repeat: -1
}

)
tl.from(chars, {
	y: gsap.utils.wrap([-50, 50]),
	filter: 'blur(20px)',
	stagger: {
		each: 0.1,
		from: 'center'
	}
})


tl.to(chars, {
	delay: 1,
	opacity: 0,
	filter: 'blur(20px)',
	stagger: {
		each: 0.1,
		from: 'end'
	}
})

// const text = ['Festival', 'music', 'Rock', 'JAZZ'];
// console.log(text)
// function titleFuc(arr){
// 	gsap.to('h2', {
// 		color:'white',
// 		duration:5, 
// 		text:arr[0],
// 		repeat:1, 
// 		yoyo:true, repeatDelay:2,
// 	})
// 	arr.push(arr.shift());
// 	gsap.delayedCall(6, titleFuc, [arr])
// };
// titleFuc(text)


const listElems = document.querySelectorAll('ul.navi li')
const sections = document.querySelectorAll('section')


listElems.forEach((li) => {
	const link = li.querySelector('a[href^="#sect"]')

	link.addEventListener('click', function (e) {
		e.preventDefault();

		const href = this.getAttribute('href')
		const secTop = document.querySelectorAll('.desc')
		
		window.scrollTo({
			top: secTop.offsetTop,
			behavior: 'smooth'
		})
	})
});

// sections.forEach((sect, i) => {
// 	sect.addEventListener('wheel', function (e) {
// 		e.preventDefault();
// 		let delta = e.deltaY
// 		//weel을 down하면 +값이 발생되고 weel을 up 하면 -값이 발생
// 		if (delta < 0 && i === 0) {
// 			return//해당 조건이면 명령loop를 빠져나감

// 			//배열의 index는 [0, 1, 2, 3]이고 갯수는 4개이므로 -1
// 		} else if (delta > 0 && i === sections.length - 1) {
// 			return

// 		}
// 		//3함연산자 : 조건식?참:거짓
// 		let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
// 		if (secTop) {
// 			let targetSecTop = secTop.offsetTop
// 			window.scrollTo({ top: targetSecTop, behavior: 'smooth' })
// 		}
// 	})
// })

// window.addEventListener('scroll', function () {
// 	//document의 새로운 위치값
// 	let scrollTop = document.documentElement.scrollTop
// 	//열린 창의 높이값 가져오기
// 	// let winHeight = window.innerHeight
// 	// for (const li of listElems) {
// 	// 	li.classList.remove('on')
// 	// }
// 	// for (const sec of sections) {
// 	// 	sec.classList.remove('on')
// 	// }

// 	// if (scrollTop >= 0 && scrollTop < winHeight) {
// 	// 	listElems[0].classList.add('on')
// 	// 	sections[0].classList.add('on')
// 	// }

// 	// if (scrollTop >= winHeight && scrollTop < winHeight*2) {
// 	// 	listElems[1].classList.add('on')
// 	// 	sections[1].classList.add('on')
// 	// }
// 	// if (scrollTop >= winHeight *2 && scrollTop < winHeight*3) {
// 	// 	listElems[2].classList.add('on')
// 	// 	sections[2].classList.add('on')
// 	// }
// 	// if (scrollTop >= winHeight *3 && scrollTop < winHeight*4) {
// 	// 	listElems[3].classList.add('on')
// 	// 	sections[3].classList.add('on')
// 	// }
// 	// if (scrollTop >= winHeight *4 && scrollTop < winHeight*5) {
// 	// 	listElems[4].classList.add('on')
// 	// 	sections[4].classList.add('on')
// 	// }
// 	// for (let i = 0; i < sections.length; i++) {
// 	// 	if (scrollTop >= winHeight * i && scrollTop < winHeight * (i + 1)) {
// 	// 		listElems[i].classList.add('on')
// 	// 		sections[i].classList.add('on')
// 	// 	}
// 	// }


// 	sections.forEach((section, i) => {
// 		let sectionTop = section.offsetTop
// 		if (scrollTop >= sectionTop - 100) {
// 			for (const li of listElems) {
// 				li.classList.remove('on')
// 			}
// 			for (const sec of sections) {
// 				sec.classList.remove('on')
// 			}
// 			listElems[i].classList.add('on')
// 			sections[i].classList.add('on')
// 		}
// 	})
// })

let isScrolling = false;

sections.forEach((sect, i) => {
	sect.addEventListener('wheel', function (e) {
		if (isScrolling) return;  // 중복 실행 방지

		let delta = e.deltaY;

		// 첫 번째 섹션에서 위로, 마지막 섹션에서 아래로 스크롤 시 동작하지 않도록 설정
		if (delta < 0 && i === 0) {
			return;
		} else if (delta > 0 && i === sections.length - 1) {
			return;
		}

		let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling;
		if (secTop) {
			let targetSecTop = secTop.offsetTop;

			isScrolling = true;  // 스크롤 플래그 설정
			window.scrollTo({ top: targetSecTop, behavior: 'smooth' });

			// 스크롤 완료 후 플래그 해제
			setTimeout(() => {
				isScrolling = false;
			}, 1000);  // 애니메이션 시간에 맞춰 대기 시간 설정
		}
	});
});

window.addEventListener('scroll', function () {
	let scrollTop = document.documentElement.scrollTop || window.scrollY;

	sections.forEach((section, i) => {
		let sectionTop = section.offsetTop;

		if (scrollTop >= sectionTop - 100) {
			for (const li of listElems) {
				li.classList.remove('on');
			}
			for (const sec of sections) {
				sec.classList.remove('on');
			}
			listElems[i].classList.add('on');
			sections[i].classList.add('on');
		}
	});
});

let prevScollTop = 0
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
	let currentScollTop = window.scrollY;

	if (currentScollTop > prevScollTop){
		header.style.top='-150px';
	} else{
		header.style.top='0px'
	}
	prevScollTop=currentScollTop;
	sections.forEach(function(section){
		
	})
})
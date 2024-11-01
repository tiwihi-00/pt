gsap.to('#intro', { autoAlpha: 1 });
const intro = gsap.timeline();

intro.from('.ltText', {
	opacity: 0,
	x: -200,
	duration: 0.35
});

intro.from('.rtText', {
	opacity: 0,
	x: 200,
	duration: 0.35
});

intro.to('.ltText', {
	y: -70,
	opacity: 1
});

intro.to('.rtText', {
	y: 60,
	opacity: 1
});

intro.from('.my', {
	opacity: 0,
	scale: 0,
	duration: 0.35
});

intro.to('.my', {
	duration: 3,
	opacity: 1,
	scale: 1.5,
	ease: 'power4'
});

// ---------------------------- intro

const introZoom = gsap.timeline();
introZoom.to('#intro h2', {
	scale: 80,
	opacity: 0,
	duration: 2
});

ScrollTrigger.create({
	animation: introZoom,
	trigger: '#intro',
	start: "top top",
	end: "+=1000",
	anticipatePin: 1,//스크롤 속도 제어
	pin: true,//스크롤로 객체가 움직이지 않게 [fixed]처리
	scrub: true,//스크롤이 발생할때 대상객체를 부드럽게 처리하기
	pinSpacing: true//요소가 고정될 때 해당 영역의 레이아웃을 유지 고정된 요소가 차지할 공간을 확보해 주기 때문에 다른 콘텐츠가 밀리지 않음
})
// pinSpacing: false 고정된 요소가 차지하는 공간을 확보하지 않아서, 요소가 다른 콘텐츠 위에 겹치게 됨

gsap.to('#project', { autoAlpha: 1 });
const project = gsap.timeline();

project.from('#project h2', {
	y: 1000,
	scale: 5,
	duration: 3,
	opacity: 0
});

project.to('#project h2', {
	y: 10,
	scale: 1,
	duration: 3
});

project.from('#project .pro1', {
	opacity: 0,
	y: -200,
	duration: 3
}, '+=1')

project.from('#project .pro2', {
	opacity: 0,
	y: 200,
	duration: 3
}, '+=1')

project.from('#project .pro3', {
	opacity: 0,
	y: -200,
	duration: 3
}, '+=1')
project.from('#project .pro4', {
	opacity: 0,
	y: 200,
	duration: 3
}, '+=1')


project.to('#project .pro1', {
	opacity: 1,

	duration: 3
}, '+=1')

project.to('#project .pro2', {
	opacity: 1,

	duration: 3
}, '+=1')

project.to('#project .pro3', {
	opacity: 1,

	duration: 3
}, '+=1')

project.to('#project .pro4', {
	opacity: 1,

	duration: 3
}, '+=1')


ScrollTrigger.create({
	animation: project,
	trigger: '#project',
	start: 'top top',
	end: '+=2000',
	anticipatePin: 1,
	pin: true,
	scrub: true,
	pinSpacing: true, 
	markers:true
});

const work = gsap.timeline()

work.from('#work .t1', {
	y: 100,
	opacity: 0,
	duration: 2,
}, '+=1')

work.from('#work .t2', {
	y: 100,
	opacity: 0,
	duration: 2,

}, '+=1')

work.from('#work .t3', {
	y: 100,
	opacity: 0,
	duration: 2,

}, '+=1')

work.from('#work .t4', {
	y: 100,
	opacity: 0,
	duration: 2,

}, '+=1')

ScrollTrigger.create({
	animation: work,
	trigger: '#work',
	start: 'top top',
	end: '+=2000',
	anticipatePin: 1,
	pin: true,
	scrub: true,
	pinSpacing: true
});


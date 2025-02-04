const tl = gsap.timeline();
const splitText = new splitText('h3', {
	type: 'chars'
});
const chars = splitText.chars;

gsap.set(chars, { opacity: 0 });
gsap.set('symbol', { opacity: 0, y: 50 });
gsap.set('symbol-in', { opacity: 0, y: 50 });
gsap.set('in-menu', 'in-menu b', { opacity: 0, y: 50 });

tl.to('.comment', {
	opacity: 1,
	y: -20,
	duration: 1,
	ease: "power2.out",
});

tl.fromTo(
	chars,
	{ opacity: 0, y: 20 },
	{
		opacity: 1,
		y: 0,
		duration: 0.1,
		ease: "power2.out",
		stagger: 0.1,
	}
)
.to('.symbol', {
	opacity:1,
	y:0,
	duration:0.6,
	ease:"power2.out",
})
.to('in-menu', 'in-menu b',{
	opacity:1,
	y:0,
	stagger:0.3,
	duration:0.5,
	ease:"power2.out",
})
.to('.in-menu', {
	opacity:1,
	y:0,
	
})
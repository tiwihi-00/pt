$('span.plus').click(function (e) {
	e.preventDefault()
	$(this).toggleClass('on')
	$(this).closest('li').find('.item-lists').slideToggle();
});

gsap.to('.sect_2', {autoAlpha:1})
const sect2=gsap.timeline();

sect2.
const splide = new Splide('.contact', {
	type: 'loop',
	drag: false,
	focus: 'center',
	gap: 50,
	autoWidth: true,
	arrows: false,
	pagination: false,
	autoScroll: {
		speed: 2,
		pauseOnHover: true,
		rewind: false,
	}
});

splide.mount(window.splide.Extensions);


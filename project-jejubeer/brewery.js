$('span.plus').click(function (e) {
	e.preventDefault()
	$(this).toggleClass('on')
	$(this).closest('li').find('.item-lists').slideToggle();
});


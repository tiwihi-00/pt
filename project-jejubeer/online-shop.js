$('span.plus').click(function(){
	$(this).toggleClass('on')
    $(this).closest('.product-title').next().slideToggle()
	
});

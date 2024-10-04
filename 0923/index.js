
// setInterval(function () {
// 	$('.vslide-wrap').animate({ 'top': '-100%' }, function () {
// 			$('.vslide:first').appendTo('.vslide-wrap');
// 			$('.vslide-wrap').css({ 'top': '0%' });
// 	});

// }, 3000)




$('a.prev').click(function(e){
	e.preventDefault(); 
	$('.hslide_wrap').css({'left': '-100%'});
	$('.hslide:last').prependTo('.hslide_wrap'); 
	$('.hslide_wrap').animate({'left': '0%'}, 500);
});

$('a.next').click(function(e){
	e.preventDefault(); 
	$('.hslide_wrap').animate({'left': '-100%'}, 500, function(){
			
			$('.hslide:first').appendTo('.hslide_wrap');
			
			$('.hslide_wrap').css({'left': '0%'});
	});
});
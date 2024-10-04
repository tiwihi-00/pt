$(document).ready(function () {
	$('.menu li a').click(function (e) {
e.preventDefault();
let href = $(this).attr('href');

$('.menu li a').removeClass('on');
$(this).addClass('on');

$('article').removeClass('on');
$(href).addClass('on');

let left = $(this).offset().left;
let wid = $(this).width() / 2;
$('.dot').stop().animate({'left': left + wid - 5}); // -5 조정
});



function dotAni(active){

let left = active.offset().left
let wid = active.width()/2
$('.dot').stop().animate({'left': left+wid-5})

}
// dotAni($('.menu li').first()); // 처음 도트 위치 설정
// $(window).resize(function () {
//     dotAni($('.menu li.on')); // 현재 선택된 메뉴의 도트 위치 조정
// });
});

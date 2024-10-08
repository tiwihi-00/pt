$('li.menu_item').mouseenter(function () {
	$(this).find('ul.sub_menu').slideToggle();

	$(this).stop().siblings().find('ul.sub_menu').slideUp();
})
$('li.menu_item').mouseleave(function () {
	$('ul.sub_menu').stop().slideUp();
});

// $('.friend li a').click(function(e){
// 	e.preventDefault()
// 	$('.friend li a').removeClass('on')
// 	$(this).addClass('on')
// 	let href=$(this).attr('href')
// 	$('article').removeClass('on')
// 	$(href).addClass('on')
// })

const aElems = document.querySelectorAll('.friend li a')
// console.log(aElems);
aElems.forEach(function (anchor) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		aElems.forEach(function (a) {
			a.classList.remove('on')
		})
		this.classList.add('on')
		let href = this.getAttribute('href')
		// alert(href)
		document.querySelectorAll('article').forEach(function (art) {
			art.classList.remove('on')

		})
		document.querySelector(href).classList.add('on')
	})
});



const mElems = document.querySelectorAll('.main_video_tabs_menu li a');
const contents = document.querySelectorAll('.main_video_content');

mElems.forEach((elem, index) => {
  elem.addEventListener('click', function(e) {
    e.preventDefault(); // 기본 동작 방지

    // 기존의 'on' 클래스를 가진 탭 및 콘텐츠에서 'on' 클래스 제거
    document.querySelector('.main_video_tabs_menu li.on')?.classList.remove('on');
    document.querySelector('.main_video_content.on')?.classList.remove('on');

    // 클릭한 탭에 'on' 클래스 추가
    this.parentElement.classList.add('on');

    // 해당 순서의 콘텐츠에 'on' 클래스 추가
    contents[index].classList.add('on');
  });
});


function bannerRotate() {
	$('.quickmenu_control').animate({ 'rotate': '+=10deg' }, 50, 'linear')
}

let stopId

$('.quickmenu_wrap').mouseenter(function () {
	stopId = setInterval(bannerRotate, 50)
})
$('.quickmenu_wrap').mouseleave(function () {
	$('.quickmenu_control').stop(1, 0)
	clearInterval(stopId)
})
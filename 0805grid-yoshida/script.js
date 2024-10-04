$('.menu-icon').click(function () {
    // $(this).find('.bar').addClass('on')
    $(this).fadeOut()
    $('header').addClass('on')
    $('section').addClass('on')
})
// 메뉴 아이콘을 숨기고 (fadeOut).
// 헤더를 나타나게 하고 (addClass('on')).
// 섹션을 기울이기 (addClass('on')).


$('ul.menu li').click(function () {
    $('ul.menu li').removeClass('on')
    $(this).addClass('on')
    
    $('.menu-icon').fadeIn()
    $('header').removeClass('on')
    $('section').removeClass('on')

    let idx = $(this).index()
    $('body').removeClass()
    $('body').addClass('bg' + idx)

    $('article').removeClass('on')

    $('article').eq(idx).addClass('on')
})

// 현재 선택된 메뉴 항목에 on 클래스를 추가하고 나머지 항목에서 on 클래스를 제거 (removeClass('on'), addClass('on')).
// 메뉴 아이콘을 다시 보이게 하고 (fadeIn).
// 헤더를 숨기고 (removeClass('on')).
// 섹션의 기울기를 초기화 (removeClass('on')).

// body에 bg0, bg1, bg2 클래스를 적용 (addClass('bg' + idx)).

// 모든 article의 on 클래스를 제거하여 숨기고 (removeClass('on')), 선택된 article만 보이도록 (addClass('on')).
$('.slide').mouseenter(function() {
    let idx = $(this).index();
    
    if ($(this).hasClass('on')) {
        // 이미 'on' 클래스가 있다면, 해당 'desc'를 보여줌
        $('.desc').eq(idx).fadeIn();
    } else {
        // 다른 모든 슬라이드와 'desc'를 초기화
        $('.slide').removeClass('on');
        $('.desc').fadeOut();
        
        // 마우스를 올린 슬라이드에 'on' 클래스를 추가하고, 해당 'desc'를 표시
        $(this).addClass('on');
        $('.desc').eq(idx).fadeIn();
    }
});

$('.slide').mouseleave(function() {
    // 마우스가 떠나면 모든 'desc' 요소를 숨기고, 'on' 클래스를 제거
    $('.desc').fadeOut();
    $('.slide').removeClass('on');
});


$('li.story').click(function(){
    lineShow()
    mainHide()
})
$('#sect1 a.close').click(function(){
    lineHide()
    mainShow()
})


function lineShow() {
    $('.top').animate({ 'width': '100%' }, 500, function () {
        $('.right').animate({ 'height': '100%' }, 500, function () {
            $('.bottom').animate({ 'width': '100%' }, 500, function () {
                $('.left').animate({ 'height': '100%' }, 500, function () {
                    $('#sect1 figure').fadeIn()
                })
            })
        })
    })
}

function lineHide(){
    $('.top').animate({'width': '0%'})
    $('.right').animate({'height': '0%'})
    $('.bottom').animate({'width': '0%'})
    $('.left').animate({'height': '0%'},500,function(){
        $('#sect1 figure').fadeOut()
    })
}

function mainHide() {
    $('main .video').animate({ 'top': '-1000px' }, 600);
    $('ul.main').delay(500).animate({ 'top': '1000px' }, 600);
    $('.mainvisual').addClass('on');
    $('#sect1').show();
}

function mainShow() {
    $('main .video').animate({ 'top': '0' }, 500);
    $('ul.main').delay(500).animate({ 'top': '0px' }, 600);
    $('.mainvisual').removeClass('on');
    $('#sect1').hide();
    $('#sect2').hide(); // 추가: sect2를 숨깁니다.
}

$('li.char').click(function () {
    mainHide();
    $('#sect2').delay(100).show();
    $('#sect2').animate({ 'height': '600px' }, 1000);
});

$('#sect2 .close-sect2').click(function () {
    $('#sect2').animate({ 'height': '0px' }, 1000, function () {
        $('#sect2').hide();
    });
    mainShow();
});
$('.menu_icon').click(function(){
    $('.menu').slideToggle()
})
$('.log_in').click(function(){
    $('.log_box').slideToggle()
})

$('.product_item').each(function(){
    $(this).find('li').first().addClass('on')
})

$('.product_desc').each(function(){
    $(this).find('li').first().siblings().css('display', 'none')
})

$('.product_item li a').click(function(e){
    e.preventDefault()
    let productImg = $(this).attr('href')

    $(this).closest('.product-list').find('.main_pic img').not('.up').attr('src', productImg)

    $(this).parent().siblings().removeClass('on')
    $(this).parent().addClass('on')

    let idx = $(this).parent().index()
    $(this).closest('.product_item').prev().find('li').hide()
    $(this).closest('.product_item').prev().find('li').eq(idx).show()
})

$('.up').click(function(){
    let $this = $(this)
    let $productMore = $this.closest('article').find('.product_box')

    if($this.hasClass('on')){
        $this.removeClass('on')
        $productMore.slideUp()
    }
    else{
        $('.up').removeClass('on')
        $('.product_box').slideUp()
        $(this).addClass('on')
        $productMore.slideDown()
    }
})
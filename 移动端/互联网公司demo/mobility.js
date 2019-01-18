// 当前的  划出来
var iNow = 0;
// 划出去
var last = -1;
$(document).swipeUp(function(){
    last = iNow;
    iNow++;
    $('.page').eq(last).addClass('moveToTop');
    $('.page').eq(iNow).removeClass('hide').addClass('moveFromBottom');

    setTimeout(function(){
        // 等iNow 当前页 600ms划出来后  再让图片出来开始执行动画
        $('.page').eq(iNow).find('img').removeClass('hide');
    },600)
})
$(document).swipeDown(function(){
    last=iNow;
    iNow--;
    if(iNow>=)
    
    $('.page').eq(last).addClass('moveToTop');
    $('.page').eq(iNow).removeClass('hide').addClass('moveFromBottom');

    setTimeout(function(){
        // 等iNow 当前页 600ms划出来后  再让图片出来开始执行动画
        $('.page').eq(iNow).find('img').removeClass('hide');
    },600)
})
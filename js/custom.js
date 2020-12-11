$(document).ready(function(){
    $('body,html').stop().animate({'scrollTop':0},1500,'swing');
    $(window).on('scroll',function(){
        //브라우져 scrollTop
        var scroll = $(this).scrollTop();
        // h1에 현재 scrollTop 값을 담음
        $('h1').text(scroll);
        $('section>article').eq(0).css({'transform':'translateZ('+scroll+'px)'});
        $('section>article').eq(1).css({'transform':'translateZ('+parseInt(-5000+scroll)+'px)'});
        $('section>article').eq(2).css({'transform':'translateZ('+parseInt(-10000+scroll)+'px)'});
        $('section>article').eq(3).css({'transform':'translateZ('+parseInt(-15000+scroll)+'px)'});
        $('section>article').eq(4).css({'transform':'translateZ('+parseInt(-20000+scroll)+'px)'});
        

    })
});
















let bgColor = ['yellow','blue','red','green','white'];

for(var i=0;i<bgColor.length;i++)
{
    $('.color-option li').eq(i).css("backgroundColor",bgColor[i]);
}

$('.color-option li').click(function(){
    let currentBg= $(this).css('backgroundColor');
    $('.change-color').css('color',currentBg)
})

$('.color-box i').click(function(){
    let currentWidth= $('.color-option').outerWidth();
    if($('.color-box').css('left')=='0px')
    {
        $('.color-box').animate({'left':-currentWidth},1000)
    }
    else
    {
        $('.color-box').animate({'left':0},1000)
    }
})
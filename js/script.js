//toggle메뉴
$(document).ready(function(){


 $('.toggle').on('click',function(){
    $('.finger').toggleClass('on');

    if($('.finger').hasClass('on')){
        $('.gnb').animate({
            'left':'60'
        },1000)

    }else{
        $('.gnb').animate({
            'left':'-300'
        },1000)
    }
    return false;
 })
})
 $(document).ready(function(){
     
    $('.deth > li').each(function(index){
    $(this).on('click',function(){
      if($(this).children().next().css('display')=='none'){
        $(this).children().next().slideDown(600)
      }else{ 
        $(this).children().next().slideUp(600)
      }
    })

 })
 return false;
     })
//coll&warm  
var num=1;
     $(document).ready(function(){
 $('.Wcover > li:gt(0)').hide();
 $('.Ccover > li:gt(0)').hide();
//warn_item         
$('.Wbtn .left').on('click',function(e){
    e.preventDefault();
    num--;
    if(num<1){
        num=3
    }
    $('.Wcover > li:visible').hide();
    $('.Wcover > li:eq('+(num-1)+')').show();
    $('.Wlist > li:visible').fadeOut();
    $('.Wlist > li:eq('+(num-1)+')').fadeIn();
	

})

  

$('.Wbtn .right').on('click',function(e){
     e.preventDefault();
    num++;
    if(num>3){
        num=1
    }
    $('.Wcover > li:visible').hide();
    $('.Wcover > li:eq('+(num-1)+')').show();
    $('.Wlist > li:visible').fadeOut();
    $('.Wlist > li:eq('+(num-1)+')').fadeIn();
	
	
    
})
         
//cool_item         
    $('.Cbtn .left').on('click',function(e){
    e.preventDefault();
    num--;
    if(num<1){
        num=3
    }
    $('.Ccover > li:visible').hide();
    $('.Ccover > li:eq('+(num-1)+')').show();
    $('.Clist > li:visible').fadeOut();
    $('.Clist > li:eq('+(num-1)+')').fadeIn();
})

  

$('.Cbtn .right').on('click',function(e){
     e.preventDefault();
    num++;
    if(num>3){
        num=1
    }
    $('.Ccover > li:visible').hide();
    $('.Ccover > li:eq('+(num-1)+')').show();
    $('.Clist > li:visible').fadeOut();
    $('.Clist > li:eq('+(num-1)+')').fadeIn();
    
})
     
 })

//scroll
$(window).scroll(function(){
    var wScroll=$(this).scrollTop();
   if(wScroll>=$('.visual').offset().top-$(window).height()/3){
       $('.visual h2').addClass('on');
   }else{
        $('.visual h2').removeClass('on');
   }
    if(wScroll>=$('.wc_txt').offset().top-$(window).height()/3){
        $('.wc_inner .under').addClass('show');
        $('.wc_inner h2').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
    
    }
	if(wScroll>=$('.bestseller').offset().top-$(window).height()/3){
		$('.best > li').removeClass('best1');
		$('.best > li').removeClass('best2');
	}
    
})    

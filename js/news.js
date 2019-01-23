    //导航下拉菜单
   //鼠标进入
   $('.game').mouseenter(function(){
    //显示下拉菜单
    $('.menu').css('display','block')
})
//鼠标离开
$('.menu').mouseleave(function(){
 $('.menu').css('display','none')
})
 
 //导航下拉菜单
   //鼠标进入
   $('#menu').children('li').mouseenter(function(){
       //显示下拉菜单
    $(this).find('ul').stop().slideDown(500)
  })
  //鼠标离开
  $('#menu').children('li').mouseleave(function(){
    $(this).find('ul').stop().slideUp(500)
  })


  $('#list li').mouseenter(function(){
    $(this).css('background','#cebb74').siblings().css('background','#7986a4')
    var num = $(this).index() 
    $('.neirong div').eq(num).show().siblings().hide()
})


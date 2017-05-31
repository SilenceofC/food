$(function(){
	/*
	 * 右侧悬浮栏 start
	 */
	 
 	 $(".cart_right").find("li").hover(function(){
 	 	 $(this).find('.person').slideDown('700');
 	 },function(){
 	 	$(this).find(".person").slideUp('1');
 	 })
 	 
 	 
	$(".cart_right ul li.last").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 0, function() {
		mark = 1;
	});
});

$(".cart_right").find(".index").click(function(){
//	window.open('index.html');跳到新页面
window.location.href = "index.html";
})

	
	/*
	 * 右侧悬浮栏 over
	 */



/*
 * 导航条 start
 */

	$(".nav_one").mouseover(function(){
		$(".kefu").css({"display":"block","cursor":"poiner","width":"160px","height":"120px"})
		$(this).find(".all").css("color","#2bbd34");
		$(this).find(".th").css("display","none");	
	}).mouseout(function(){
		$(".kefu").css("display","none");
	 	$(".all").css("color","#000");
		$(".th").css("display","block");
	});

	$(".nav_two").mouseover(function(){
		$(".guanzhu").css({"display":"block","cursor":"pointer","width":"210px","height":"165px"});
		$(this).find(".all").css("color","#2bbd34");
		$(this).find(".th").css("display","none");	
	}).mouseout(function(){
		$(".guanzhu").css("display","none");
		$(".all").css("color","#000");
		$(".th").css("display","block");
	});

	$(".nav_three").mouseover(function(){
		$(".hui").css({"width":"163px","height":"120px","display":"block","cursor":"pointer"});
		$(this).find(".all").css("color","#2bbd34");
		$(this).find(".th").css("display","none");
		$(".huan").mouseover(function(){
			$(this).css("background","#74c015");
		}).mouseout(function(){
			$(this).css("background","#afafaf");
		})
	}).mouseout(function(){
		$(".hui").css("display","none");
		$(".all").css("color","#000");
		$(".th").css("display","block");
	});

	$(".nav_four").mouseover(function(){
		$(".app").css({"width":"115px","height":"168px","display":"block","cursor":"pointer","right":"10px"});
		$(this).find(".all").css("color","#2bbd34");
		$(this).find(".th").css("display","none");	
	}).mouseout(function(){
		$(".app").css("display","none");
		$(".all").css("color","#000");
		$(".th").css("display","block");
	});
/*
 * 导航条 over
 */


 
})

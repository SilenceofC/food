$(function(){
	/*
	 * 楼梯 start 
	 */
	$("#LoutiNav ul li").hover(function() {
			//鼠标滑上去
			$(this).addClass("hover");
		}, function() {
			//鼠标移开
			$(this).removeClass("hover");
		});
		 //鼠标点击
		var mark = 1;
		$("#LoutiNav ul li").not(".last").click(function() {
			mark = 2; //改变标记
			$("#LoutiNav ul li").find("span").removeClass("active");
			$(this).find("span").addClass("active");
			//点击左边导航 然后跳到指定的楼层
			var $index = $(this).index(); //找到了对应的序列号
			//alert($index);
			var $top = $(".Louti").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
			//alert($top);
			$("body,html").animate({
				scrollTop: $top
			}, 500, function() {
				mark = 1;
			}); //浏览器滚动的高度
		});
		 //浏览器串口滚动事件
		$(window).scroll(function() {
			if (mark == 1) {
				var $t = $(this).scrollTop(); //获取滚动条滚动的高度
				//document.title = $t;
				if ($t > 500) { //通过滚动条来判断
					$("#LoutiNav").fadeIn(); //淡入 导航慢慢显示出来
				} else {
					$("#LoutiNav").fadeOut(); //淡出 导航慢慢消失
				}
				var $obj = $(".Louti");
				//循环每一个Louti 然后找到最先满足条件的那个 Louti
				$obj.each(function() {
					 
					var $index = $(this).index();
					//楼层与浏览器上面的高度
					//console.log($index);					
					var $height = $obj.eq($index).offset().top + $(this).height() / 2;

					if ($t < $height) {
						$("#LoutiNav ul li").find("span").removeClass("active")
						$("#LoutiNav ul li").eq($index).find("span").addClass("active");
						return false;
					}
				});		
			}
    	
		   	
		});
		 //点击 Top按钮 跳转到浏览器顶部
		$("#LoutiNav ul li.last").click(function() {
			$("body,html").animate({
				scrollTop: 0
			}, 0, function() {
				mark = 1;
			});
		});
	
	/*
	 * 楼梯 over
	 */
	
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


/*
 * 购物车 start
 */
	$(".shop").mouseover(function(){
		$(this).css({"cursor":"pointer","height":"42px","z-index":"1","border-radius":"4px","border":"#68bb00 2px solid","border-bottom":"none"})
	}).mouseout(function(){
		$(this).css({"height":"38px","border":"none"});
	})

/*
 * 购物车over
 *
 */
})

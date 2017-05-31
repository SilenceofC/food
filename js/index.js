
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
	 /*点击最后一个返回顶部*/
	$(".cart_right ul li.last").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 0, function() {
		mark = 1;
	});
});
	/*点击首页跳转到主页面*/
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
	/*在线客服*/
	$(".nav_one").mouseover(function(){
		$(".kefu").css({"display":"block","cursor":"poiner","width":"160px","height":"120px"})
		$(this).find(".all").css("color","#2bbd34");
		$(this).find(".th").css("display","none");	
	}).mouseout(function(){
		$(".kefu").css("display","none");
	 	$(".all").css("color","#000");
		$(".th").css("display","block");
	});
	/*关注我们*/
	$(".nav_two").mouseover(function(){
		$(".guanzhu").css({"display":"block","cursor":"pointer","width":"210px","height":"165px"});
		$(this).find(".all").css("color","#2bbd34");
		$(this).find(".th").css("display","none");	
	}).mouseout(function(){
		$(".guanzhu").css("display","none");
		$(".all").css("color","#000");
		$(".th").css("display","block");
	});
	/*优惠券激活*/
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
	/*App下载*/
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
 * 购物车 start banner上方的购物车
 */
	$(".shop").mouseover(function(){
		$(this).css({"cursor":"pointer","height":"42px","z-index":"1","border-radius":"4px","border":"#68bb00 2px solid","border-bottom":"none"})
	}).mouseout(function(){
		$(this).css({"height":"38px","border":"none"});
	})
/*
 * 购物车 over banner上方的购物车
 */

/*
 * 第一个轮播图 start
 */
	$('#silderPlay').sliderPlay({
		speed: 400, 		
		timeout: 2000,		 
		moveType: 'moveTo',  
		direction: 'top',    
		mouseEvent: 'click', 
		isShowTitle: false,	
		isShowBtn:  true  
	});
/*
 * 第一个轮播图  over
 */
/*
 * 第二个轮播图   start
 */
	$(document).ready(function(e) {
	    $('#auto1').unslider({
			dots: true
		});
	});
/*
 * 第二个轮播图   over
 */
/*
 * 第四个轮播图  start
 */
	 $(document).ready(function(e) {
	    $('#auto2').unslider({
			dots: true
		});
	});
/*
 * 第四个轮播图  over
 */
	
/*
 * 所有图片 透明度 start
 */
	$(".touming").mouseover(function(){
		$(this).css({ opacity:.6});
	})
	$(".touming").mouseout(function(){
		$(this).css({opacity:1}); 
	})	 
/*
 * 所有图片 透明度 over
 */

/*
 * 所有字体变颜色 start
 */
	$(".one").mouseover(function(){
		$(this).css("color","#68bb00");
	})
	$(".one").mouseout(function(){
		$(this).css("color","#000");
	})
/*
 * 所有字体变颜色  over
 */

/*
 * 加入购物车，右侧以及banner上方显示件数 start
 */
	var i = 0;
	$(".banner_bottom,.rec_right,.banner_bottom,.adv,.taste,.cat_l,.pur_r,.pur_r,.fir_fl_c").on("click",".cart",function(){
		 	$(".count").html(++i);
	})
/*
 * 加入购物车，右侧以及banner上方显示件数 over
 */

/*
 * 给所有追加图片添加透明度start
 */
$(".banner_bottom,.rec_right,.banner_bottom,.adv,.taste,.cat_l,.pur_r,.pur_r,.fir_fl_c").on("mouseover",".touming",function(){
	 	$(this).css({ opacity:.6});
	 })
	 
	$(".banner_bottom,.rec_right,.banner_bottom,.adv,.taste,.cat_l,.pur_r,.pur_r,.fir_fl_c") .on("mouseout",".touming",function(){
	 	$(this).css({opacity:1})
	 })
/*
 * 给所有追加图片添加透明度over
 */
/*
 * 给所有追加字体添加颜色start
 */
$(".banner_bottom,.rec_right,.banner_bottom,.adv,.taste,.cat_l,.pur_r,.pur_r,.fir_fl_c").on("mouseover",".one",function(){
	 	$(this).css("color","#68bb00");
	 })
$(".banner_bottom,.rec_right,.banner_bottom,.adv,.taste,.cat_l,.pur_r,.pur_r,.fir_fl_c").on("mouseout",".one",function(){
	 	$(this).css("color","#000");
	 }) 
/*
 * 给所有追加字体添加颜色over
 */


/*
 * 通过getJSON获取数据   start
 */
 $.getJSON("json/image.json",function(json){	 
	$.each(json.recommend,function(key,value){				 
		$(".rec_right").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
		});
	});
 
 
$.getJSON("json/image.json",function(json){
	$.each(json.banner_bottom,function(key,value){
		$(".banner_bottom").append("<a href='#'><img class='touming' src=" + value.src + " /></a>")
	});
});
	
 $.getJSON("json/image.json",function(json){
	$.each(json.taste,function(key,value){				 
		$(".taste").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
		});
	});
 	

 $.getJSON("json/image.json",function(json){
	$.each(json.purchase,function(key,value){				 
		$(".pur_r").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
		});
	});
	
	
	 $.getJSON("json/image.json",function(json){
		$.each(json.cat,function(key,value){				 
			$(".cat_l").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
			});
	});
	
	
	$.getJSON("json/image.json",function(json){
		$.each(json.adv,function(key,value){
			$(".adv").append("<a href='#'><img class='touming' src=" + value.src + " /></a>")
		});
	});	



	 $.getJSON("json/image.json",function(json){
		$.each(json.first,function(key,value){				 
			$("#onefloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
			});
	});
	
	
	$.getJSON("json/image.json",function(json){
		$.each(json.two,function(key,value){				 
			$("#twofloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
			});
	});
	
	 $.getJSON("json/image.json",function(json){
		$.each(json.three,function(key,value){				 
			$("#threefloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
		});
});
	
	$.getJSON("json/image.json",function(json){
		$.each(json.four,function(key,value){				 
			$("#fourfloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
			});
	});
	
	 $.getJSON("json/image.json",function(json){
		$.each(json.five,function(key,value){				 
			$("#fivefloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
		});
	});
	
	$.getJSON("json/image.json",function(json){
		$.each(json.six,function(key,value){				 
			$("#sixfloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
		});
	});
	
	$.getJSON("json/image.json",function(json){
		$.each(json.seven,function(key,value){				 
			$("#sevenfloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
			});
	});
	
	$.getJSON("json/image.json",function(json){
		$.each(json.eight,function(key,value){				 
			$("#eightfloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
			});
	});
	
	 $.getJSON("json/image.json",function(json){	 
		$.each(json.nine,function(key,value){				 
			$("#ninefloor").append("<dl class='dl_first'><a href='#'><dt><img class='touming' src=" + value.src + " /></dt></a><a href='#'><dd class='one'>" + value.tit + "</dd></a><dd class='two'><span class='money'>￥</span>" + value.price1 + "<span>￥" + value.price2 + "</span></dd><dd><img class='cart' src='img/icon_cart2.png' /></dd></dl>");
		});
	});
 /*
 * 通过getJSON获取数据   over
 */

/*
 * 加入购物车动态效果 start
 */
 	var offset = $(".gou").offset();
	$(".banner_bottom,.rec_right,.banner_bottom,.adv,.taste,.cat_l,.pur_r,.pur_r,.fir_fl_c").on("click",".cart",function(event){
        var img = $(this).parent().parent().find('img').attr('src');//获取当前点击图片链接				
        var flyer = $('<img class="flyer-img" src="' + img + '">');//抛物体对象
            flyer.fly({
                start: {
                    left: event.screenX, //抛物体起点横坐标
                    top: event.screenY////抛物体起点纵坐标
                },
                end: {
                    left: offset.left + 10, //抛物体终点横坐标
                    top: offset.top + 10, //抛物体终点纵坐标
                },
                onEnd: function() {
                    this.destory();//销毁抛物体
                }
            });
       });
/*
 * 加入购物车动态效果 over
 */
 /*
 * 二级菜单 start
 */
	$.getJSON("json/menu.json",function(json){
		var myMenu = json.menu;
		var myList = myMenu.list;
	//<a href="#">方便速食</a><h1>&gt;</h1>
	//一级列表
	$.each(myList,function(j){
		$("<li><a href='#'>" + myList[j] + "</a><h1>&gt;</h1></li>").appendTo("#list");
		
	})
	$("#list li").each(function(index,item){
		item.innerHTML += "<dl class='t_list'></dl>";

	})	
		//二级列表
		//one
	var $li = $("#list li");
	var $t_list = $('.t_list');
	$.each(myMenu.one,function(i){
		$("<dt class='c_one'><a href='#'>" + myMenu.one[i] + "</a></dt>").appendTo($t_list.eq(0));
$(".c_one").eq(0).find("a").eq(0).attr('href','list.html');
	
	})
	//第二个Li下面的内容
	$.each(myMenu.two,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.two[i] + "</a></dt>").appendTo($t_list.eq(1));
		})
		
	$.each(myMenu.three,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.three[i] + "</a></dt>").appendTo($t_list.eq(2));
		})
		  
	$.each(myMenu.four,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.four[i] + "</a></dt>").appendTo($t_list.eq(3));
		})
	
	$.each(myMenu.five,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.five[i] + "</a></dt>").appendTo($t_list.eq(4));
		})	
	
	$.each(myMenu.six,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.six[i] + "</a></dt>").appendTo($t_list.eq(5));
		})		
	
	$.each(myMenu.seven,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.seven[i] + "</a></dt>").appendTo($t_list.eq(6));
		})	

	$.each(myMenu.eight,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.eight[i] + "</a></dt>").appendTo($t_list.eq(7));
		})

	$.each(myMenu.nine,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.nine[i] + "</a></dt>").appendTo($t_list.eq(8));
		})

	$.each(myMenu.ten,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.ten[i] + "</a></dt>").appendTo($t_list.eq(9));
		})
	
	$.each(myMenu.eleven,function(i){
			$("<dt class='c_one'><a href='#'>" + myMenu.eleven[i] + "</a></dt>").appendTo($t_list.eq(10));
		})

	});
	/*出现消失效果切换*/	
		$(".list").mouseover(function(){
			$("#list").css("display","block");
		});
		 
	/*追加元素需要给父元素添加事件 */
	$("#list").on('mouseover',"li",function(){
		$("#list li .t_list").css("display","block");
		$("#list li .t_list").css("display","none").eq($(this).index()).css("display","block");
	})
		
	$("#list").on('mouseout',"li",function(){
		$("#list li .t_list").css("display","none");
		
	});

/*
 * 二级菜单over
 */




 
})

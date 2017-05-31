$(function(){
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
		$(".t_list").mouseleave(function(){
	$("#list").css("display","none");
})
	})	
		//二级列表
		//one
	var $li = $("#list li");
	var $t_list = $('.t_list');
	$.each(myMenu.one,function(i){
		$("<dt class='c_one'><a href='#'>" + myMenu.one[i] + "</a></dt>").appendTo($t_list.eq(0));
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
/*
 * 左部分 start
 */
	$(".left_top").find("span").mouseover(function(){
		$(this).css("background","#fff");
		$(this).find("a").css("color","#68bb00");
	})
	$(".left_top").find("span").mouseout(function(){
		$(this).css("background","#68bb00");
		$(this).find("a").css("color","#fff");
	})
/*
 * 左部分over
 */
	$(".b_ti").find("li").find("a").mouseover(function(){
		$(this).css("color","#68bb00");
	})
	$(".b_ti").find("li").find("a").mouseout(function(){
		$(this).css("color","black");
	})
	

	$(".milk").mouseover(function(){
		$(this).css({"border":"1px solid #68bb00","cursor":"pointer"});
	}).mouseout(function(){
		$(this).css("border","none");
	})
	
	$('.milk').eq(0).find("img").click(function(){
		$(location).attr('href', 'detail.html');
	})
	
	/*
	 * 轮播图 start
	 */
	$('#autoplay').microfiche({
		cyclic:true,autoplay:2,autopause:true
	})	
	/*
	 * 轮播图over
	 */
	$(".b_t").find(".zi").mouseover(function(){
		$(this).css("color","#68bb00");
		$(this).css("cursor","pointer");
	})
	$(".b_t").find(".zi").mouseout(function(){
		$(this).css("color","black");
	})

/*购物车添加抛物线状态飞入*/
 	var offset = $(".gou").offset(); 
	$(".cart").click(function(event){
        var img = $(this).parent().find('img').attr('src');//获取当前点击图片链接				
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
 * 加入购物车数量增加
 */
	var i = 0;
	$(".cart").click(function(){
		$(".count").html(++i);
	})
	
	});

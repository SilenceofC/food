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
 * 移小图上面变大图start
 */
	$(".food").find("li").find("a").mouseover(function(){
		$(this).css("color","#7bc523");
	}).mouseout(function(){
		$(this).css("color","black");
	})
	
	var $b_1 = $(".b_1");
	var $b_2 = $(".b_2");
	var $b_3 = $(".b_3");
	var $b_4 = $(".b_4");
	$(".s_1").click(function(){
		$b_1.siblings().css("display","none");
		$b_1.css("display",'block');
	})
	$(".s_2").click(function(){
		$b_2.siblings().css("display","none");
		$b_2.css("display",'block');
	})
	$(".s_3").click(function(){
		$b_3.siblings().css("display","none");
		$b_3.css("display",'block');
	})
	$(".s_4").click(function(){
		$b_4.siblings().css("display","none");
		$b_4.css("display",'block');
	})
	$(".s_1").mouseenter(function(){
		$b_1.siblings().css("display","none");
		$b_1.css("display",'block');
	})
	$(".s_2").mouseenter(function(){
		$b_2.siblings().css("display","none");
		$b_2.css("display",'block');
	})
	$(".s_3").mouseenter(function(){
		$b_3.siblings().css("display","none");
		$b_3.css("display",'block');
	})
	$(".s_4").mouseenter(function(){
		$b_4.siblings().css("display","none");
		$b_4.css("display",'block');
	})

/*
 * 移小图上面变大图over
 */
/*
 * 加入购物车 start
 */

 var offset = $(".gou").offset();
 
	$(".cart").click(function(event){
	   	var img = $(this).parent().find(".top").find('img').attr('src');//获取当前点击图片链接				
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
 * 点击+或-相应的数量变换
 */
	var i = 1;
	$(".jia").click(function(){
		$(this).css("cursor","pointer");
		$(".ss").html(++ i);
	})	
	$(".jian").click(function(){	
		$(this).css("cursor","pointer");
		if(i >= 1){
			$(".ss").html(i --);
		}
	})
//加入购物车的数量添加到右侧中
	 	
	$(".cart").click(function(){
		var $num = Number($(".ss").html());
		$(".count").html($num);	
	})

});

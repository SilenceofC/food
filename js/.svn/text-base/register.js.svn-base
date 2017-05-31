
$(function(){
/*
 * 手机注册，邮箱注册动态切换 start
 */
	$(".phone").click(function(){
		$(".re_em").css("display","none");
		$(".re_phone").css("display","block");
	})
	$(".email").click(function(){
		$(".re_em").css("display","block");
		$(".re_phone").css("display","none");
	})

/*
 * 手机注册，邮箱注册动态切换 over
 */	
 
 /*
  * 手机注册 start
  */
 	/*失焦事件 start*/

 /*手机*/
 	$("#mobile").focus(function(){
		inFocus($("#mobile"));
 	})
	$("#mobile").blur(function(){
		$("#mobile").css("border","1px solid #b6b6b6");
	})
	
/*手机验证码*/
	$("#m_code").focus(function(){
		inFocus($("#m_code"));
	})
	$("#m_code").blur(function(){
		$("#m_code").css("border","1px solid #b6b6b6");
	})
/*密码*/
	$("#pwd").focus(function(){
		 inFocus($("#pwd"));
	})
	$("#pwd").blur(function(){
		$("#pwd").css("border","1px solid #b6b6b6");
	})
/*再次确认密码*/
	$("#tpwd").focus(function(){
		inFocus($("#tpwd"));
	})
	$("#tpwd").blur(function(){
		$("#tpwd").css("border","1px solid #b6b6b6");
	})
/*
 * 邮箱验证
 */
	$("#ema").focus(function(){
		inFocus($("#ema"));
	})
	$("#ema").blur(function(){
		$("#ema").css("border","1px solid #b6b6b6");
	})
	/*密码*/
	$("#pass1").focus(function(){
		 inFocus($("#pass1"));
	})
	$("#pass1").blur(function(){
		$("#pass1").css("border","1px solid #b6b6b6");
	})
/*再次确认密码*/
	$("#pass2").focus(function(){
		inFocus($("#pass2"));
	})
	$("#pass2").blur(function(){
		$("#pass2").css("border","1px solid #b6b6b6");
	})
/* 失焦事件over */
 /*
  * 点击Input触发样式
  */
function inFocus(obj){
		obj.css("border","1px solid #82a4db");	
	}	

/*
 * 点击按钮登录注册  手机
 */
$("#register").click(function(){
	var i = mobTest();
	var j = mcTest();
	var m = pwTest();
	var n = twTest();
	if((i == 1) && (j == 1) && (m == 1) && (n == 1)){
		$.cookie($("#mobile").val(),$("#pwd").val(),{
                expires:7,
                path:"/"
           });
           alert ("注册成功");
	}	
})
/*邮箱*/
 $("#register2").click(function(){
	var a = emaTest();
	var b= pass1Test();
	var c = pass2Test();
	if((a == 1) && (b == 1) && (c == 1)){
		$.cookie($("#ema").val(),$("#pass1").val(),{
                expires:7,
                path:"/"
           });
           alert ("注册成功");
	}
	
})

/*
 * 手机号验证
 */
function mobTest(){
	var t = 1;   //1表示符合条件，0表示不符合条件
 	var $car_mobile = $("#mobile").val();
	if($car_mobile != ""){		
		if(isPhoneNo($car_mobile)){			
			if($.cookie($car_mobile)){
				alert("此手机号已注册");
				t = 0;
			}
		}else{
			alert("请输入正确的手机号");
			t = 0;
		}
	}else{
		alert("您输入的手机号为空");
		t = 0;
	}
	return t;	
}
/*
 * 短信验证码验证
 */
$(".huoqu").click(function(){
		var i = 60;
		clearInterval(window.timer);
		$(".huoqu").val(i+"秒后重新获取").css("color","#666");
		window.timer= setInterval(function(){
			i--;
			$(".huoqu").val(i+"秒后重新获取");
			if( i == 0){
				clearInterval(timer);
				$(".huoqu").val("获取短信验证码");
			}
		},1000);
 	});
function mcTest(){
	$(".huoqu").click(function(){
		var i = 60;
		clearInterval(window.timer);
		$(".huoqu").val(i+"秒后重新获取").css("color","#666");
		window.timer= setInterval(function(){
			i--;
			$(".huoqu").val(i+"秒后重新获取");
			if( i == 0){
				clearInterval(timer);
				$(".huoqu").val("获取短信验证码");
			}
		},1000);
 	});
 	var t = 1;
 	var $car_duanxin = $(".ma").val();
 	if($car_duanxin != ""){
 		if(isDxNo($car_duanxin)){
 			t = 1;
 		}else{
 			alert("短信验证码输入错误");
 			t = 0;
 		}
 	}else{
		alert("您输入的短信验证码为空");
		t = 0;
	}
	return t;  	 
}

/*
 * 密码验证pw	pwTest();
 */
function pwTest(){
	var t = 1;
	var $car_pwd = $("#pwd").val();
	if($car_pwd != ""){
		if(isPassNo($car_pwd)){
			t = 1;
		}else{
			alert( "密码的长度只能在6-16位之间！");
			t = 0;
		}
	}else{
		alert("您输入的密码为空");
		t = 0;
	}
	return t;
}
/*
 * 密码再次验证tw    twTest();
 */
function twTest(){
	var t = 1;
	var $car_pwd = $("#pwd").val();
    var $car_tpwd = $("#tpwd").val();
    if($car_tpwd != ""){
    	if($car_pwd == $car_tpwd){
    		t = 1;
    	}else{
    		alert("两次输入不一致");
    		t = 0;
    	}
    }else{
    	alert("您输入的第二次密码为空");
    	t = 0;
    }
    return t;
}
/*以下为邮箱验证*/
function emaTest(){
	var t = 1;
	var $car_ema = $("#ema").val();
	if($car_ema != ""){
		if(isEmail($car_ema)){
			t = 1;
		}else{
			alert("您输入的邮箱格式不正确");
			t = 0;
		}
	}else{
		alert("您输入的邮箱为空");
		t = 0;
	}
	return t;
}

/*
 * 密码验证pw	pass1Test();
 */
function pass1Test(){
	var t = 1;
	var $car_pass1 = $("#pass1").val();
	if($car_pass1 != ""){
		if(isPassNo($car_pass1)){
			t = 1;
		}else{
			alert( "密码的长度只能在6-16位之间！");
			t = 0;
		}
	}else{
		alert("您输入的密码为空");
		t = 0;
	}
	return t;
}
/*
 * 密码再次验证tw    pass2Test();
 */
function pass2Test(){
	var t = 1;
	var $car_pass1 = $("#pass1").val();
    var $car_pass2 = $("#pass2").val();
    if($car_pass2 != ""){
    	if($car_pass1 == $car_pass2){
    		t = 1;
    	}else{
    		alert("两次输入不一致");
    		t = 0;
    	}
    }else{
    	alert("您输入的第二次密码为空");
    	t = 0;
    }
    return t;
}
/*
    正则验证
*/
    //手机号验证
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
  	return pattern.test(phone);

}
 //密码验证
function isPassNo(psw) {
  var pattern = /^.{6,16}$/;
  return pattern.test(psw);
}
  //短信验证
function isDxNo(dx) {
  var pattern = /^\d{6}$/;
  return pattern.test(dx);
}	
});
//邮箱验证
function isEmail(ema){
	var pattern = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
	return pattern.test(ema);
}

/*
 * 手机注册over
 */
 

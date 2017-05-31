$(function(){
	console.log($.cookie());
	inputStyle();
	/*手机*/
 	$("#mobile").focus(function(){
		inFocus($("#mobile"));
 	})
	$("#mobile").blur(function(){
		$("#mobile").css("border","1px solid #b6b6b6");
	})
	/*密码*/
	$("#pwd").focus(function(){
		 inFocus($("#pwd"));
	})
	$("#pwd").blur(function(){
		$("#pwd").css("border","1px solid #b6b6b6");
	})
	
	/*点击输入时的样式*/
	function inFocus(obj){
		obj.css("border","1px solid #82a4db");	
	}	
	
	/*初始输入状态*/
	 function inputStyle() {
        if ($.cookie("remember") && $.cookie("remember") != "null"){
            $("#mobile").val($.cookie("remember"));
        }else {
            $("#mobile").val("");
        }
    }
	/*点击登录按钮*/
		$("#login").click(function(){
		if($("#mobile").val() != ""){
			if($("#pwd").val()!= ""){
				if($.cookie($("#mobile").val()) == $("#pwd").val()){
					remeberThis();
					$.cookie("login",$("#mobile").val(),{
						expires:7,
						path:"/"
					});
					alert("登录成功！");
					$(location).attr('href',"index.html");
					 
				}else{
					alert("用户名或密码不正确！");
				}
			}else{
				alert("密码不对");
			}
		}else{
			alert("用户名不对");
		}
	})
	
	/*记住登录前的复选框是否选中*/
	    function remeberThis() {
        if ($("#checkbox").is(":checked")){
            $.cookie("remember",$("#mobile").val(),{
                expires:7,
                path:"/"
            });
        }else {
            $.cookie("remember",null);
        }
    }
	
})

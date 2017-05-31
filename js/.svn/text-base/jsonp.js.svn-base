	window.onload = function(){			 
		var oTe = document.getElementById("sou");
		var oBt = document.getElementById("suo"); 
		oTe.onkeyup = function(){
			var sc = document.createElement("script");
			/*在淘宝网站找到相应地址*/
			sc.src = "https://suggest.taobao.com/sug?&q=" + oTe.value + "&callback=fn";
			document.getElementsByTagName("head")[0].appendChild(sc);
		}
		 oTe.onblur = function(){
			ul1.style.display = "none";
			oTe.innerHTML = " ";
		}
		 oTe.onfocus = function(){
		 	ul1.style.display = "block";
		 }		
	}
	/*把获取的数据加到li 中*/
	function fn(str){
		var oUl = document.getElementById("ul1");
		oUl.innerHTML = "";
		for(var i = 0; i < str.result.length; i ++){
			var li = document.createElement("li");
			li.innerHTML = "<a href='#'>" + str.result[i][0] + "</a>";
			oUl.appendChild(li);
		}
		
	}
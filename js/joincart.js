$(function(){
	/*
 * 购物车 不能实现 ，，，，cart是追加元素
 */
var ccount = document.getElementsByClassName("count"); //显示商品总数量的标签节点对象
var btns = document.querySelectorAll("cart"); //所有的购物车按钮
//约定好用名称为datas的cookie来存放购物车里的数据信息  datas里所存放的就是一个json字符串
var listStr = cookieObj.get("datas");
/*判断一下本地是否有一个购物车（datas），没有的话，创建一个空的购物车，有的话就直接拿来使用*/
if(!listStr) { //没有购物车     datas  json
    cookieObj.set({
        name: "datas",
        value: "[]"
    });
    listStr = cookieObj.get("datas");
}
var listObj = JSON.parse(listStr); //数组
/*循环遍历数组，获取每一个对象中的pCount值相加总和*/
var totalCount = 0; //默认为0
for(var i = 0, len = listObj.length; i < len; i++) {
    totalCount = listObj[i].pCount + totalCount;
}
ccount.innerHTML = totalCount;

/*循环为每一个按钮添加点击事件*/
for(var i = 0, len = btns.length; i < len; i++) {
    btns[i].onclick = function() {
    	
        var dl = this.parentNode.parentNode;
        var pid = dl.getAttribute("pid");//获取自定义属性
        var arrs = dl.children;//获取所有子节点
        if(checkObjByPid(pid)) {
            listObj = updateObjById(pid, 1)
        } else {
            var imgSrc = arrs[0].firstElementChild.src;
            var pName = arrs[1].innerHTML;
            var pDesc = arrs[2].innerHTML;
            var price = arrs[3].firstElementChild.innerHTML;
            var obj = {
                pid: pid,
                pImg: imgSrc,
                pName: pName,
                pDesc: pDesc,
                price: price,
                pCount: 1
            };
            listObj.push(obj)
            listObj = updateData(listObj);
        }
        ccount.innerHTML = getTotalCount();
    }
}
/*
 *购物车不能实现
 */
})

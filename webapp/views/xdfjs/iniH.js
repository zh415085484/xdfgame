var phoneWidth = parseInt(window.screen.width);
var phoneHeight = parseInt(window.screen.height);
var phoneScale = phoneWidth/640;

var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
	var version = parseFloat(RegExp.$1);
	// andriod 2.3
	if(version>2.3){
		document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
	// andriod 2.3以上
	}else{
		document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
	}
	// 其他系统
} else {
	document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}


$(document).ready(function(e) {  iniPage();});
//$(window).resize(function(e) {  iniPage();});

function iniPage(){
	phoneWidth=$(window).width()
	phoneHeight=$(window).height()

	phoneScale = phoneHeight/960;
	//alert(phoneScale)
	var pageWidth  = Math.floor(phoneWidth/phoneScale);
	
	var ml=Math.floor((-640*phoneScale+phoneWidth)*0.5)
	//alert($(window).width()+":"+$(document).width())
	//
	$(".box").css({"width":phoneWidth,"height":phoneHeight,"overflow":"hidden"})
	$(".page").css({"-webkit-transform":"scale(" + phoneScale + "," + phoneScale + ")","transform":"scale(" + phoneScale + "," + phoneScale + ")","left":ml})
	$(".logo").css({"left":Math.floor(23-ml/phoneScale)})
	
	$(".msg .d").css({"left":-ml/phoneScale})
	$(".goLeft").css({"left":Math.floor(23-ml/phoneScale)})
	$(".goRight").css({"right":Math.floor(23-ml/phoneScale)})
	$(".ts2").css({"width":phoneWidth/phoneScale,"left":-ml/phoneScale})
		
}


function iniPageW(){
	
	$(".box").css({"height":phoneHeight*1.80}) //1.45
	$(".page").css({"height":phoneHeight*1.80/phoneScale})
	$(".msg .d").css({"height":phoneHeight*1.80/phoneScale})

}
function iniPageW2(){
	
	$(".box").css({"height":phoneHeight})
	$(".page").css({"height":phoneHeight/phoneScale})
	$(".msg .d").css({"height":phoneHeight/phoneScale})

}

document.addEventListener("mousemove",drawA,false);
document.addEventListener("touchmove",drawA,false);
	
function drawA(e){

	if($(".main").height()>960){}else{
	e.stopPropagation();//禁止手势缩放
	e.preventDefault();//在页面滑动时禁止事件
	}
	

}

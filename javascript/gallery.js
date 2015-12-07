$(function(){
	var sWidth = $(".focusbar").width(); 
	var leng = $(".focusbar ul li").length; 
	$(".focusbar ul").width(sWidth*leng);
	$(" .heart").click(function(){
		if($(this).css("background-position")=="-18px -468px"){
			$(this).css("background-position","0px -468px");
			var number=parseInt($(this).siblings(".enjoynumber").text())+1;
			$(this).siblings(".enjoynumber").text(number);
		}
	});
	$(".focusbar .pre").click(function() {
		if($(".focusbar ul li").length>1){
			RightScroll();
		}
	});

	//下一页按钮
	$(".focusbar .next").click(function() {
		if($(".focusbar ul li").length>1){
			AutoScroll();
		}
	});

	function AutoScroll(){
		var _scroll = $(".focusbar ul");
		_scroll.animate({marginLeft:"-800px"},1000,function(){
			//把第一个li丢最后面去
			_scroll.stop(true,false).css({marginLeft:0}).find("li:first").appendTo(_scroll);
		});
	}
	function RightScroll(){
		var _scroll1 = $(".focusbar ul");
		_scroll1.stop(true,false).find("li:last").prependTo(_scroll1);
		_scroll1.css("margin-Left","-800px").animate({"margin-left":0},1000);
	}
	function closegallery(){
		alert("123");
		// $(".gallerygroup .gallerycoverpic").remove();
	}
	$(".gallerycoverpic").live('click',function(){
		$(".gallerycoverpic").remove();
	});
	$(".am-container img").click(function(){
		var second=$(".main_title second");
		var first=$(".main_title first");
		var image=$(this).attr("src");
		var cover="<div class='gallerycoverpic'><img src='"+image+"'></div>";
		$("#container").prepend(cover);
	});
})
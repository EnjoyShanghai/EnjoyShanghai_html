$(function(){
	var sWidth = $(".smallpic").width(); 
	var leng = $(".smallpic ul li").length; 
	$(".smallpic ul").width(sWidth*leng);
	function leftScroll(){
		var _scroll = $(".smallpic ul");
		var _scrollbig=$(".bigpic");
		var bigindex=$(".bigpic li.active").index();
		var smallindex=$(".smallpic ul li.active").index();
		var newbig=bigindex+1;
		var newsmall=smallindex+1;

		$(".bigpic li").eq(bigindex).removeClass("active");
		$(".bigpic li").eq(newbig).addClass("active");
		$(".bigpic li").eq(newbig).animate({opacity:1},200).siblings().animate({opacity:0},200);
		$(".smallpic ul li").eq(smallindex).removeClass("active");
		$(".smallpic ul li").eq(newsmall).addClass("active");


		_scroll.animate({marginLeft:"-115px"},200,function(){
			//把第一个li丢最后面去
			_scroll.stop(true,false).css({marginLeft:0}).find("li:first").appendTo(_scroll);
			_scrollbig.stop(true,false).find("li:first").appendTo(_scrollbig);
			
		});

	}
	$(".buysell a").hover(function(){
		$(this).find("img").addClass("lightness");
		$(this).find(".particle .btitle .ptopic").css("color","#e13627");
	},function(){
		$(this).find("img").removeClass("lightness");
		$(this).find(".particle .btitle .ptopic").css("color","#4a4a4a");
	});
	$('.buysell .photo').hover(function(){
		$(this).find('img').addClass("brightness");
		$(this).find('.btitle').css('color','#e9534b');
	},function(){
		$(this).find('img').removeClass("brightness");
		$(this).find('.btitle').css('color','#4a4a4a');
	});
	$('.leftarticle .barticle').hover(function(){
		$(this).children('.btitle').css('color','#e9534b');
	},function(){
		$(this).children('.btitle').css('color','#4a4a4a');
	});
	function rightScroll(){
		var _scroll1 = $(".smallpic ul");
		var _scrollbig=$(".bigpic");
		_scroll1.stop(true,false).find("li:last").prependTo(_scroll1);
		_scrollbig.stop(true,false).find("li:last").prependTo(_scrollbig);
		_scroll1.css("margin-Left","-115px").animate({"margin-left":0},200);
		var bigindex=$(".bigpic li.active").index();
		var smallindex=$(".smallpic ul li.active").index();
		var newbig=bigindex-1;
		var newsmall=smallindex-1;
		$(".bigpic li").eq(bigindex).removeClass("active");
		$(".bigpic li").eq(newbig).addClass("active");
		$(".bigpic li").eq(newbig).animate({opacity:1},200).siblings().animate({opacity:0},200);
		$(".smallpic ul li").eq(smallindex).removeClass("active");
		$(".smallpic ul li").eq(newsmall).addClass("active");
	}

	$(".smallpic ul li").click(function(){
		var bigindex=$(".bigpic li.active").index();
		var smallindex=$(".smallpic ul li.active").index();	
		var thisindex=$(this).index();
		$(".bigpic li").eq(bigindex).removeClass("active");
		$(".bigpic li").eq(thisindex).addClass("active");
		$(".bigpic li").eq(thisindex).animate({opacity:1},200).siblings().animate({opacity:0},200);
		$(".smallpic ul li").eq(smallindex).removeClass("active");
		$(this).addClass("active");
	});

	$(".enjoy ul li a").hover(function(){
		$(this).siblings().css("display","block");
	},function(){
		$(this).siblings().css("display","none");
	});
	var logolength=$(".enjoy ul li").length; 
	if(logolength===3){
		$(".enjoy ul li").css("margin","0 0 0 20px");
		
	}

	$(".enjoy ul li .save").click(function(){
		if($(this).css("background-position")=="-18px -468px"){
			$(this).removeClass("no");
			$(this).addClass("yes");
		}
		else{
			$(this).removeClass("yes");
			$(this).addClass("no");
		}
	});

	$(".enjoy ul li .forward").mousedown(function(){
		$(this).css("background-position","0px -414px");
	});
	$(".enjoy ul li .forward").mouseup(function(){
		$(this).css("background-position","-18px -414px")
	});
	$(".enjoy ul li .forward").mouseleave(function(){
		$(this).css("background-position","-18px -414px")
	});

	$(".enjoy ul li .report").mousedown(function(){
		$(this).css("background-position","0px -432px");
	});
	$(".enjoy ul li .report").mouseup(function(){
		$(this).css("background-position","-18px -432px")
	});
	$(".enjoy ul li .report").mouseleave(function(){
		$(this).css("background-position","-18px -432px")
	});
	$(".enjoy ul li .print").mousedown(function(){
		$(this).css("background-position","0px -450px");
	});
	$(".enjoy ul li .print").mouseup(function(){
		$(this).css("background-position","-18px -450px")
	});
	$(".enjoy ul li .print").mouseleave(function(){
		$(this).css("background-position","-18px -450px")
	});


	// $(".pre").click(function(){rightScroll();});
	// $(".pre2").click(function(){rightScroll();});
	// $(".next").click(function(){leftScroll();});
	// $(".next2").click(function(){leftScroll();});

	

})

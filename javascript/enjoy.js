$(function(){
	function downScroll(){
		$(".gpic-ul").stop(true,false).find("li:last").prependTo($(".gpic-ul"));
		$(".gpic-ul li").eq(1).animate({opacity: 1},200).css({"z-index": "5"}).siblings(".gpic-ul li").animate({opacity: 0},200).css({"z-index": "0"});

	// var _scrollup1=$("#tFocus-btn ul");
	// _scrollup1.stop(true,false).find("li:last").prependTo(_scrollup1);
	// $("#tFocus-btn ul li").eq(0).addClass("active").siblings().removeClass("active");
	// _scrollup1.css("margin-Top","-104px").animate({marginTop:0},200);

}

function upScroll(){
	$(".gpic-ul li").eq(2).stop(true,false).animate({opacity: 1},200,function(){
			//把第一个li丢最后面去
			$(".gpic-ul").find("li:first").appendTo($(".gpic-ul"));
		}).css({"z-index": "5"}).siblings(".gpic-ul li").animate({opacity: 0},200).css({"z-index": "0"});
		// var _scrollup=$("#tFocus-btn ul");
		// _scrollup.animate({marginTop:"-104px"},200,function(){
		// 	_scrollup.stop(true,false).css({marginTop:0}).find("li:first").appendTo(_scrollup);
		// 	$("#tFocus-btn ul li").eq(0).addClass("active").siblings().removeClass("active");
		// });
}
var _scrollingUp=setInterval(upScroll,4000);
$("#gallery-box").hover(function(){
		//鼠标移动DIV上停止
		clearInterval(_scrollingUp);
	},function(){
		_scrollingUp=setInterval(upScroll,4000);
	});


	//gallery点击效果

	$("#gallery-box .pre").click(function(){
		downScroll();
	})
	$("#gallery-box .next").click(function(){
		upScroll();
	})
	for(var i=0;i<7;i++){
		var c=jQuery(".greycanvas")[i];
		c.width=40;
		c.height=8;
		var ctx=c.getContext("2d");
		ctx.fillStyle="#808184";
		ctx.moveTo(5,0)
		ctx.lineTo(35,0),
		ctx.lineTo(20,6),
		ctx.lineTo(5,0);
		ctx.fill();
	}

	$("#menu_bar ul li").hover(function(){
		var menuindex=$(this).index();
		if(menuindex==6){
			$(".search_enter").css("display","none");
			$(".sub_menu ul").css("display","none");
			if($("#directory").is(":hidden")){
				$("#directory").fadeIn();
				$(".grandson li").eq(0).addClass("active");
				$(".second_classify li").eq(0).addClass("active").siblings(".active").removeClass("active");
			}
		}
		else{
			if($("#directory").is(":visible")){
				$("#directory").fadeOut();
				$(".grandson li").find(".active").removeClass("active");
				$(".second_classify li").find(".active").removeClass("active");
			}
			$(".search_enter").css("display","none");
			$(".sub_menu ul").css("display","block");
			$(".sub_menu ul li").eq(menuindex).css("display","block").siblings().css("display","none");
		}
		$(this).find("a").css("color","#878787");
		$(this).find("canvas").removeClass("greycanvas").addClass("redcanvas");
		$(this).siblings().find(".redcanvas").removeClass("redcanvas").addClass("greycanvas");
		$(this).siblings().find("a").css("color","#666");
		var red=jQuery(".redcanvas")[0];
		var rtx=red.getContext("2d");
		rtx.fillStyle="#C9242C";
		rtx.lineTo(40,0),
		rtx.lineTo(20,8),
		rtx.lineTo(0,0);
		rtx.fill();
		for(var i=0;i<7;i++){
			var c=jQuery(".greycanvas")[i];
			c.width=40;
			c.height=8;
			var ctx=c.getContext("2d");
			ctx.fillStyle="#808184";
			ctx.moveTo(5,0)
			ctx.lineTo(35,0),
			ctx.lineTo(20,6),
			ctx.lineTo(5,0);
			ctx.fill();
		}
	});

$("#menu_bar").mouseleave(function(){
	$(".sub_menu ul").css("display","none").find("li").css("display","none");

	$("#menu_bar ul li canvas.redcanvas").removeClass("redcanvas").addClass("greycanvas");
	$("#menu_bar ul li").find("a").css("color","#666");
	for(var i=0;i<7;i++){
		var c=jQuery(".greycanvas")[i];
		c.width=40;
		c.height=8;
		var ctx=c.getContext("2d");
		ctx.fillStyle="#808184";
		ctx.moveTo(5,0)
		ctx.lineTo(35,0),
		ctx.lineTo(20,6),
		ctx.lineTo(5,0);
		ctx.fill();
	}
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
if (jQuery.browser.msie && jQuery.browser.version >= 9) {
	jQuery.support.noCloneEvent = true
}
var zindex=0;
function AutoScroll(){
	var _scroll = $(".focusbar ul");
	_scroll.animate({marginLeft:"-700px"},500,function(){
			//把第一个li丢最后面去
			_scroll.stop(true,false).css({marginLeft:0}).find("li:first").appendTo(_scroll);
		});
}

function RightScroll(){
	var _scroll1 = $(".focusbar ul");
	_scroll1.stop(true,false).find("li:last").prependTo(_scroll1);
	_scroll1.css("margin-Left","-700px").animate({"margin-left":0},500);
}
$(function(){

	$("#tFocus-btn ul li").click(function(){
		if ($(this).index()==2) {upScroll();}
		else if($(this).index()==0){downScroll();};
	});
	var fbindex=5;
	var ybindex=0;
		var sWidth = $(".focusbar").width(); //获取焦点图的宽度（显示面积）
		var leng = $(".focusbar ul li").length; //获取焦点图个数
		//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
		var btn = "<div class='btnBg'></div><div class='btn'>";
		for(var i=0; i < leng; i++) {
			btn += "<span></span>";
		}
		btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$(".focusbar").append(btn);
		$(".focusbar .btnBg").css("opacity",0.1);
		
		$("#gallery ul li").hover(function(){
			var gindex=$(this).index();
			$("#gallery ul li.active").removeClass("active");
			$(this).addClass("active");
		});

		// hover变色箭头
		$(".allarticle").hover(function(){
			$("#focus_container .go1").css("background-position","-36px -18px");
			$("#morearticle").css("color","#CA3023");
		},function(){
			$("#focus_container .go1").css("background-position","0px 0px");
			$("#morearticle").css("color","white");
		});
		$("#vipmember .coolbtn .vseemore").hover(function(){
			$("#vipmember .coolbtn div div").css("background-position","0px -18px");
			$(".vseemore a").css("color","white");
		},function(){
			$("#vipmember .coolbtn div div").css("background-position","-18px 0px");
			$(".vseemore a").css("color","#cecaad");
		});
		$(".classified .foot a span").hover(function(){
			$(".classified .foot a div").css("background","url(/images/icon/go.png)");
			$(".classified .foot a div").css("background-position","-36px -18px");
			$(".classified .foot a span").css("color","#CA3023");
		},function(){
			$(".classified .foot a div").css("background","url(/images/icon/go.png)");
			$(".classified .foot a div").css("background-position","0px 0px");
			$(".classified .foot a span").css("color","white");
		});
		$(".classified .foot a div").hover(function(){
			
			$(".classified .foot a div").css("background","url(/images/icon/go.png)");
			$(".classified .foot a div").css("background-position","-36px -18px");
			$(".classified .foot a span").css("color","#CA3023");
		},function(){
			$(".classified .foot a div").css("background","url(/images/icon/go.png)");
			$(".classified .foot a div").css("background-position","0px 0px");
			$(".classified .foot a span").css("color","white");
		});
		$("#events_calendar .foot a").hover(function(){
			$("#events_calendar .foot a span").css("color","#CA3023");
			$("#events_calendar .foot a .go").css("background-position","-36px -18px");
		},function(){
			$("#events_calendar .foot a span").css("color","white");
			$("#events_calendar .foot a .go").css("background-position","0px 0px");
		});

		// $("#gallery-box .head a").hover(function(){
		// 	$(this).css("color","#CA3023");
		// 	$("#gallery-box .head a div").css("background-position","-36px -18px");
		// },function(){
		// 	$(this).css("color","white");
		// 	$("#gallery-box .head a div").css("background-position","0px 0px");
		// });

$("#story").hover(function(){
	$(this).find(".storyimg").addClass("brightness");
	$("#story p").css("color","#CA3023");
	$("#story .view .storylog").css("background-position","-30px 0px");
},function(){
	$(this).find(".storyimg").removeClass("brightness");
	$("#story .view p").css("color","white");
	$("#story .storyarticle p").css("color","#9b9b9b");
	$("#story .view .storylog").css("background-position","0px 0px");
});
		// $("#menu_bar ul li:last-child a").hover(function(){
		// 	$("#menu_bar ul li:last-child").find('a').css("color","#e23628");
		// 	$("#menu_bar ul li:last-child").css("border-bottom","2px solid #e23628");
		// 	$("#menu_bar ul li:last-child").find(".menumore").css("background-position","-16px -13px");
		// },function(){
		// 	$("#menu_bar ul li:last-child").find('a').css("color","#666666");
		// 	$("#menu_bar ul li:last-child").css("border-bottom","0");
		// 	$("#menu_bar ul li:last-child").find(".menumore").css("background-position","-16px 0px");
		// })

		//上一页按钮
		$(".focusbar .pre").click(function() {
			RightScroll();
		});

		//下一页按钮
		$(".focusbar .next").click(function() {
			
			AutoScroll();
		});
		$(".offer-box .img").hover(function(){
			$(this).find('img').addClass("brightness");
			$(this).find('.viptext a').css("color","#cecaad");
		},function(){
			$(this).find('img').removeClass("brightness");
			$(this).find('.viptext a').css("color","#E13627");
		});
		//左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
		$(".focusbar ul").css("width",sWidth * (leng));
		

		$(".focusbar .preNext").hover(function(){
			//鼠标移动DIV上停止
			clearInterval(_scrolling);
		});
		$("#tFocus-pic li").hover(function(){
			$("#tFocus-pic li a").css("color","black");
		},function(){
			$("#tFocus-pic li a").css("color","#fff");
		});

		//左侧标签栏
		function yellowbtn(){
			var bindex=$(this).index();
			// for (var i = 3; i >= 0; i--) {
			// 	var j=3-i;
			// 	$(".left-side .button ul li").eq(i).css("z-index",j);
			// };
			// $(this).css("z-index","5");
			$(this).addClass("selected").removeClass("rest").siblings().removeClass("selected").addClass("rest");
			$(".bul li").eq(bindex).removeClass("hide").addClass("show").siblings().removeClass("show").addClass("hide");
			ybindex=bindex;
		}


		$(".left-side .button ul li").click(yellowbtn);
		$(".left-side .button ul li").hover(function(){
			$(this).addClass("selected").removeClass("rest");
		},function(){
			var bindex=$(this).index();
			if(ybindex!=bindex){
				$(this).addClass("rest").removeClass("selected");
			}
		});
		$('.ul ul li .box').hover(function(){
			$(this).find('img').addClass('brightness');
			$(this).find('h3 a').css("color","#ffb951");
		},function(){
			$(this).find('img').removeClass('brightness');
			$(this).find('h3 a').css("color","#4a4a4a");
		});
		$('#gallery-box .box .body .gpic-ul li').hover(function(){
			$(this).find('img').addClass('brightness');
			$(this).find('h1').css("color","black");
			$(this).find('p').css("color","black");
		},function(){
			$(this).find('img').removeClass('brightness');
			$(this).find('h1').css("color","#000");
			$(this).find('p').css("color","#000");
		});
		$('.focus ul li a').hover(function(){
			$(this).find('img').addClass('brightness');
			$(this).find('.slideother h1').css("color","#CA3023");
			$(this).find('.slideother p').css("color","#CA3023");
		},function(){
			$(this).find('img').removeClass('brightness');
			$(this).find('.slideother h1').css("color","#fff");
			$(this).find('.slideother p').css("color","#fff");
		});
		// $(".focus ul li .sidelist li").hover(function(){
		// 	$('.focus ul li').find('img').removeClass('brightness');
		// 	$('.focus ul li').find('.slideother h1 a').css("color","#fff");
		// 	$('.focus ul li').find('.slideother p a').css("color","#fff");
		// });
$(".level ul li").click(function(){
	$(".level ul li:eq(0) div").css("background-position","-35px 0px");
	$(".level ul li:eq(1) div").css("background-position","-35px -35px");
	$(".level ul li:eq(2) div").css("background-position","-35px -70px");
	$(this).css("background-color","#E13627").find("p").css("color","white");
	$(this).siblings().css("background-color","#f2f2f2").find("p").css("color","#A8A89B");
	$(this).removeClass("shadow").siblings().addClass("shadow");
	fbindex=$(this).index();
	$("#feedbackRating").val(fbindex+1);
	switch(fbindex){
		case 0: $(this).find("div").css("background-position","0px 0px");break;
		case 1: $(this).find("div").css("background-position","0px -35px");break;
		case 2: $(this).find("div").css("background-position","0px -70px");break;
	};
});
$('#event-classified a').hover(function(){
	$(this).find('img').addClass("brightness");
	$(this).find('.title').css("color","#CA3023");
},function(){
	$(this).find('img').removeClass("brightness");
	$(this).find('.title').css("color","#4a4a4a");
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

$(".classified .center ul .li .events li").hover(function(){
	$(this).css('background-color',"#F2F2F2");
	$(this).find("a").css("color","#e9534b");
	$(this).find("a").css("font-weight","bold");
},function(){
	$(this).css('background-color',"white");
	$(this).find("a").css("color","grey");
	$(this).find("a").css("font-weight","normal");
});
$(".level ul li").hover(function(){
	var lindex=$(this).index();
	$(this).css("background-color","#E13627").find("p").css("color","white");
	switch(lindex){
		case 0: $(this).find("div").css("background-position","0px 0px");break;
		case 1: $(this).find("div").css("background-position","0px -35px");break;
		case 2: $(this).find("div").css("background-position","0px -70px");break;
	};
},function(){
	var lindex=$(this).index();
	if(fbindex!=lindex){
		$(this).css("background-color","#f2f2f2").find("p").css("color","#a8a89b");
		$(this).addClass("shadow");
		switch(lindex){
			case 0: $(this).find("div").css("background-position","-35px 0px");break;
			case 1: $(this).find("div").css("background-position","-35px -35px");break;
			case 2: $(this).find("div").css("background-position","-35px -70px");break;
		};
	}
});
});
})



$(function(){
	$("#directory").mouseleave(function(){
		$("#directory").fadeOut();
		$(".grandson li").find(".active").removeClass("active");
		$(".second_classify li").find(".active").removeClass("active");
		e?e.stopPropagation():event.cancelBubble = true;
	});
	$("#directory").click(function(e){
		e?e.stopPropagation():event.cancelBubble = true;
	});
	$(document).click(function(){
		$("#directory").fadeOut();
		$(".second_classify li.active").removeClass("active");
		$(".grandson li.active").removeClass("active");
	});
	$("#directory a").click(function(){
		$("#directory").fadeOut();
	});
	$(".second_classify li").hover(function(){
		var index=$(this).index();
		$(".second_classify li.active").removeClass("active");
		$(this).addClass("active");
		$(".grandson li.active").removeClass("active");
		$(".grandson li").eq(index).addClass("active");
	});
	$(".search_enter input").keydown(function(){
		$(".search_menu_thrid").css("display","block");
		$(".search_menu_second").css("display","none");
	});
	$(".search_menu_first li").hover(function(){
		var index=$(this).index();
		$(".search_menu_first li.active").removeClass("active");
		$(this).addClass("active");
		$(".search_menu_second").children().eq(index).css("display","block").siblings().css("display","none");
		$(".search_menu_thrid").css("display","none");
		$(".search_menu_second").css("display","block");

	});

	function stopPropagation(e) {
		if (e.stopPropagation) 
			e.stopPropagation();
		else 
			e.cancelBubble = true;
	}
	$(document).bind('click',function(){
		$('#hidden_menu').css('display','none');
	});
	$(document).bind('click',function(){
		$("#categories .title .seemore").removeClass("rotate");
		$('.category').css('display','none');
		$('.servicecategory').css('display','none');
	});
	$(document).bind('click',function(){
		$('.search_enter').css('display','none');
	})
	$(".close_buttom").bind('click',function(){
		$("#hidden_menu").css('display','none');
	});
	$('.search_enter #Keywords').bind('click',function(e){
		$('#hidden_menu').css('display','block');
		$(".search_menu_first li.active").removeClass("active");
		$(".search_menu_second").children().eq(0).css("display","block").siblings().css("display","none");
		$(".search_menu_first li").eq(0).addClass("active");
		stopPropagation(e);
	});

	$('#hidden_menu').bind('click',function(e){
		stopPropagation(e);
	});
	$('.search_enter').bind('click',function(e){
		stopPropagation(e);
	});
	$('#categories .inside .title a').bind('click',function(e){
		if($('.category').css('display')=='none'||$('.servicecategory').css('display')=='none'){
			$('.category').css('display','block');
			$('.servicecategory').css('display','block');
			$("#categories .title .seemore").addClass("rotate");
		}
		stopPropagation(e);
	});
	$('.category').bind('click',function(e){
		stopPropagation(e);
	});
	$('.servicecategory').bind('click',function(e){
		stopPropagation(e);
	});

	$("#magnifier").bind('click',function(e){
		if($(".search_enter").is(":visible")==false){
			$(".sub_menu ul").css("display","none");
			$("#menu_bar ul li canvas.redcanvas").removeClass("redcanvas").addClass("greycanvas");
			$("#menu_bar ul li").find("a").css("color","#666");
			for(var i=0;i<7;i++){
				var c=jQuery(".greycanvas")[i];
				c.width=40;
				c.height=8;
				var ctx=c.getContext("2d");
				ctx.fillStyle="#808184";
				ctx.moveTo(5,0)
				ctx.lineTo(35,0),
				ctx.lineTo(20,6),
				ctx.lineTo(5,0);
				ctx.fill();
			}
			$(".search_enter").css("display","block").find("input").val("");

		}
		else{
			$(".search_enter").css("display","none");
		}
		stopPropagation(e);
	});
	// grey
	for(var i=0;i<50;i++){
		if(i%2==0){
			$(".categories_list ul li").eq(i).addClass("greybackground");
		}
		var catsum=$(".categories_list ul li").eq(i).width();
		var catright=$(".categories_list ul li").eq(i).find(".right").width();
		$(".categories_list ul li").eq(i).find(".left").css("width",catsum-catright-40);
	}
})
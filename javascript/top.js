$(function(){

	$("#menu_bar ul li:last-child").hover(function(){
		$("#menu_bar ul li:last-child").find('a').css("color","#e23628");
		$("#menu_bar ul li:last-child").css("border-bottom","2px solid #e23628");
		$("#menu_bar ul li:last-child").find(".menumore").css("background-position","-16px -13px");
		
		
	},function(){
		$("#menu_bar ul li:last-child").find('a').css("color","#666666");
		$("#menu_bar ul li:last-child").css("border-bottom","0");
		$("#menu_bar ul li:last-child").find(".menumore").css("background-position","-16px 0px");
		
	});
	$("#menu_bar ul li:last-child").click(function(e){
		if($("#directory").is(":hidden")){
			$("#directory").fadeIn();
			e?e.stopPropagation():event.cancelBubble = true;
			$(".grandson li").eq(0).addClass("active");
			$(".second_classify li").eq(0).addClass("active");

		}
	});
	$("#directory").click(function(e){
		e?e.stopPropagation():event.cancelBubble = true;
	});
	$(document).click(function(){
		$("#directory").fadeOut();
		$(".second_classify li.active").removeClass("active");
		$(".grandson li.active").removeClass("active");
	})
	$("#directory a").click(function(){
		$("#directory").fadeOut();
	})
	$(".second_classify li").hover(function(){
		var index=$(this).index();
		$(".second_classify li.active").removeClass("active");
		$(this).addClass("active");
		$(".grandson li.active").removeClass("active");
		$(".grandson li").eq(index).addClass("active");
	});
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
	
	//jobs,property,personal二级页面鼠标悬停列表，图片变暗，标题变色
	$(".categories_list ul li").hover(function(){
		$(this).find("img").addClass("brightness");
		$(this).find("h2").css("color","#E13267");
	},function(){
		$(this).find("img").removeClass("brightness");
		$(this).find("h2").css("color","#4a4a4a");
	});
})
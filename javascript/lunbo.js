$(function() {
	var mydate=new Date();
	// var sWidth = $(".focus").width(); //获取焦点图的宽度（显示面积）
	// var len = $(".focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;




	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	// var btn = "<div class='btnBg'></div><div class='btn'>";
	// for(var i=0; i < len; i++) {
	// 	btn += "<span></span>";
	// }
	// btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	// $(".focus").append(btn);
	// $(".focus .btnBg").css("opacity",0.5);

	//上一页、下一页按钮透明度处理
	// $(".focus").hover();
	// $(".focus").mousemove(function(e){
	// 	var leftwidth=($(document.body).width()-980)/2;
	// 	if(e.pageX<leftwidth+300){
	// 		$(".focus .pre").stop(true,false).animate({"opacity":"0.5"},100);
	// 		$(".focus .next").stop(true,false).animate({"opacity":"0"},100);
	// 	}
	// 	else if(e.pageX>leftwidth+480){
	// 		$(".focus .next").stop(true,false).animate({"opacity":"0.5"},100);
	// 		$(".focus .pre").stop(true,false).animate({"opacity":"0"},100);
	// 	}
	// 	else{
	// 		$(".focus .preNext").stop(true,false).animate({"opacity":"0"},100);
	// 	}
	// });
$(".focus").mousemove(function(e){
	var leftwidth=($(document.body).width()-980)/2;
	if(e.pageX<leftwidth+300){
		$(".focus .pre").css("opacity","0.5");
		$(".focus .next").css("opacity","0");
	}
	else if(e.pageX>leftwidth+420){
		$(".focus .next").css("opacity","0.5");
		$(".focus .pre").css("opacity","0");
	}
	else{
		$(".focus .preNext").css("opacity","0");
	}
});
$("#focus_container").mouseleave(function(){
	$(".focus .preNext").css("opacity","0");
});
	//上一页按钮
	$(".focus .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//下一页按钮
	$(".focus .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	//左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	// $(".focus ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	// $(".focus").hover(function() {
	// 	clearInterval(picTimer);
	// },function() {
	// 	picTimer = setInterval(function() {
	// 		showPics(index);
	// 		index++;
	// 		if(index == len) {index = 0;}
	// 	},3000); //此3000代表自动播放的间隔，单位：毫秒
	// }).trigger("mouseleave");

	// //显示图片函数，根据接收的index值显示相应的内容
	// function showPics(index) { //普通切换
	// 	var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
	// 	$(".focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	// 	$(".focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	// }

	$(document).ready(function adddate(){

		$("#date-ul li:eq(0)").children(".datetime").children(".day").html("TODAY");
		$("#date-ul li:eq(0)").children(".datetime").children(".date-day").html(mydate.getDate());
		for(var i=1;i<7;i++){
			switchdate(i);
		}
	});
	function switchdate(i){
		var curMonthDays = new Date(mydate.getFullYear(), (mydate.getMonth()+1), 0).getDate();
		var date=(mydate.getDay()+i)%7;
		switch(date){
			case 1: $("#date-ul li:eq("+i+")").children(".datetime").children(".day").html("MON");break;
			case 2: $("#date-ul li:eq("+i+")").children(".datetime").children(".day").html("TUE");break;
			case 3: $("#date-ul li:eq("+i+")").children(".datetime").children(".day").html("WEN");break;
			case 4: $("#date-ul li:eq("+i+")").children(".datetime").children(".day").html("THU");break;
			case 5: $("#date-ul li:eq("+i+")").children(".datetime").children(".day").html("FRI");break;
			case 6: $("#date-ul li:eq("+i+")").children(".datetime").children(".day").html("SAT");break;
			case 0: $("#date-ul li:eq("+i+")").children(".datetime").children(".day").html("SUN");break;
			default:break;
		}
		if (mydate.getDate()+i>curMonthDays) {
			$("#date-ul li:eq("+i+")").children(".datetime").children(".date-day").html(mydate.getDate()+i-curMonthDays);
		}else{
			$("#date-ul li:eq("+i+")").children(".datetime").children(".date-day").html(mydate.getDate()+i);
		}
	}
//添加active
$("#date-ul li").hover(function(){

		//删除原先active
		var oldindex=$("#date-ul li.active").index();
		$("#date-ul li").removeClass("active");
		//添加新active
		$(this).addClass("active");
		var index=$(this).index();
		if(index==0){
			$("#date-ul li:eq(0)").children(".datetime").children(".day").html("TODAY");
			$("#date-ul li:eq(0)").children(".datetime").children(".date-day").html(mydate.getDate());}
			else{switchdate(index);}
			
			$(".ul ul li").removeClass("active");
			$(".ul ul li:eq("+index+")").addClass("active");
			
		});

$(".classified .menu ul li").hover(function(){
	var voldindex=$(".classified .menu ul li.active").index();
	$(".classified .menu ul li").removeClass("active");
	$(this).addClass("active");
	var vindex=$(this).index();
	$("#center-box ul .li").removeClass("block");
	$("#center-box ul .li").addClass("none");
	$("#center-box ul .li:eq("+vindex+")").removeClass("none");
	$("#center-box ul .li:eq("+vindex+")").addClass("block");
});

//部分二级页面，鼠标悬停列表，图片变暗，标题变色
$(".bown").hover(function(){
	$(this).find(".articlePhoto").addClass("brightness");
	$(this).find(".articleItem h3").css("color","#E13267");
	$(this).find(".articleItem h3 a").css("color","#E13267");
},function(){
	$(this).find(".articlePhoto").removeClass("brightness");
	$(this).find(".articleItem h3").css("color","#4a4a4a");
	$(this).find(".articleItem h3 a").css("color","#4a4a4a");
});







});


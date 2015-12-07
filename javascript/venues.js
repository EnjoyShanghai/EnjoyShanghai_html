// JavaScript Document
//if (top.location != self.location)
//top.location = self.location;

function showVenue(intSection) {
	if (intSection != 0) {
		$.ajax({
	   		url: '/vip/findVenuFunction.asp?intSection='+intSection,
			type: 'GET',
	   		success: function(msg){
				$("#findList").html(msg);
	   		}
	 	});	
	}
}


function checkClient(){
	if ($("#intClient").val() > 0) {
		return true;
	}
	else return false;
}

function loginForm(){
	var strMessage;
	strMessage = '';
	card_no = encodeURIComponent($("#card_no").val());	
	//alert(card_no);
	if (card_no == '') strMessage = '<li>Card Number cannot be empty</li>';
	pin_no = encodeURIComponent($("#pin_no").val());
	//alert(pin_no);
	if (pin_no == '') strMessage = strMessage + '<li>Password cannot be empty</li>';

	if (strMessage != '') {
		$('#strMessage').html('<ul>' + strMessage + '</ul>');
	}
	else {
		$.ajax({
	   		url: '/vip/loginFunction.asp?card_no='+card_no+'&pin_no='+pin_no,
			type: 'GET',
	   		success: function(msg){
				if (msg.substring(0,2) == '1-' ){
					$("#strMessage").html(msg.substring(2,msg.length));
				}
				else if (msg.substring(0,2) == '2-' ) {
					parent.location.href='/register.asp?cn='+card_no+'&pn='+pin_no;
				}
				else {
					window.location.reload();
				}
	   		}
	 	});	
	}
}

function loginOut(){
	$.ajax({
   		url: '/vip/loginFunction.asp?item=logout',
		type: 'GET',
   		success: function(msg){
			window.location.reload();
   		}
 	});	
}


var newStar = new Array(10)

function getRating(intRatingType,intSort,starID){ 
	var starID = starID;
	newStar[intSort-1] = starID;
	$("#rating_"+intRatingType).val(starID);

	for(i=1;i<=5;i++) {
		if (i <= starID){
			$("#rating_"+intRatingType+"_"+i).css("background-image", "url(/images/stars/star-index-m.gif)");  
		}
		else{
			$("#rating_"+intRatingType+"_"+i).css("background-image", "url(/images/stars/star-gray-m.gif)");  
		}
	} 
}

function setRating(origialRating,intPoint,intRatingType,intSort){
	for (var i = 1; i<=5 ; i ++){
		if (i<=intPoint){
			$("#rating_"+intRatingType+"_"+i).css("background-image", "url(/images/stars/star-index-m.gif)");  
		}
		else{
			$("#rating_"+intRatingType+"_"+i).css("background-image", "url(/images/stars/star-gray-m.gif)");  
		}
	}
}

function cleanRating(origialRating,intPoint,intRatingType,intSort){
	if (newStar[intSort-1] == ""||newStar[intSort-1] == undefined) {
		starPoint = origialRating;
		starImg = "url(/images/stars/star-index-m.gif)"
	}
	else {
		starPoint = newStar[intSort-1]
		starImg = "url(/images/stars/star-index-m.gif)"
	}
	for (var i = 1; i<=5 ; i ++){
		if (i<=starPoint){
			$("#rating_"+intRatingType+"_"+i).css("background-image", starImg);  
		}
		else{
			$("#rating_"+intRatingType+"_"+i).css("background-image", "url(/images/stars/star-gray-m.gif)");  
		}
	}
}

function ratingFunction(intClient,intTotal,intMem){
	var strLink;
	strLink = '';
	for(j=1;j<=intTotal;j++)
	{
		ratingvalue = 0
		intRatingType = $("#intRatingTyp_"+j).val();
		if ($("#rating_"+intRatingType).val() == '')
			ratingvalue = 3;
		else
			ratingvalue = $("#rating_"+intRatingType).val();
			strLink = strLink + '&intRatingType_'+j+'='+intRatingType+'&rating_'+j+'='+ ratingvalue;
	}

	$.ajax({
   		url: '/vip/updateRating.asp?clientid=' + intClient + '&intTotal=' + intTotal + strLink + '&userid='+intMem,
		type: 'GET',
   		success: function(msg){
			$("#rating").hide();
			$("#reviewForm").show();
   		}
 	});

}

function reviewFunction(intClient,intMem){
	avgPrice = $("#avgPrice").val();
	payment = $("input[name='payment']:checked").val();

	if (payment != 'neither') {
		ratingValue = 3;
		for(i=5;i>=1;i--) { 
			if ($("#rating_0_"+i).css("background-image") == "url(/images/stars/star-index-m.gif)"){
				var ratingValue = i;
				break;
			}
		}
	}
	else{
		ratingValue = '';
	}

	review = $("#review").val();
	locationid = $("#locationid").val();

	$.ajax({
   		url: '/vip/updateReview.asp?clientid='+intClient+'&userid='+intMem+'&avgPrice='+avgPrice+'&payment='+payment+'&review='+escape(review)+'&locationid='+locationid+'&ratingValue='+ratingValue,
		type: 'GET',
   		success: function(msg){
			$("#reviewForm").hide();
			$("#rating").hide();
			$("#thks").show();
   		}
 	});

}

function showMoreLocation(hidelang,morelang){
	if($("#moreLocation").css("display")=="none") {
		$("#moreLocation").show();
		$("#labelLocation").html("<a href='javascript:showMoreLocation(\""+hidelang+"\",\""+morelang+"\")' class='close'>" + hidelang + "</a>");
	}
	else{
		$("#moreLocation").hide();
		$("#labelLocation").html("<a href='javascript:showMoreLocation(\""+hidelang+"\",\""+morelang+"\")' class='open'>" + morelang + "</a>");
	}
}

function addMore(){
	intMoreCount = $("#intMoreCount").val();
	if (intMoreCount == ""||intMoreCount == undefined) intMoreCount = 1;
	if (intMoreCount < 5){
		intMoreCount = parseInt(intMoreCount) + 1;
		strSample = $("#sample").html();
		strSample = strSample.replace(/_0/g,"_"+intMoreCount);
		$('#moreList').append(strSample);
		$("#intMoreCount").val(intMoreCount);
	}
}
	
function givePoint(intUser,intReview,intLang) {
	$.ajax({
   		url: '/vip/giveReviewPoint.asp?reviewid='+intReview+'&userid='+intUser+'&bitType=1&langid='+intLang,
		type: 'GET',
   		success: function(msg){
			$("#givePointDatail_"+intReview).html(msg);
   		}
 	});
}


function cancelPoint(intReviewPoint,intReview,intUser,intLang) {
	$.ajax({
   		url: '/vip/giveReviewPoint.asp?reviewPointID='+intReviewPoint+'&bitType=0'+'&reviewid='+intReview+'&userid='+intUser+'&langid='+intLang,
		type: 'GET',
   		success: function(msg){
			$("#givePointDatail_"+intReview).html(msg);
   		}
 	});
}

function showClassic(intType){
	if (intType == 1){
		$("#classic-kit").show();
		$("#starter-kit").hide();
	}
	else if (intType == 0) {
		$("#classic-kit").hide();
		$("#starter-kit").show();
	}
	else{
		$("#classic-kit").hide();
		$("#starter-kit").hide();
	}
}

function checkOrderForm(strlang) {
	if (strlang == 'ch') {
		if ($("input[name='bitTerms']:checked").val()== 1){return true;}
		else {alert("请先阅读会员条款");return false;}
	}
	else{
		if ($("input[name='bitTerms']:checked").val()== 1){return true;}
		else {alert("Please read Member Agreement");return false;}
	}
}
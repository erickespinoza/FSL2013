$(function(){
	$(".info").parent().attr("href","info.html");
	$(".follow").parent().attr("href","https://www.facebook.com/SiembraYLucha");
	
	$(".lineup").find("li").mouseover(function(){
		$(this).find(".title2").css({"background":"#353535"});
	}).mouseout(function(){
		$(this).find(".title2").css({"background":"#000"});
	});
});
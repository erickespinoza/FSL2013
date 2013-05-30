$(function(){

	$(".info").parent().attr("href","info.html");
	$(".follow").parent().attr("href","https://www.facebook.com/SiembraYLucha");

	$(".transport").mouseover(function(){
		$(this).find(".title1").css({"background":"#353535"});
	}).mouseout(function(){
		$(this).find(".title1").css({"background":"#000"});
	});

	$(".tickets").mouseover(function(){
		$(this).find(".title1").css({"background":"#353535"});
	}).mouseout(function(){
		$(this).find(".title1").css({"background":"#000"});
	});

	$(".slider").mouseover(function(){
		$(this).find(".title1").css({"background":"#353535"});
	}).mouseout(function(){
		$(this).find(".title1").css({"background":"#000"});
	});

	// $("#second").find("li").mouseover(function(){
	// 	$(this).find(".title2").css({"background":"#353535"});
	// }).mouseout(function(){
	// 	$(this).find(".title2").css({"background":"#000"});
	// });


	setInterval(function(){anim()},5000);
	setInterval(function(){animline()},30000);

	var top = -456;
	var topline = -184;
	var cont = 1;
	var contline = 1;

	function anim(){

		//console.log(cont);
		if(cont>=3){
			cont = 0;
			top = 0;
		}
		$("#first").find(".slider").find("ul").animate({"top":top+"px"});
		
		top -= 456;
		cont ++;	
	}
	function animline(){
		if(contline>=3){
			contline = 0;
			topline = 0;
		}
		$("#second").find("ul").animate({"top":topline+"px"});

		topline -=184;
		contline++;
	}

	
});
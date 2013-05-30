$(function(){
	$.get("xml/web.xml",function(xml){
		$(xml).find("band").each(function(){
			// console.log("bandas");
			var titulo = $(this).find("titulo").text();
			var urlImag = $(this).find("imagen").text();
			$("#first").find(".lineup").find("ul").append("<a href='"+titulo+".html' title="+titulo+"><li><img src="+urlImag+" alt="+titulo+"><div class='title2'><p>"+titulo+"</p></div> </li></a>");

			$(".lineup").find("li").mouseover(function(){
				$(this).find(".title2").css({"background":"#353535"});
			}).mouseout(function(){
				$(this).find(".title2").css({"background":"#000"});
			});
		});


	});
});
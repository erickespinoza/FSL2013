$(function(){
	$.get("xml/web.xml",function(xml){
		$(xml).find("noticia").each(function(){
			var titulo = $(this).find("titulo").text();
			var urlImag = $(this).find("imagen").text();
			var descripcion = $(this).find("descripcion").text();
			$("#first").find(".slider").find("ul").append("<a href='noticias.html' title="+titulo+"><li><img src="+urlImag+" alt="+titulo+"><div class='title1'><div class='desc'>"+descripcion+"</div><p>"+titulo+"</p></div></li></a>");
		});

		$(xml).find("band").each(function(){
			// console.log("bandas");
			var titulo = $(this).find("titulo").text();
			var urlImag = $(this).find("imagen").text();
			$("#second").find("ul").append("<a href='lineup.html' title="+titulo+"><li><img src="+urlImag+" alt="+titulo+"><div class='title2'><p>"+titulo+"</p></div> </li></a>");

			$("#second").find("li").mouseover(function(){
				$(this).find(".title2").css({"background":"#353535"});
			}).mouseout(function(){
				$(this).find(".title2").css({"background":"#000"});
			});
		});
	});
});
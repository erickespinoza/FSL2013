$(function(){
	$(".info").parent().attr("href","info.html");
	$(".follow").parent().attr("href","https://www.facebook.com/SiembraYLucha");
	
	$.get("xml/web.xml",function(xml){
		$(xml).find("news").each(function(){
			var titulo = $(this).find("titulo").text();
			var urlImag = $(this).find("image").text();
			var descripcion = $(this).find("descripcion").text();
			$("#first").find(".news").append("<article><a name='"+titulo+"'><img src="+urlImag+" ></a><h2>"+titulo+"</h2><p>"+descripcion+"</p><div data-href='http://festsl.com/noticias.html#"+titulo+"' class='fb-comments' data-width='626' data-num-posts='10' data-colorscheme='light'></div></article>");
		});
	});
});
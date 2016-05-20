$.get("../handlebarComponent/searchbody.hbs",function(data){

	var obj={name:"SearchPage"};
	var template=Handlebars.compile(data);
	appendbody(template(obj));
});
function appendbody(html){

	$(".body").html(html);
	init();
}

function init(){

	$("body").on("click",".btnurl",function(){
		//alert("hello");
		window.location.href="index.html";
	});
}
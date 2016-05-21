$.get("../handlebarComponent/searchbody.handlebars",function(data){

	var obj={name:"SearchPage"};
	var template=Handlebars.compile(data);
	appendbody(template(obj));
});
function appendbody(html){

	$(".body").html(html);
	
}


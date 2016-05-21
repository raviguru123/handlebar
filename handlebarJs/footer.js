$.get("../handlebarComponent/footer.handlebars",function(data){

	var obj={name:"footer"};
	var template=Handlebars.compile(data);
	var html=template(obj);
	appendHeader(html);
});

function appendHeader(html){

	$(".footer").html(html);
}
$.get("../handlebarComponent/indexbody.hbs",function(data){

	var obj={name:"body"};
	var handlebarTemplate=Handlebars.compile(data);
	var html=handlebarTemplate(obj);
	appendBody(html);
})

function appendBody(html){
	$(".body").html(html);

}

var html="test";
$.get("../handlebarComponent/header.handlebars",function(data){
	debugger;
	
	var templateScript=Handlebars.compile(data);
	var nameObj={name:"ravi",surname:"Guru"};
	html=templateScript(nameObj);
	addHtml(html);
});
function addHtml(html){
	$(".header").html(html);
}
$.get("../handlebarComponent/indexbody.hbs",function(data){

var obj={name:"body"};
var handlebarTemplate=Handlebars.compile(data);
var html=handlebarTemplate(obj);
appendBody(html);
})

function appendBody(html){
$(".body").html(html);
init();
}

function init(){
	$("body").on("click",".btnurl",function(){
	window.location.href="search.html";
})
}
$.get("../handlebarComponent/indexbody.handlebars",function(data){
	
	Handlebars.registerHelper("studyingStatus",function(year){
		if(year<2015)
			return "Fail";
		else
			return "Pass";
	});
	var obj={students:[{name:"Ravi",passingYear:2015},
	{name:"Manoj",passingYear:2013}
	]};
	var handlebarTemplate=Handlebars.compile(data);
	var html=handlebarTemplate(obj);

	appendBody(html);



});

function appendBody(html){
	$(".body").html(html);

}

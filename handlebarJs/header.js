var html="test";
    $.get("../handlebarComponent/header.hbs",function(data){
      debugger;
     var template=data;
     var templateScript=Handlebars.compile(template);
     var nameObj={name:"ravi",surname:"Guru"};
     html=templateScript(nameObj);
     console.log(html);
     addHtml(html);
   });
 function addHtml(html){
        $(".header").html(html);
 }
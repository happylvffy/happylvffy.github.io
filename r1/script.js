$(document).ready(function(){
   $("#gnb li").hover(function(){
       $(this).find("#sub").stop().slideDown(700);
   });
   $("#gnb li").mouseleave(function(){
       $(this).find("#sub").stop().slideUp(300);
   });
   
    var wd = parseInt($("#vs").width());
    var intv = setInterval(function() { nAni(); },3000);
    var stout1 = setTimeout(function() {vs1Ani();},200);
    var stout2 = setTimeout(function() {vs2Ani();},600);
    function nAni(){
        $("#vs ul").not(":animated").animate({"margin-left" : -wd+"px"},800, function(){
            $("#vs ul li").eq(0).appendTo($("#vs ul"));
            $("#vs ul").css("margin-left","0px"),function vs1Ani(){
                $(this).find(".vs-1").animate({"top":"100px"},1000)
                .css("opacity", "1")
                .animate({"top":"130px"},1000),function vs2Ani(){
                $(this).find(".vs-2")
                .animate({"top":"130px"},2000)
                .css("opacity", "1")
                .animate({"top":"160px"},1000);
                };
            };
        });
                                             };
    $("")
                                             
});
                                            
    
//    var intv2 = setInterval(function(){ tAni(); },500);
//    var intv3 = setTimeout(function(){ textAni();}, 2000);
//    function textAni() {
//        $("#vs .vs-1").not(":animated").animate({"top":70+"px"},400, function(){
//            $("#vs .vs-1").stop().delay(2000);
//            $("#vs .vs-1").css("top","150px");
//        });
//    }
//    function tAni(){
//        $("#vs .vs-2").not(":animated").animate({"top":100+"px"},800, function(){
//            $("#vs .vs-2").stop().delay(2000);
//            $("#vs .vs-2").css("top","180px");
//        });
//    }
// 

/*
$(document).ready(function() {
    var stout1 = setTimeout(function() {vs1Ani();},200);
    var stout2 = setTimeout(function() {vs2Ani();},600);
    function vs1Ani() {
        $(".vsTxt .vs-1")
            .css("opacity", "1")
            .animate({"top":"100px"}, 400);
    };
    function vs2Ani() {
        $(".vsTxt .vs-2")
            .animate({"top":"130px"},600)
            .css("opacity", "1");
    };
});


*/





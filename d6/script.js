$(document).ready(function(){
    $("#box li").mouseover(function(){
       $(this).siblings().removeClass("on");
       $(this).addClass("on"); 
    });
    var wd=parseInt($("#con").width());
    var intv2 = setInterval(function(){nAni();},3000);
    function nAni(){
       $("#con ul").not(":animated").animate({"margin-left":-wd+"px"},800, function(){
           $("#con ul li").eq(0).appendTo($("#con ul"));
           $("#con ul").css("margin-left","0px");
       });
    };
    $("#hd .gnb .menu").click(function(){
        $("#hd .open").css("opacity","1");
        $("#hd .gnb .menu").css("opacity","0");
        $("#hd .gnb .menu").css("z-index","0");
    });
    $("#hd .open .bars").click(function(){
        $("#hd .open").css("opacity","0");
        $("#hd .gnb .menu").css("opacity","1");
        $("#hd .gnb .menu").css("z-index","1");
    });
});

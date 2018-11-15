$(document).ready(function(){
    var ht=parseInt($(window).height());
    $(window).on("mousewheel", function(e){
    if(e.originalEvent.wheelDelta < 0){ 
        $("html,body").not(":animated").animate({scrollTop:"+="+ht+"px"},800);
        $(".toTop").fadeIn(500);
        $(".header,.logo,#con p,#con .conImg, .con3, .con4").addClass("scroll");
        $("#hd .gnb li a").css("color","#fff");
        $(".circle").addClass("on");
    } else {
        $("html,body").not(":animated").animate({scrollTop:"-="+ht+"px"},800);
//        $(".toTop").fadeOut(500);
//        $(".header,.logo,#con p,#con .conImg").removeClass("scroll");
    }
    return false;
    });
    
    $("#hd .momenu").click(function(){
        $("#hd .open").fadeIn(1000);
        $("#hd .open").css("z-index","1");
        $("#hd .mo.momenu").css("z-index","-1");
    });
    $("#hd .open .bars a").click(function(){
        $("#hd .open").fadeOut(1000);
        $("#hd .open").css("z-index","-1");
        $("#hd .mo.momenu").css("z-index","1");
    });
    
    
//    $("#hd .momenu").click(function(){
//        $("#hd .open").css("opacity","1");
//        $("#hd .momenu").css("opacity","0");
//        $("#hd .momenu").css("z-index","-1");
//        $("#hd .open .bars a").css("z-index","1");
//    });
//    $("#hd .open .bars a").click(function(){
//        $("#hd .open").css("opacity","0");
//        $("#hd .open").css("z-index","-1");
//        $("#hd .momenu").css("opacity","1");
//        $("#hd .momenu").css("z-index","1");
//    });
    
});
/*
$(window).scroll(function(){
   var st = $(window).scrollTop();
   if(st>=500){
       $(".toTop").fadeIn(500);
       $("#hd").css("background","rgba(0,0,0,0.5)");
   } else {
       $(".toTop").fadeOut(500);
       $("#hd").css("background","rgba(0,0,0,0.5)");
   }
});
*/
//$(document).ready(function(){
//    $(window).on("scroll", function() {
//		var winTop = $(window).scrollTop();
//		if (winTop >= 10)  {
//			$(".header").addClass("scroll").removeClass("bounceInLeft").removeClass("animated").css("visibility","visible");
//

//		} else {  
//			$(".header").removeClass("scroll").css("visibility","visible");
//		}
//
//	});
//});

"use strict"
// Jquery
$(document).ready(function(){
  // GNB
  $("#GNB .main > li").hover(function(){
    $("#GNB .sub, .GNB__bg").stop().slideDown(200);
  },function(){
    $("#GNB .sub, .GNB__bg").stop().slideUp(200);
  });

  // slide
  function slidemove(){
    let smv=$(".slide__box > div").height();

    console.log(smv)

    $(".slide__box").animate({
      top:-smv
    },function(){
      $(".slide__box > div:first").appendTo(".slide__box");
      $(".slide__box").css({
        top:0
      });
    });
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $("#notice ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });


});
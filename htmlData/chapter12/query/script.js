$(document).ready(function() {
  $("input").focus(function() {
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function() {
    $(this).css("background-color", "white");
  });

  $("button.show").click(function() {
    $("#dog").show("slow");
  });
  $("button.hidden").click(function() {
    $("#dog").hide("slow");
  });
  $("button.slideUp").click(function() {
    $("#dog").slideUp("500");
  });
  $("button.animate").click(function() {
    $("#dog").animate({
      left: '100px',
      top: '300px'
    });
  });
  $("button.fadeIn").click(function() {
    $("#dog").fadeIn(1000);
  });
  $("button.fadeOut").click(function() {
    $("#dog").fadeOut(1000);
  });

  var pObject = $("p");
  var divObject = $(".container");
  pObject.css({
    "background-color": "yellow"
  });
  divObject.css({
    "border": "1px dotted red",
    "height": "80px",
    "width": "200px"
  });

  divObject.mouseup(function(e) {
    $(this).css({
      "border": "3px solid black"
    });
  });

  $("#button1").click(function() {
    $(".container").remove();
  });
  $("#button2").click(function() {
    $(".container").empty();
  });
});

$(document).mouseover(function(e) {
  $("#log").text("<h2>e.pageX : " + e.pageX + "e.pageY : " + e.pageY + "</h2>");
  console.dir(e);
});

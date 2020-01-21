$(document).ready(function() {
  var $button1 = $("#button1");
  var $button2 = $("#button2");
  var $result = $("#result");
  var div1 = $("#div1");
  var $color = $("#div1").css("background-color");

  $button1.click(function() {
    $result.text("background-color : " + $color);
  });
  $button2.click(function() {
    div1.css("background-color", "red");
  });

  var $button = $("button");
  var $div2 = $("#div2");

  $button.click(function() {
    $div2.addClass("warning");
  });
});

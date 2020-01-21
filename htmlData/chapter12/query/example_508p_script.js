$(document).ready(function() {
  var $btHide = $("#btHide");
  var $btShow = $("#btShow");
  var $pExample01 = $("#pExample01");

  $btHide.click(function() {
    $pExample01.hide("slow");
  });
  $btShow.click(function() {
    $pExample01.show("slow");
  });

  var $inputText = $("#inputText");
  var $pText = $("#pText");

  $inputText.keydown(function() {
    $pText.text($inputText.val());
  });

  var initLeftVal = 0;
  var $moveToLeft = $("#moveToLeft");
  var $moveToRight = $("#moveToRight");
  var $divRect = $("#divRect");

  $moveToLeft.click(function() {
    if(!(initLeftVal === 0)) {
      initLeftVal = initLeftVal - 10;
      $divRect.css("left", initLeftVal);
    }
  });
  $moveToRight.click(function() {
    initLeftVal = initLeftVal + 10;
    $divRect.css("left", initLeftVal);
  });

  var $div = $("#divs");
  var $btRun = $("#btRun");
  var $divInnerPara = $("#divInnerPara");

  $btRun.click(function() {
    $div.css({
      "border" : "5px solid green", "width" : "300px", "height" : "300px", "background-color" : "yellow"
    });
    $divInnerPara.css({
      "font-size" : "30px", "font-color" : "red", "width" : "300px", "height" : "300px"
    });
  });
});

var inputX;
var inputY;
var inputDx;
var inputDy;

function check() {
  var numberExp = /^[0-9]{3}$/;
  var numberExp2 = /^[0-9]{1,2}$/
  var result = false;

  inputX = document.getElementById("inputX").value;
  inputY = document.getElementById("inputY").value;
  inputDx = document.getElementById("inputDx").value;
  inputDy = document.getElementById("inputDy").value;
  console.log(inputX);
  if(inputX.match(numberExp)) {
    result = true;
  } else {
    alert("wrong input X");
    return alert("wrong input X");
  }
  if(inputY.match(numberExp)) {
    result = true;
  } else {
    alert("wrong input Y");
    return alert("wrong input Y");
  }
  if(inputDx.match(numberExp2)) {
    result = true;
  } else {
    alert("wrong input dx");
    return alert("wrong input dx");
  }
  if(inputDy.match(numberExp2)) {
    result = true;
  } else {
    alert("wrong input Dy");
    return alert("wrong input dy");
  }
  if(result) {
    setInterval(myCanvas, 10);
  } else {

  }
}

function myCanvas(){
  inputX = parseInt(inputX);
  inputY = parseInt(inputY);
  inputDx = parseInt(inputDx);
  inputDy = parseInt(inputDy);
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.clearRect(0,0,800,300);
  context.beginPath();
  context.fillStyle = "red";
  context.arc(inputX,inputY,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  if(inputX<(0+20)||inputX>(800-20)){
    inputDx = -inputDx;
  }
  if(inputY<(0+20)||inputY>(300-20)){
    inputDy = -inputDy;
  }
  inputX+=inputDx;
  inputY+=inputDy;
}

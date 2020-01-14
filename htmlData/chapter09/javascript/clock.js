function setClock() {
  var now = new Date();
  var s = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  document.getElementById("div_clock").innerHTML = s;
  setTimeout("setClock()", 1000);
}

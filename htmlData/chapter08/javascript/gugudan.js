function gugu() {
  document.write("<table border=1 width=50%>");
  var i = 0;
  var j = 0;
  for(i = 1; i <= 9; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    for(j = 2; j <= 9; j++) {
      document.write("<td>" + i*j + "</td>");
    }
    document.write("<tr/>");
  }
  document.write("</table>");
}

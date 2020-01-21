function tables() {
  var s = '[' + '{"name":"hong","age":"21","role":"1"},' +
          '{"name":"kim","age":"22","role":"2"},' +
          '{"name":"park","age":"23","role":"3"}]';
  var array = JSON.parse(s);

  document.write("<table>");

  for(i = 0; i < array.length; i++) {
    console.log(array[i].name);
    document.write("<tr>");
    for(j = 0; j < array[i].length; j++) {
      console.log(array[i].name);
      document.write("<td>" + array[j].name + "</td>");

    }
    document.write("</tr>");
  }
  document.write("</table>");

}

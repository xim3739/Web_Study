function example01() {
  var now = new Date();
  document.write(now);
}

function example02() {
  alert("반갑습니다.");
}

function example03() {
  var x;
  x = "Hello World";
  alert(x);
}

function example04() {
  var str = undefined;
  str = 100;
  alert(str);

  str = "Hong"
  alert(str);
}

function example05() {
  var lowStr = "Hello World";
  var upperStr = "How are you" + " today?";

  document.write(lowStr + "<br>");
  document.write(upperStr + "<br>");
  document.write(upperStr.toUpperCase() + "<br>");
}

function example06() {
  var age = prompt("input your age", "right now!!");
}

function example07() {
  var num1 = null;
  var num2 = null;
  var input = null;

  input = prompt("input number", "only number");
  num1 = parseInt(input);

  input = prompt("input number", "only number");
  num2 = parseInt(input);

  document.write(num1 + num2);
}

function example08() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var sum = parseInt(num1) + parseInt(num2);

  document.getElementById("result").value = sum;
}

function example09() {
  var heading1 = document.getElementById("heading1");
  heading1.style.color = "blue";
}

function example10() {
  var message = null;
  var time = new Date().getHours();

  if(time < 12) {
    message = "Good Morning";
  } else if (time < 18) {
    message = "Good Afternoon";
  } else if (time === 12) {
    message = "12Clock";
  } else {
    message = "Good Evening";
  }
  alert(message);
}

function example11() {
  var grade = prompt("input score", "A ~ F");
  grade = grade.toUpperCase();
  switch (grade) {
    case 'A': alert("A Good");
      break;
    case 'B': alert("B Good");
      break;
    case 'C': alert("C Good");
      break;
    case 'D': alert("D Good");
      break;
    case 'E': alert("E Good");
      break;
    case 'F': alert("F Good");
      break;
    default: alert("are you crazy?");
      break;
  }
}

var randomNum = Math.floor(Math.random() * 100) + 1;
var guessesCount = 0;

function example12() {
  console.log(randomNum);
  var boolean = false;

  var result = null;
  var inputNum = parseInt(document.getElementById("inputNum").value);
  guessesCount++;

  if (inputNum === this.randomNum) {
    result = "Success";
  } else if (inputNum < this.randomNum) {
    result = "up";
  } else {
    result = "down";
  }

  document.getElementById("hint").value = result;
  document.getElementById("count").value = guessesCount;
}

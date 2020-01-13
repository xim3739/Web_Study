function example10() {
  var inputNumber = 0;
  inputNumber = prompt("prompt", "input number (1 ~ 100)");
  if(inputNumber > 100) {
    alert("input number(" + inputNumber + ") too heigh (1 ~ 100)");
  } else if (inputNumber < 1) {
    alert("input number(" + inputNumber + ") too small (1 ~ 100)");
  } else {
    alert(":D");
  }
}

function example11() {
  var i = 0;
  var sum = 0;
  for(i = 1; i <= 100; i++) {
    sum = sum + i;
  }
  alert(sum);
}

function example12() {
  var array = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕", "해왕", "명왕"];
  var i = 0;
  for(i = 0; i < array.length; i++) {
    alert(array[i]);
  }
}

function example13_1() {
  var gameMessage = confirm("게임 한판 하쉴?");

  return gameMessage;
}

function example13_2() {
  var result = example13_1();
  if(result) {
    alert("좋습니다. 게임을 시작합니다.");
  } else {
    alert("네. 나중에 하시죠.");
  }
}

function Example14(singer, time, title) {

  this.singer = singer;
  this.time = time;
  this.title = title;

  this.lookUp = function() {
    document.write(this.singer);
    document.write(this.time);
    document.write(this.title);
  }
  
}

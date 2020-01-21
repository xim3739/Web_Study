function toLowcaseHandler() {
  var text = document.getElementById("inputText");
  text.value = text.value.toLowerCase();
}

function onMouseOverHandler(div) {
  div.style.border = "2px solid red";
}

function onMouseOutHandler(div) {
  div.style.border = "";
}

function changeImg() {
  document.getElementById("img").src="./img/coffee_main.jpg";
}

function example05(button) {
  alert("반갑습니다.");
}

function example06() {
  var changText = document.getElementById("example06P");
  var text = "changeText!!!!"
  changText.innerHTML = text;
}

function example07() {
  var inputText = document.getElementById("inputText").value;
  if(isNaN(inputText)) {
    alert("is Not Number");
    console.log(isNaN(inputText), inputText);
  } else {
    alert("is Number");
    console.log(isNaN(inputText), inputText);
  }
}

function example08() {
  document.getElementById("imgs").src="./img/coffee_main.jpg";
}

function checkNumberic(elem, massage) {
  var exp = /^[0-9]+$/;
  if(elem.value.match(exp)) {
    alert("good");
    return true;
  } else {
    alert(massage);
    elem.focus();
    return false;
  }
}

function checkSelection(elem, msg) {
  if(elem.value === "0") {
    alert(msg);
    elem.focus();
    return false;
  } else {
    alert("good");
    return true;
  }
}

function check() {
  var idExp = /^[a-z]+[a-z0-9]{5,13}$/g;
  var idText = document.getElementById("idText");
  if(idText.value.match(idExp)) {

  } else {
    alert("아이디가 맞지 않습니다.");
  }
  var radioResult = document.getElementsByName("r1");
  var selectRadio;
  for(var i = 0; i < radioResult.length; i++) {
    if(radioResult[i].checked) {
      selectRadio = radioResult[i].value;
    }
  }
  if(selectRadio === "v1" || selectRadio === "v2") {

  } else {
    alert("성별을 입력하세요");
  }
  var phoneExp =  /^\d{3}-\d{3,4}-\d{4}$/;
  var phone = document.getElementById("phone");
  if(phone.value.match(phoneExp)) {

  } else {
    alert("핸드폰 번호를 확인해 주세요");
  }
  var emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  var email = document.getElementById("email");
  if(email.value.match(emailExp)) {

  } else {
    alert("이메일을 확인해 주세요");
  }
  var passExp = /^[0-9]{6,8}$/;
  var pass = document.getElementById("password");
  if(pass.value.match(passExp)) {

  } else {
    alert("비밀번호를 확인해 주세요");
  }
  var passCheck = document.getElementById("passwordCheck");
  if(pass.value === passCheck.value) {

  } else {
    alert("비밀번호가 맞지 않습니다.");
  }
}

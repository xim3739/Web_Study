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
  var br = "<br/>"
  if(idText.value.match(idExp)) {
    document.getElementById("idCheck").innerHTML = br;
  } else {
    document.getElementById("idCheck").innerHTML = "아이디가 형식에 맞지 않습니다."
  }
  var radioResult = document.getElementsByName("r1");
  var selectRadio;
  for(var i = 0; i < radioResult.length; i++) {
    if(radioResult[i].checked) {
      selectRadio = radioResult[i].value;
    }
  }
  if(selectRadio === "v1" || selectRadio === "v2") {
    document.getElementById("genderCheck").innerHTML = br;
  } else {
    document.getElementById("genderCheck").innerHTML = "성별이 형식에 맞지 않습니다."
  }
  var phoneExp = /^[0-9]{11}/;
  var phone = document.getElementById("phones");
  console.log(phone.value);
  if(phone.value.match(phoneExp)) {
    document.getElementById("phoneCheck").innerHTML = br;
  } else {
    document.getElementById("phoneCheck").innerHTML = "핸드폰 번호가 형식에 맞지 않습니다."
  }
  var emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  var email = document.getElementById("email");
  if(email.value.match(emailExp)) {
    document.getElementById("emailCheck").innerHTML = br;
  } else {
    document.getElementById("emailCheck").innerHTML = "이메일이 형식에 맞지 않습니다."
  }
  var passExp = /^[0-9]{6,8}$/;
  var pass = document.getElementById("password");
  if(pass.value.match(passExp)) {
    document.getElementById("passCheck").innerHTML = br;
  } else {
    document.getElementById("passCheck").innerHTML = "비밀번호가 형식에 맞지 않습니다."
  }
  var passCheck = document.getElementById("passwordCheck");
  if(pass.value === passCheck.value) {
    document.getElementById("passCheckCheck").innerHTML = br;
  } else {
    document.getElementById("passCheckCheck").innerHTML = "비밀번호가 일치하지 않습니다."
  }
}

function reset1() {
  document.getElementById("idText").value = "";
  document.getElementById("phones").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("passwordCheck").value = "";

  document.getElementById("idCheck").innerHTML = "";
  document.getElementById("genderCheck").innerHTML = " ";
  document.getElementById("phoneCheck").innerHTML = "";
  document.getElementById("emailCheck").innerHTML = "";
  document.getElementById("passCheck").innerHTML = "";
  document.getElementById("passCheckCheck").innerHTML = "";
}

function submit() {
  var inputName = document.getElementById("inputName").value;
  var inputFirstNum = document.getElementById("inputFirstNum").value;
  var inputSecondNum = document.getElementById("inputSecondNum").value;

  var nameExp = /^[a-z A-Z가-힣]{2,8}$/;
  var firstNum = /^[0-9]{6}$/;
  var secondNum = /^[0-9]{7}$/;

  if(inputName.match(nameExp)) {
    document.getElementById("nameCheck").innerHTML = "맞습니다."
  } else {
    document.getElementById("nameCheck").innerHTML = "다시 확인해 주세요."
  }

  if(inputFirstNum.match(firstNum)) {

  } else {
    alert("주민번호 앞자리를 확인해 주세요.");
  }
  if(inputSecondNum.match(secondNum)) {

  } else {
    alert("주민번호 뒷자리를 확인해 주세요.");
  }
}

function idCheck() {
  var inputId = document.getElementById("inputId").value;

  var idExp = /^[a-zA-Z]{1}[A-Za-z0-9]{7,11}$/;

  if(inputId.match(idExp)) {
    alert("good");
  } else {
    alert("wrong input ID");
  }
}

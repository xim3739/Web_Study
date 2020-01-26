$(document).ready(function () {
    let $inputId = $("#inputId");
    let $inputPassword = $("#inputPassword");
    let $inputPasswordCheck = $("#inputPasswordCheck");
    let $inputName = $("#inputName");
    let $inputFirstEmail = $("#inputFirstEmail");
    let $inputSecondEmail = $("#inputSecondEmail");

    let idExp = /[a-zA-Z0-9]{6,10}$/;
    let passwordExp = /[a-zA-Z0-9]{8,12}$/;
    let nameExp = /[가-힣]{2,5}$/;
    let firstEmailExp = /[a-zA-Z0-9]{6,10}$/;
    let secondEmailExp = /[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    let $checkId = $("#checkId");

    $("#inputId").keyup(function (e) { 
        console.log(e);
        if(!idExp.test($inputId)) {
            $("#checkId").text("형식에 맞지 않습니다.");
        } else {
            $checkId.text("올바른 형식 입니다.");
        }
    });
    
});
$(document).ready(function () {
    let $inputId = $("#inputId");
    let $inputPassword = $("#inputPassword");
    let $inputPasswordCheck = $("#inputPasswordCheck");
    let $inputName = $("#inputName");
    let $inputFirstEmail = $("#inputFirstEmail");
    let $inputSecondEmail = $("#inputSecondEmail");
    let $btResult = $("#bt_result");

    let idExp = /[a-zA-Z0-9]{6,10}$/;
    let passwordExp = /[a-zA-Z0-9]{8,12}$/;
    let nameExp = /[가-힣]{2,5}$/;
    let firstEmailExp = /[a-zA-Z0-9]{6,10}$/;
    let secondEmailExp = /[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    let $checkId = $("#checkId");
    let $checkPass = $("#checkPass");
    let $checkName = $("#checkName");
    let $checkEmail = $("#checkEmail");

    let checkArray = [$checkId, $checkPass, $checkName, $checkEmail];

    $inputId.keyup(function (e) { 
        console.log($inputId.val())
        if(!idExp.test($inputId.val())) {
            $checkId.text("형식에 맞지 않습니다.");
        } else {
            $checkId.text("올바른 형식 입니다.");
        }
    });
    $inputPassword.keyup(function (e) { 
        console.log($inputPassword.val());
        if(!passwordExp.test($inputPassword.val())) {
            $checkPass.text("형식에 맞지 않습니다.");
        } else {
            $checkPass.text("올바른 형식 입니다.");
        }
    });
    $inputPasswordCheck.keyup(function (e) { 
        console.log($inputPasswordCheck.val());
        if(!($inputPassword.val() === $inputPasswordCheck.val())) {
            $checkPass.text("일치 하지 않습니다.");
        } else {
            $checkPass.text("일치 합니다.");
        }
    });
    $inputName.keyup(function (e) { 
        console.log($inputName.val());
        if(!nameExp.test($inputName.val())) {
            $checkName.text("형식에 맞지 않습니다.");
        } else {
            $checkName.text("올바른 형식 입니다.");
        }
    });
    $inputFirstEmail.keyup(function (e) { 
        console.log($inputFirstEmail.val());
        if(!firstEmailExp.test($inputFirstEmail.val())) {
            $checkEmail.text("형식에 맞지 않습니다.");
        } else {
            $checkEmail.text("올바른 형식 입니다.");
        }
    });
    $inputSecondEmail.keyup(function (e) { 
        console.log($inputSecondEmail.val());
        if(!secondEmailExp.test($inputSecondEmail.val())) {
            $checkEmail.text("형식에 맞지 않습니다.");
        } else {
            $checkEmail.text("올바른 형식 입니다.");
        }
    });
    $btResult.click(function () { 
        let checkBoxAge = $("#checkBoxAge").is(":checked");
        let checkBoxUse = $("#checkBoxUse").is(":checked");
        let checkBoxInfo = $("#checkBoxInfo").is(":checked");
        let checkBoxBirth = $("#checkBoxBirth").is(":checked");
        let checkBoxEmail = $("#checkBoxEmail").is(":checked");
        let checkBoxTerm = $("#checkBoxTerm").is(":checked");

        console.log(checkBoxAge,checkBoxUse,checkBoxInfo);

        if(!(checkBoxAge && checkBoxUse && checkBoxInfo &&
            checkBoxBirth && checkBoxEmail && checkBoxTerm)) {
            alert("try check CheckBox");
            return;
        }
        if(((!$inputId.val()) || (!$inputPassword.val()) || (!$inputPasswordCheck.val()) ||
        (!$inputName.val()) || (!$inputFirstEmail.val()) || (!$inputSecondEmail.val()))) {
            console.log(((!$inputId.val()) || (!$inputPassword.val()) || (!$inputPasswordCheck.val()) ||
            (!$inputName.val()) || (!$inputFirstEmail.val()) || (!$inputSecondEmail.val())));
            alert("try check inputText");
            return;
        }
        console.log(((!$inputId.val()) || (!$inputPassword.val()) || (!$inputPasswordCheck.val()) ||
        (!$inputName.val()) || (!$inputFirstEmail.val()) || (!$inputSecondEmail.val())));
        for(let i = 0; i < checkArray.length; i++) {
            console.log(checkArray[i].text());
            if(checkArray[i].text() === "형식에 맞지 않습니다.") {
                alert("wrog input Text!!!");
                return;
            }
        }
        alert("success");
    });
});
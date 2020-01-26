function localCounter() {
    if(('localStorage' in window) && window['localStorage'] !== null) {
        if(localStorage.count) {
            localStorage.count++;
        } else {
            localStorage.count = 1;
        }
        document.getElementById("localTarget").innerHTML = localStorage.count;
    } else {
        document.getElementById("localTarget").innerHTML = "NO";
    }
}

function sessionCounter() {
    if(('sessionStorage' in window) && window['sessionStorage'] !== null) {
        if(sessionStorage.count) {
            sessionStorage.count++;
        } else {
            sessionStorage.count = 1;
        }
        document.getElementById("localTarget").innerHTML = sessionStorage.count;
    } else {
        document.getElementById("localTarget").innerHTML = "NO";
    }
}

function readFile() {
    let $result = document.getElementById("result");
    if((File in window) && (window.FileReader)) {
        $result.value = "NO"
        return;
    }

    let $files = document.getElementById("inputFile").files;

    if(!$files.lenght) {

        alert("choice");
        return;

    } else {

        let fileReader = new FileReader();
        fileReader.readAsText($files[0], "utf-8");

        fileReader.onload = function() {
            $result.value = fileReader.result;
        };
    }
}
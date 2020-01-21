var displayValue = "";

function add(value) {
  displayValue = displayValue + value;
  document.getElementById("display").value = displayValue;
}

function cal() {
  document.getElementById("display").value = eval(displayValue);
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = 0;
}

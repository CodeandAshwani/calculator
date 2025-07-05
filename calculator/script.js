let display = document.getElementById("display");

function press(val) {
  display.value += val;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
function backspace() {
  display.value = display.value.slice(0, -1);
}
const display = document.getElementById('output')

function work(number) {
  display.value += number
}

function Eval() {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = alert('Error Input');
  }
}

function wipe() {
  display.value = ''
}
function del() {
  display.value = display.value.slice(0, -1)
}
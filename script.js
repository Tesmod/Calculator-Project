const display = document.getElementById('output')

function work(number) {
  display.value += number
}

function Eval(params) {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = alert('Error Input');
  }
}

function wipe(params) {
  display.value = ''
}
function del(params) {
  display.value = display.value.slice(0, -1)
}
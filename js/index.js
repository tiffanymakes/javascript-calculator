// Clear Button
document.getElementById('clear').addEventListener('click', clear);
function clear(){
  document.getElementById('display').value = '';
}

// Calculate Results
document.getElementById('equals').addEventListener('click', calculate)
function calculate() {
  const result = eval(document.getElementById('display').value);
  document.getElementById('display').value = result;
}

// Button Click
const keys = document.querySelectorAll('button:not(#clear):not(#equals)');
[...keys].forEach(keys => keys.addEventListener('click', input));
function input() {
  document.getElementById('display').value += this.innerHTML;
}
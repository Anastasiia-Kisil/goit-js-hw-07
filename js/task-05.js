// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', inputNewName);

function inputNewName(inputText) {
  if (inputText.currentTarget.value === '') {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = inputText.currentTarget.value;
  }
}

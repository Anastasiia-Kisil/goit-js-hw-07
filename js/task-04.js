// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

const sumValue = document.querySelector('#value');

function incrementClick() {
  counterValue += 1;
  sumValue.textContent = counterValue;
}

function decrementClick() {
  counterValue -= 1;
  sumValue.textContent = counterValue;
}

increment.addEventListener('click', incrementClick);
decrement.addEventListener('click', decrementClick);

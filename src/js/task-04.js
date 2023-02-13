// Создай переменную counterValue в которой будет храниться текущее 
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или 
// уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('button[data-action ="increment"]');

let counterValue = 0;

decrementBtnEl.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
})

incrementBtnEl.addEventListener('click', () => {
  counterValue += 1;
 valueEl.textContent = counterValue;
})
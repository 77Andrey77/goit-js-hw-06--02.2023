// Напиши скрипт, который изменяет цвета фона элемента < body > через 
// инлайн стиль при клике на button.change - color и выводит 
// значение цвета в span.color.


// Для генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const textColorEL = document.querySelector('.color');
const buttonChangeEl = document.querySelector('.change-color');

buttonChangeEl.addEventListener('click', () => {

  textColorEL.textContent = getRandomHexColor();
  document.body.style.backgroundColor = textColorEL.textContent;
  
})

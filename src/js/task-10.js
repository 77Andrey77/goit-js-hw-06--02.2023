// Напиши скрипт создания и очистки коллекции элементов.Пользователь 
// вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >, сколько указано 
// в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй 
// готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs ={
  inputNumberEl: document.querySelector('#controls input'),
  buttonCreateEl: document.querySelector('button[data-create]'),
  buttonDestoyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}


refs.buttonCreateEl.addEventListener('click', onCreateDivBoxes);
refs.buttonDestoyEl.addEventListener('click', onDestoyDivBoxes);

function onCreateDivBoxes() {
  let amount = refs.inputNumberEl.value;
  createBoxes(amount);
};

let array = [];

function createBoxes(amount) {

  const baseSize = 30;

  for (let i = 0; i < amount; i++){
    const divEl = document.createElement('div');
    divEl.style.width = (baseSize + i * 10) + 'px';
    divEl.style.height = (baseSize + i * 10) + 'px';
    divEl.style.backgroundColor = getRandomHexColor();

    array.push(divEl);
  }
  refs.boxesEl.append(...array);
  refs.inputNumberEl.value = '';
 
}

function onDestoyDivBoxes() {
  refs.boxesEl.innerHTML = '';
  array = [];
}
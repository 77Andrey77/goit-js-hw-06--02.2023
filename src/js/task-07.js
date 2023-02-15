// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании 
// ползунка будет меняться размер текста.
 
const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onInput);

function onInput  (event) { 
  refs.textEl.style.fontSize = event.currentTarget.value +"px";
};
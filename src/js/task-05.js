// Напиши скрипт который, при наборе текста в инпуте input#name - input
//   (событие input), подставляет его текущее значение в 
//   span#name - output.Если инпут пустой, в спане должна 
//   отображаться строка "Anonymous".

const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (event) => {
 
  if (event.currentTarget.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  } else {
    nameOutputEl.textContent = event.currentTarget.value;
  }
  
});
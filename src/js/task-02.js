// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод
// document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector('#ingredients');
const array = [];

ingredients.forEach(ing => {
  // console.log(ing);
  const liEl = document.createElement('li');
  liEl.textContent = ing;
  liEl.classList.add('item');
  array.push(liEl);
})

ingredientsEL.append(...array);
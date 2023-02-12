// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в 
// ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
//  и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

const categoriesEl = document.querySelector('#categories');
console.log('Number of categories:' + categoriesEl.children.length);
  console.log('');


const itemEl = document.querySelectorAll('.item');

itemEl.forEach(element => {
  console.log('Category: ' + element.querySelector('h2').textContent);
  console.log("Elements: " + element.querySelector('ul').childElementCount);
  console.log('');
});
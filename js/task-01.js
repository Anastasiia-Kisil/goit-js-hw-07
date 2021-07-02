// TASK 1
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
const categoryItem = document.querySelectorAll('.item');
console.log(`'В списке ${categoryItem.length} категории.'`);

// TASK 2
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoryList = document.querySelectorAll('.item');
categoryList.forEach(category => {
  console.log('Категория:', category.querySelector('h2').textContent);
  console.log('Количество элементов:', category.querySelectorAll('li').length);
});

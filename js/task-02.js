const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*task 2.1*/
/*Створюємо окремий елемент <li>. Використовуючи метод document.createElement().*/

/*task 2.2*/
/*Додаємо назву інгредієнта як його текстовий вміст.*/

/*task 2.3*/
/*Додаємо елементу клас item.*/

/*task 2.4*/
/*Вставляємо усі <li> за одну операцію у список ul#ingredients.*/

const ingredientsMenu = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
  liItem.classList.add('item');
  liItem.textContent = ingredient;

  return liItem;
})

console.log(items);
ingredientsMenu.append(...items);
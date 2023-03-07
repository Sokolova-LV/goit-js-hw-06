/*task 1.1*/
/*Рахуємо і виводимо в консоль к-ість категорій в ul#categories, тобто елементів li.item.*/

const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ` +numberOfCategories.length);

/*task 1.2*/
/*Для кожного елемента li.item у списку ul#categories, знаходимо і виводимо в консоль текст заголовку елемента (тегу <h2>) 
    і кількість елементів в категорії (усіх <li>, вкладених в нього).*/

numberOfCategories.forEach((item) => {

    const itemTitle = item.querySelector('h2').textContent;

    const itemCategory = item.querySelectorAll('li');
    const itemElements = itemCategory.length;

    console.log(`Category: ` +itemTitle);
    console.log(`Elements: ` +itemElements);
});
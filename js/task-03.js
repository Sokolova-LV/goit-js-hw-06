/*task 3.1*/
/*Написати скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery*/

/*task 3.2*/
/*Використовувати масив об'єктів images для створення елементів <img>, вкладених в <li>.
  
  Для створення розмітки використати шаблонні рядки і метод insertAdjacentHTML().
  
  Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
  
  Додати мінімальне оформлення галереї флексбоксами або грідами через CSS класи*/

const gallery = document.querySelector('.gallery');

const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];

const markup = images => {
  const galleryItems = images.map(
    image =>
    `<li class="gallery-item"><img class="img" src="${image.url}" alt="${image.alt}" width="400px" height="250px""></li>`
  );
  gallery.insertAdjacentHTML('afterbegin', galleryItems.join(''));
};

markup(images);
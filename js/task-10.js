/* Написати скрипт створення і очищення колекції елементів.
    Користувач вводить кількість елементів в input і натискає кнопку "Створити", після чого рендериться колекція.
      Натисненням на кнопку "Очистити", колекція елементів очищається*/

      
/* Створити функцію createBoxes(amount), яка приймає один параметр - число.
    Функція створює стільки <div>, скільки вказано в amount, і додає їх у div#boxes.
      Розміри першого <div> - 30px на 30px.
        Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
          Всі елементи повинні мати випадковий колір фону у форматі НЕХ.
            Використовувати готову функцію getRandomHexColor для отримання кольору*/

                    
/* Створити функцію destroyBoxes(), яка очищає вміст div#boxes, видаляючи всі створені елементи*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.background = getRandomHexColor();
    document.querySelector("#boxes").appendChild(newDiv);
  }}

function destroyBoxes() {
  let boxes = document.querySelector("#boxes"); 
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
}}

const controls = document.querySelector('#controls'); 
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
/* Написати скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
    і виводить значення кольору в span.color.
  
      Для генерування випадкового кольору використовувати функцію getRandomHexColor*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");

function changeBackgroundColor() {
  const backgroundColor = getRandomHexColor();
  document.body.style.background = backgroundColor;
  document.querySelector(".color").textContent = backgroundColor;
}

btnChangeColor.addEventListener('click', changeBackgroundColor);
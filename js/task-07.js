/* Написати скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
    В результаті, перетягуючи повзунок, буде змінюватися розмір тексту*/

const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = slider.value + 'px';

const onInputChange = () => {
    text.style.fontSize = `${slider.value}px`;
}

slider.addEventListener('input', onInputChange);
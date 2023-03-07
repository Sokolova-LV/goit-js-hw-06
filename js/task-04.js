/* Створити змінну counterValue, в якій зберігається поточне значення лічильника, ініціалізувати значенням 0.

    Додати слухача кліків кнопкам, всередині яких збільшувати або зменшувати значення лічильника.

    Оновлювати інтерфейс новим значенням змінної counterValue*/

const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const value = document.querySelector('#value');

let counterValue = 0;

increment.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});

decrement.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});
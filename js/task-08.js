/* Написати скрипт управління формою логіна.

    1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
    2. Під час відправлення форми сторінка не повинна перезавантажуватись.
    3. Якщо у формі є незаповнені поля, виводити alert з попередженням про те, що всі поля мають бути заповнені.
    4. Якщо користувач заповнив усі поля і відправив форму, зібрати значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
        значення поля - значенням властивості. Для доступу до елементів форми використовувати властивість elements.
    5. Вивести об'єкт із введеними даними в консоль і очистити значення полів форми методом reset*/

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', formSubmission);

function formSubmission(event) {
    event.preventDefault();
    const dataLibrary = {};

    for (const element of loginForm.elements) {
        if (element.name) {
            dataLibrary[element.name] = element.value;
        }
    }
    if (dataLibrary.email && dataLibrary.password) {
        console.log(dataLibrary);
        loginForm.reset();
    } else {
        alert("Всі поля мають бути заповнені!");
    }};
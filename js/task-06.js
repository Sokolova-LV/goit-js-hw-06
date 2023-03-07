/*Написати скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильності кількості введених символів.
    Кількість символів в інпуті зазначається в його атрибуті data-length.
        Правильна кількість символів, border - зелений, неправильна - червоний*/

const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }}
/*Написати скрипт, який під час набору тексту в інпуті input#name-input, підставляє його поточне значення в span#name-output.
    Якщо інпут порожній, у спані має відображатися рядок "Anonymous"*/

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', inputChange);

function inputChange(event) {
    output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        output.textContent = 'Anonymous';
}};
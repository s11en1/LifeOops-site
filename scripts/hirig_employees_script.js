"use strict";

let activeClass = 'active';

// Custom select logic
let selectMarker = document.querySelector('.main__job-form-custom-select-marker');
let customSelectCheckbox = document.querySelector('.main__job-form-custom-select');

// Изменение ивента чтобы маркер кастомного селектора переворачивался
customSelectCheckbox.addEventListener('change', () => {
    selectMarker.classList.toggle(activeClass);
});

// Код чтобы в должность при выборе подставлялся текст должности

const defaultSelectText = 'Должность';
let selectText = document.querySelector('.main__job-form-custom-input-wrapper--select .main__job-form-custom-input-text');
let selectOptions = document.querySelectorAll('input[type="radio"]');
let optionsTextsArray = document.querySelectorAll('.main__custom-option-text');

selectOptions.forEach((option, index) => {
    option.addEventListener('change', () => {
        selectMarker.classList.remove(activeClass);
        customSelectCheckbox.checked = false;
        selectText.textContent = optionsTextsArray[index].textContent;
    });
});

// Код для обработки загрузки файлов
let fileInputs = document.querySelectorAll('input[type="file"]');
let fileInputsTexts = document.querySelectorAll('.main__job-form-custom-file-input-text');

fileInputs.forEach((fileInput, index) => {
    fileInput.addEventListener('change', (event) => {
        fileInputsTexts[index].textContent = event.target.files[0].name;
    })
});

let resumeInputText = document.querySelector('#resume-input-text');
const resumeInputDefaultText = 'Резюме';
let photoInputText = document.querySelector('#photo-input-text');
const photoInputDefaultText = 'Фото';

let dateErrorMessage = document.querySelector('#date-error-message');

let form = document.querySelector('#job-form');
form.addEventListener('reset', () => {
    selectText.textContent = defaultSelectText;
    resumeInputText.textContent = resumeInputDefaultText;
    photoInputText.textContent = photoInputDefaultText;
    dateErrorMessage.classList.remove(activeClass);
    
});


let customDateInput = document.querySelector('#birth-date');
const regex = /^\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
form.addEventListener('submit', (e) => {
    let isDateValid = regex.test(customDateInput.value);
    if(!isDateValid){
        e.preventDefault();
        dateErrorMessage.classList.add(activeClass);
    }
});
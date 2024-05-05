"use strict";

let radioInputs = document.querySelectorAll('.main__job-radio');
let jobSelectText = document.querySelector('.main__custom-select-text');
let jobSelect = document.querySelector('.main__custom-select-input');

for (let radioInput of radioInputs) 
{
    radioInput.addEventListener('change', () => {
        jobSelect.checked = false;
        let jobTitle = radioInput.nextElementSibling.textContent;
        jobSelectText.textContent = jobTitle;
    });
}
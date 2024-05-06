"use strict";

let infoButtons = document.querySelectorAll('.main__info-button');
let infoBlocks = document.querySelectorAll('.main__info-block');
let visibleClass = 'main__info-block--visible';
let activeClass = 'main__info-button--active';

infoButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        showInfoBlock(index);
    });
})

function showInfoBlock(index)
{
    infoBlocks.forEach((block) => {
        block.classList.remove(visibleClass);
    });

    infoButtons.forEach((button) => {
        button.classList.remove(activeClass);
    })

    infoButtons[index].classList.add(activeClass);
    infoBlocks[index].classList.add(visibleClass);
}

showInfoBlock(0);
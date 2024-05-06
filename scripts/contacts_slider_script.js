'use strict';

let slides = document.querySelectorAll('.main__slide');
let sliderButtons = document.querySelectorAll('.main__slider-button');

let visibleClass = 'visible';
let slideIndex = 0;
let interval;

function initSlider()
{
    initSliderButtons();
    showSlide(slideIndex);
    interval = setInterval(nextSlide, 5000);
}

function initSliderButtons()
{
    sliderButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            slideIndex = index;
            showSlide();
        });
    });
}

function showSlide()
{
    if(slideIndex < 0)
        slideIndex = slides.length - 1;

    if(slideIndex >= slides.length)
        slideIndex = 0;

    slides.forEach(slide => {
        slide.classList.remove(visibleClass);
    });

    slides[slideIndex].classList.add(visibleClass);

    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

function nextSlide()
{
    slideIndex++;
    showSlide();
}

function prevSlide()
{
    slideIndex--;
    showSlide();
}

initSlider();
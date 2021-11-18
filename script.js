const mainSlides = document.querySelector('.main-slides');
const upButton = document.querySelector('.control__up-button');
const downButton = document.querySelector('.control__down-button');
const slidesCount = mainSlides.querySelectorAll('div').length - 1;
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
let containerHeight;
let currentSlide = 0;

sidebar.style.top = `-${slidesCount*100}vh`

upButton.addEventListener('click', () => {
    changeSlides('up');
});
downButton.addEventListener('click', () => {
    changeSlides('down');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        changeSlides('up');
    }
    if (e.key === 'ArrowDown') {
        changeSlides('down');
    }
})

function changeSlides(direction) {
    containerHeight = container.clientHeight;
    if (direction === 'up') {
        currentSlide++;
        if (currentSlide > slidesCount) {
            currentSlide = 0;
        }
    } else if (direction === 'down') {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slidesCount;
        }
    }
    
    mainSlides.style.transform = `translateY(-${containerHeight * currentSlide}px)`;
    sidebar.style.transform = `translateY(${currentSlide * containerHeight}px)`;

}
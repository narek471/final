// OWl Carousel

$('.partner__main').owlCarousel({
    center: true,
    loop:true,
    margin: 20,
    dots: true,
    nav:true,
    items:1,
    pagination :true,
    autoplay:false,
    // navText: ["<img src='../img/icons/arrow_left.svg'/>","<img src='../img/icons/arrow_right.svg'/>"]
})

// PopUps

const openPupUpFormButtons = document.querySelectorAll('.open-popup-form');
const popUpFormBg = document.querySelector('.popup__form__bg');
const forms = document.querySelectorAll('.last__right');
const popUpThanksBg = document.querySelector('.popup__thanks__bg');
const closeButtons = document.querySelectorAll('.popup__close');
const calcButton = document.querySelector('.calc__left__button');
const prevButton = document.querySelector('.res__top__prev');
const calcBlock = document.querySelector('.calc__main');
const resBlock = document.querySelector('.res__row');
const showButton = document.querySelector('.partner__main__button');
const hideBlocks = document.querySelectorAll('.partner-block-hide');

openPupUpFormButtons.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        if(popUpFormBg.classList.contains('active')) {
            document.body.style.overflowY = 'auto';
            popUpFormBg.classList.remove('active');
        } else {
            document.body.style.overflowY = 'hidden';
            popUpFormBg.classList.add('active');
        }
    })
})

document.addEventListener('click', (e) => {
    if(e.target === popUpFormBg || e.target === popUpThanksBg) {
        popUpFormBg.classList.remove('active');
        popUpThanksBg.classList.remove('active');
        document.body.style.overflowY = 'auto';
    }
})

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        popUpFormBg.classList.remove('active');
        popUpThanksBg.classList.add('active');
        document.body.style.overflowY = 'hidden';
        form.reset();
    })
})

closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popUpFormBg.classList.remove('active');
        popUpThanksBg.classList.remove('active');
        document.body.style.overflowY = 'auto';
    })
})

calcButton.addEventListener('click', (e) => {
    e.preventDefault();
    calcBlock.classList.remove('active');
    resBlock.classList.add('active');
})

prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    calcBlock.classList.add('active');
    resBlock.classList.remove('active');
})

hideBlocks.forEach(block => {
    showButton.addEventListener('click', (e) => {
        e.preventDefault();
        if(block.classList.contains('hide')) {
            block.classList.remove('hide');
            showButton.firstChild.data = 'Скрыть';
        } else {
            block.classList.add('hide');
            showButton.firstChild.data = 'Показать ещё';
        }
    })
})

const ranges = document.querySelectorAll('.calc-block__range');

ranges.forEach(range => {
    console.log(range)
    const progress = (range.value - range.min) / (range.max - range.min) * 100;
    range.style.background = `linear-gradient(to right, #0080C9 ${progress}%, #ccc ${progress}%)`;

    range.addEventListener("input", function(event) {
        const progress = (this.value - this.min) / (this.max - this.min) * 100;
        range.style.background = `linear-gradient(to right, #0080C9 ${progress}%, #ccc ${progress}%)`;
    })
})




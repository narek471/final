const fixedAside = document.querySelector('.banner__aside__scroll');
const hideAsideMenu = document.querySelector('.banner__aside__list');
const asideMenuBtn = document.querySelector('.aside__bottom__img');

document.addEventListener('scroll', () => {
    if (window.scrollY >= 400) {
        fixedAside.classList.add('banner__aside__fixed');
    } else {
        fixedAside.classList.remove('banner__aside__fixed');
    }
})

asideMenuBtn.addEventListener('click', () => {
    hideAsideMenu.classList.toggle('active');
    asideMenuBtn.classList.toggle('active');
})

// Modal

const modal = document.querySelector('.modal__bg');
const openModalButton = document.querySelector('.question__top__button');
const modalCloseButton = document.querySelector('.modal__close__icon');

openModalButton.addEventListener('click', () => {
    modal.classList.add('active');
})

modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('active');
})

document.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.remove('active');
    }
})

// Scroll

document.querySelectorAll(".scroll-link").forEach((e => {
    e.addEventListener("click", (t => {
        hideAsideMenu.classList.toggle('active');
        asideMenuBtn.classList.toggle('active');
        t.preventDefault();
        const o = e.getAttribute("href"), i = document.querySelector(o);
        if (i) {
            const e = i.getBoundingClientRect(), t = window.pageYOffset + e.top, o = window.innerHeight,
                l = Math.max(0, t - o / 2 + e.height / 2) - e.height / 3;
            window.scrollTo({top: l, behavior: "smooth"})
        }
    }))
}));

//Accordion

const sourceButton = document.querySelector('.count__source__text');
const sourceHideBlock = document.querySelector('.count__hide__block');

sourceButton.addEventListener('click', () => {
    sourceHideBlock.classList.toggle('active');
    if(sourceHideBlock.classList.contains('active')) {
        sourceButton.textContent = "-  5 источников";
    } else {
        sourceButton.textContent = "+  5 источников";
    }
})

//Forum

const forumOpenBtn = document.querySelector('.question__content__button');
const hideAnswers = document.querySelectorAll('.question__content__hide');

forumOpenBtn.addEventListener('click', () => {
    hideAnswers.forEach(block => {
        block.classList.toggle('active')
        if (block.classList.contains('active')) {
            forumOpenBtn.textContent = "Скрыть";
        } else {
            forumOpenBtn.textContent = "Показать еще";
        }
    })
})
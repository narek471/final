const burger = document.querySelector(".burger"), modal = document.querySelector(".modal--mobmenu"),
    modalCloseBurger = document.querySelector(".modal__close__burger");
burger.addEventListener("click", (() => {
    burger.classList.toggle("burger-active"), modal.classList.toggle("modal--visible")
})), modalCloseBurger.addEventListener("click", (() => {
    burger.classList.toggle("burger-active"), modal.classList.toggle("modal--visible")
})), document.querySelectorAll(".scroll-link").forEach((e => {
    e.addEventListener("click", (() => {
        modal.classList.remove("modal--visible");
        burger.classList.toggle('burger-active');
    }))
}));

const orderHide = document.querySelector('.preheader_order__hide');
const consultHide = document.querySelector('.preheader_consult__hide');
const consultForm2 = document.querySelector(".modal--feedback");

orderHide.addEventListener('click', () => {
    modal.classList.remove("modal--visible");
    burger.classList.toggle('burger-active');
    consultForm2.classList.add("modal--visible");
})

consultHide.addEventListener('click', () => {
    modal.classList.remove("modal--visible");
    burger.classList.toggle('burger-active');
    consultForm2.classList.add("modal--visible");
})
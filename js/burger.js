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
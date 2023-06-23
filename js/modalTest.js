const modalBtn = document.querySelector(".necessary_button"), heroBtn = document.querySelector(".hero_button"),
    modalCloseTest = document.querySelector(".modal__close__test"), modalTest = document.querySelector(".modal--test"),
    modalOverlay = document.querySelector(".modal__overlay__test");
modalBtn.addEventListener("click", (() => {
    modalTest.classList.add("modal--visible")
})), heroBtn.addEventListener("click", (() => {
    modalTest.classList.add("modal--visible")
})), modalCloseTest.addEventListener("click", (() => {
    modalTest.classList.remove("modal--visible")
})), modalOverlay.addEventListener("click", (() => {
    modalTest.classList.remove("modal--visible")
}));

const radioBtns = document.querySelectorAll('.wrapper-radio__radio');
const form = document.querySelector('.modal__questions');
const resultTest = document.querySelector('.modal__test__hide');
const resultSum = document.querySelector('.modal__result__span');
let count = 0;

radioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const checkedBtns = document.querySelectorAll('.wrapper-radio__radio:checked');

        if(checkedBtns.length === 9) {
            checkedBtns.forEach(checkedBtn => {
                if(checkedBtn.value === '1' ) {
                    count ++;
                }
            })
            form.style.display = 'none';
            resultTest.classList.add('active-test');
            resultSum.textContent = count.toString();
        }

    })
})


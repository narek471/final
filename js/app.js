$(window).scroll(function(){
    if ($(this).scrollTop() > 82) {
        $('#fixed__menu').addClass('fixed__menu');
        $('#header__bottom').addClass('header__bottom__margin');
    } else {
        $('#fixed__menu').removeClass('fixed__menu');
        $('#header__bottom').removeClass('header__bottom__margin');
    }
});

let acc = document.getElementsByClassName("footer__hide__button");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let sections = document.querySelectorAll('.section__top');

sections.forEach(e => (
    e.addEventListener('click', () => {
        let accordion = e.nextElementSibling;
        if (accordion.style.display === "block") {
            accordion.style.display = "none";
            e.firstElementChild.nextElementSibling.classList.remove('section__flag__top');
            e.classList.remove('border__row');
        } else {
            accordion.style.display = "block";
            e.firstElementChild.nextElementSibling.classList.add('section__flag__top');
            e.classList.add('border__row');
        }
    })
))




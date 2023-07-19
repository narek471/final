// Accordion

let acc = document.getElementsByClassName("forum__content__button");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

new Swiper('.comments-slider', {
    items: '4',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1290: {
            slidesPerView: 4,
        },
    },
});



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

// Audio

const audioButtons = document.querySelectorAll('.audio__block__but');
const audioBlocks = document.querySelectorAll('.audio__block');
const audioClocks = document.querySelectorAll('.audio__block__icon');
const audioButton1 = document.querySelector('.audio__block__but.bl1');
const audioBlock1 = document.querySelector('.audio__block.bl1');
const audioClock1 = document.querySelector('.audio__block__icon.bl1');

audioButton1.addEventListener('click', () => {
    if(audioBlock1.classList.contains('active')) {
        audioBlock1.classList.remove('active');
        audioButton1.src = 'img/audio_but_off.svg';
        audioClock1.src = 'img/audio_icon_clock_b.svg'
    } else {
        defaultStyles();
        audioBlock1.classList.add('active');
        audioButton1.src = 'img/audio_but_on.svg';
        audioClock1.src = 'img/audio_icon_clock.svg'
    }
})

const audioButton2 = document.querySelector('.audio__block__but.bl2');
const audioBlock2 = document.querySelector('.audio__block.bl2');
const audioClock2 = document.querySelector('.audio__block__icon.bl2');

audioButton2.addEventListener('click', () => {
    if(audioBlock2.classList.contains('active')) {
        audioBlock2.classList.remove('active');
        audioButton2.src = 'img/audio_but_off.svg';
        audioClock2.src = 'img/audio_icon_clock_b.svg'
    } else {
        defaultStyles();
        audioBlock2.classList.add('active');
        audioButton2.src = 'img/audio_but_on.svg';
        audioClock2.src = 'img/audio_icon_clock.svg'
    }
})

const audioButton3 = document.querySelector('.audio__block__but.bl3');
const audioBlock3 = document.querySelector('.audio__block.bl3');
const audioClock3 = document.querySelector('.audio__block__icon.bl3');

audioButton3.addEventListener('click', () => {
    if(audioBlock3.classList.contains('active')) {
        audioBlock3.classList.remove('active');
        audioButton3.src = 'img/audio_but_off.svg';
        audioClock3.src = 'img/audio_icon_clock_b.svg'
    } else {
        defaultStyles();
        audioBlock3.classList.add('active');
        audioButton3.src = 'img/audio_but_on.svg';
        audioClock3.src = 'img/audio_icon_clock.svg'
    }
})

const audioButton4 = document.querySelector('.audio__block__but.bl4');
const audioBlock4 = document.querySelector('.audio__block.bl4');
const audioClock4 = document.querySelector('.audio__block__icon.bl4');

audioButton4.addEventListener('click', () => {
    if(audioBlock4.classList.contains('active')) {
        audioBlock4.classList.remove('active');
        audioButton4.src = 'img/audio_but_off.svg';
        audioClock4.src = 'img/audio_icon_clock_b.svg'
    } else {
        defaultStyles();
        audioBlock4.classList.add('active');
        audioButton4.src = 'img/audio_but_on.svg';
        audioClock4.src = 'img/audio_icon_clock.svg'
    }
})

const audioButton5 = document.querySelector('.audio__block__but.bl5');
const audioBlock5 = document.querySelector('.audio__block.bl5');
const audioClock5 = document.querySelector('.audio__block__icon.bl5');

audioButton5.addEventListener('click', () => {
    if(audioBlock5.classList.contains('active')) {
        audioBlock5.classList.remove('active');
        audioButton5.src = 'img/audio_but_off.svg';
        audioClock5.src = 'img/audio_icon_clock_b.svg'
    } else {
        defaultStyles();
        audioBlock5.classList.add('active');
        audioButton5.src = 'img/audio_but_on.svg';
        audioClock5.src = 'img/audio_icon_clock.svg'
    }
})

const audioButton6 = document.querySelector('.audio__block__but.bl6');
const audioBlock6 = document.querySelector('.audio__block.bl6');
const audioClock6 = document.querySelector('.audio__block__icon.bl6');

audioButton6.addEventListener('click', () => {
    if(audioBlock6.classList.contains('active')) {
        audioBlock6.classList.remove('active');
        audioButton6.src = 'img/audio_but_off.svg';
        audioClock6.src = 'img/audio_icon_clock_b.svg'
    } else {
        defaultStyles();
        audioBlock6.classList.add('active');
        audioButton6.src = 'img/audio_but_on.svg';
        audioClock6.src = 'img/audio_icon_clock.svg'
    }
})

const audioButton7 = document.querySelector('.audio__block__but.bl7');
const audioBlock7 = document.querySelector('.audio__block.bl7');
const audioClock7 = document.querySelector('.audio__block__icon.bl7');

audioButton7.addEventListener('click', () => {
    if(audioBlock7.classList.contains('active')) {
        audioBlock7.classList.remove('active');
        audioButton7.src = 'img/audio_but_off.svg';
        audioClock7.src = 'img/audio_icon_clock_b.svg'
    } else {
        defaultStyles();
        audioBlock7.classList.add('active');
        audioButton7.src = 'img/audio_but_on.svg';
        audioClock7.src = 'img/audio_icon_clock.svg'
    }
})

const audioButton8 = document.querySelector('.audio__block__but.bl8');
const audioBlock8 = document.querySelector('.audio__block.bl8');
const audioClock8 = document.querySelector('.audio__block__icon.bl8');

audioButton8.addEventListener('click', () => {
    if(audioBlock8.classList.contains('active')) {
        audioBlock8.classList.remove('active');
        audioButton8.src = 'img/audio_but_off.svg';
        audioClock8.src = 'img/audio_icon_clock_b.svg'
    } else {
        defaultStyles();
        audioBlock8.classList.add('active');
        audioButton8.src = 'img/audio_but_on.svg';
        audioClock8.src = 'img/audio_icon_clock.svg'
    }
})

const audioButton9 = document.querySelector('.audio__block__but.bl9');
const audioBlock9 = document.querySelector('.audio__block.bl9');
const audioClock9 = document.querySelector('.audio__block__icon.bl9');

audioButton9.addEventListener('click', () => {
    if(audioBlock9.classList.contains('active')) {
        audioBlock9.classList.remove('active');
        audioButton9.src = 'img/audio_but_off.svg';
        audioClock9.src = 'img/audio_icon_clock_b.svg';
    } else {
        defaultStyles();
        audioBlock9.classList.add('active');
        audioButton9.src = 'img/audio_but_on.svg';
        audioClock9.src = 'img/audio_icon_clock.svg';
    }
})

function defaultStyles() {
    audioButtons.forEach(element => element.src = 'img/audio_but_off.svg');
    audioBlocks.forEach(element => element.classList.remove('active'));
    audioClocks.forEach(element => element.src = 'img/audio_icon_clock_b.svg');
}




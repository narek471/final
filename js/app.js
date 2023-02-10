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

// const audioButton4 = document.querySelector('.audio__block__but.bl4');
// const audioBlock4 = document.querySelector('.audio__block.bl4');
// const audioClock4 = document.querySelector('.audio__block__icon.bl4');
// const audio4 = document.querySelector('.audio__playlist__audio.bl4')
//
// audioButton4.addEventListener('click', () => {
//     if(audioBlock4.classList.contains('active')) {
//         audioBlock4.classList.remove('active');
//         audioButton4.src = 'img/audio_but_off.svg';
//         audioClock4.src = 'img/audio_icon_clock_b.svg'
//         audio4.pause();
//     } else {
//         defaultStyles();
//         audioBlock4.classList.add('active');
//         audioButton4.src = 'img/audio_but_on.svg';
//         audioClock4.src = 'img/audio_icon_clock.svg';
//         audio4.load();
//         audio4.play();
//     }
// })


const playList = [
    {
        episode: 'Эпизод 1',
        title: '«Обзор проблемы ГМП»',
        src: 'audio/audio_1.mp3',
        description: 'Первый подкаст представляет собой беседу основоположника ГМП проф. Пола Абрамса с проф. Кристофером Чапплом, который даст обзор проблемы ГМП и сосредоточится на патофизиологии, этиологии, методах диагностики и подходах к терапии ГМП. Профессор Кристофер Чаппл - хирург-уролог-консультант в учебных больницах Шеффилда и почетный профессор Университета Шеффилда. Он является активным членом многих урологических ассоциаций и обществ, включая Британскую ассоциацию хирургов-урологов, Европейскую ассоциацию урологов и Международное общество по удержанию мочи.'
    },
    {
        episode: 'Эпизод 2',
        title: '«ГМП во время пандемии Covid-19»',
        src: 'audio/audio_2.mp3',
        description: 'Во втором подкасте проф. Абрамс беседует с проф. Чапплом о проблеме ведения пациентов с ГМП в условиях пандемии COVID-19: какие уроки были извлечены из ситуации и что можно взять в практику в будущем? Профессор Кристофер Чаппл - хирург-уролог-консультант в учебных больницах Шеффилда и почетный профессор Университета Шеффилда. Он является активным членом многих урологических ассоциаций и обществ, включая Британскую ассоциацию хирургов-урологов, Европейскую ассоциацию урологов и Международное общество по удержанию мочи.'
    },
    {
        episode: 'Эпизод 3',
        title: '«ГМП у женщин»',
        src: 'audio/audio_3.mp3',
        description: 'Третий подкаст представлен разговором проф. Пола Абрамс с профессором Линдой Кардозо на тему ведения женщин с ГМП: поведенческие моменты, которые нужно принимать во внимание, особенности диагностики ГМП у женщин, взаимосвязь с гормональными изменениями в постменопаузе и соответствующие подходы к терапии Профессор Кардозо является профессором урогинекологии и консультантом-гинекологом в больнице Королевского колледжа. Она была президентом Международной урогинекологической ассоциации, Ассоциации дипломированных физиотерапевтов в области женского здоровья и Секции акушерства и гинекологии Королевского медицинского общества.'
    },
    {
        episode: 'Эпизод 4',
        title: '«ГМП и психическое здоровье»',
        src: 'audio/audio_4.mp3',
        description: 'В четвертом подкасте профессор Пол Абрамс вместе с профессором Туфаном Тарканом в качестве специального гостя, исследуют тему психического здоровья при ГМП. Профессор Таркан является профессором урологии в Медицинской школе Университета Мармара, а также приглашенным профессором урологии и руководителем отделения функциональной и женской урологии в Медицинской школе Университета в Стамбуле. Он является членом Комитета по уродинамике и Школы нейроурологии в Международном обществе по удержанию мочи (ICS), а также членом Исследовательского общества (ICI) и членом правления Секции функциональной и женской урологии EAU (ESFFU). Доктор Таркан в настоящее время является президентом Турецкого общества по удержанию мочи (TCS) и помощником редактора Neurourology & Urodynamics, официального журнала Международного общества по удержанию мочи (ICS).'
    },
    {
        episode: 'Эпизод 5',
        title: '«Достижения в ведении пациентов с ГМП»',
        src: 'audio/audio_5.mp3',
        description: 'В пятом подкасте профессор Пол Абрамс вместе с профессором Хашимом Хашимом обсуждают последние достижения, которые произошли в области терапии ГМП: от монотерапии различными классами препаратов до их комбинации Профессор Хашим является урологом-хирургом и директором самого загруженного и наиболее авторитетного отделения уродинамики в Великобритании, базирующегося во всемирно известном Бристольском урологическом институте в больнице Саутмид. Он обучил множество хирургов из Великобритании и со всего мира хирургическим методам в урологии и уродинамике, имеет более 190 публикаций и читает лекции по всему миру.'
    },
    {
        episode: 'Эпизод 6',
        title: '«Осведомлённость о ГМП в первичном медико-санитарном звене»',
        src: 'audio/audio_6.mp3',
        description: 'В шестом подкасте профессор Пол Абрамс вместе с профессором Филиппом Ван Керребреком разберут роль врача общей практики в выявлении симптомов ГМП и соответствующем ведении пациентов. Профессор Филип Ван Керребрек является почетным профессором урологии в Университете Маастрихта и специализируется на различных проблемах нижних мочевыводящих путей. Его исследования включают в себя новые методы лечения в нейроурологии и функциональной урологии, и он является одним из пионеров в области нейромодуляции при дисфункции нижних мочевых путей. Он был председателем Комитета по стандартизации ICS в течение 8 лет и является редактором Ресурсного центра EAU-Nocturia'
    },
    {
        episode: 'Эпизод 7',
        title: '«ГМП у мужчин»',
        src: 'audio/audio_7.mp3',
        description: 'В седьмом подкасте профессор Пол Абрамсом с доктором Джеймсом Урри углубляются в проблему ГМП у мужчин: эпидемиологию, причины низкой диагностики и отсутствие соответствующего лечения, наиболее беспокоящие симптомы, взаимосвязь с ДГПЖ и способы улучшения ведения пациентов. Доктор Урри является урологом в городских больницах Netcare Waterfall City Hospitals и Intercare Sandton Day Hospital в Йоханнесбурге, Южная Африка. Получив квалификацию специалиста, Джеймс занял должность консультанта по урологии в больнице Грейс, где он работал специалистом в течение четырех лет, в том числе 18 месяцев в качестве исполняющего обязанности руководителя отделения. В течение этого времени он руководил клинической работой и исследовательскими проектами.'
    },
    {
        episode: 'Эпизод 8',
        title: '«Ведение пациентов с ГМП: пути продвижения вперед»',
        src: 'audio/audio_8.mp3',
        description: 'В восьмом подкасте профессор Маркус Дрейк в беседе с проф. Полом Абрамсом расскажет об эволюции отношения практикующих врачей к проблеме ГМП и руководящих принципах NICE и EAU по ведению пациентов. Профессор Маркус Дрейк является хирургом-консультантом в Бристольском урологическом институте в Великобритании, специализируясь на женской реконструктивной урологии, нейроурологии и уродинамике. Профессор Дрейк является председателем Руководящего комитета по стандартизации Международного общества по удержанию мочи, членом правления Европейской школы урологии и членом Комитета по руководящим принципам ЕАУ для СНМП у мужчин.'
    },
    {
        episode: 'Эпизод 9',
        title: '«Особенности терапии ГМП у пожилых»',
        src: 'audio/audio_9.mp3',
        description: 'Девятый подкаст содержит диалог профессора Пола Абрамса с профессором Адрианом Ваггом на тему особенностей ведения пожилых пациентов с ГМП: необходимости оценки состояния когнитивной функции и наличия сопутствующих заболеваний при выборе соответствующей терапии. Профессор Вагг является специалистом в области гериатрии и общей медицины с опытом исследований в области здравоохранения. В настоящее время он является профессором кафедры медицины в Университете Альберты и профессором урологии в Университете Гетеборга, Швеция. Он активно участвует в разработке национальных и международных руководств по клинической практике и является сопредседателем Международной консультативной группы по удержанию мочи.'
    }
]

const audioButtons = document.querySelectorAll('.audio__block__but');
const audioBlocks = document.querySelectorAll('.audio__block');
const audioClocks = document.querySelectorAll('.audio__block__icon');
const audios = document.querySelectorAll('.audio__playlist__audio');


const audioButton1 = document.querySelector('.audio__block__but.bl1');
const audioBlock1 = document.querySelector('.audio__block.bl1');
const audioClock1 = document.querySelector('.audio__block__icon.bl1');
const audio1 = document.querySelector('.audio__playlist__audio.bl1')
const audioButton2 = document.querySelector('.audio__block__but.bl2');
const audioBlock2 = document.querySelector('.audio__block.bl2');
const audioClock2 = document.querySelector('.audio__block__icon.bl2');
const audio2 = document.querySelector('.audio__playlist__audio.bl2');
const audioButton3 = document.querySelector('.audio__block__but.bl3');
const audioBlock3 = document.querySelector('.audio__block.bl3');
const audioClock3 = document.querySelector('.audio__block__icon.bl3');
const audio3 = document.querySelector('.audio__playlist__audio.bl3');
const audioButton4 = document.querySelector('.audio__block__but.bl4');
const audioBlock4 = document.querySelector('.audio__block.bl4');
const audioClock4 = document.querySelector('.audio__block__icon.bl4');
const audio4 = document.querySelector('.audio__playlist__audio.bl4');
const audioButton5 = document.querySelector('.audio__block__but.bl5');
const audioBlock5 = document.querySelector('.audio__block.bl5');
const audioClock5 = document.querySelector('.audio__block__icon.bl5');
const audio5 = document.querySelector('.audio__playlist__audio.bl5');
const audioButton6 = document.querySelector('.audio__block__but.bl6');
const audioBlock6 = document.querySelector('.audio__block.bl6');
const audioClock6 = document.querySelector('.audio__block__icon.bl6');
const audio6 = document.querySelector('.audio__playlist__audio.bl6');
const audioButton7 = document.querySelector('.audio__block__but.bl7');
const audioBlock7 = document.querySelector('.audio__block.bl7');
const audioClock7 = document.querySelector('.audio__block__icon.bl7');
const audio7 = document.querySelector('.audio__playlist__audio.bl7');
const audioButton8 = document.querySelector('.audio__block__but.bl8');
const audioBlock8 = document.querySelector('.audio__block.bl8');
const audioClock8 = document.querySelector('.audio__block__icon.bl8');
const audio8 = document.querySelector('.audio__playlist__audio.bl8');
const audioButton9 = document.querySelector('.audio__block__but.bl9');
const audioBlock9 = document.querySelector('.audio__block.bl9');
const audioClock9 = document.querySelector('.audio__block__icon.bl9');
const audio9 = document.querySelector('.audio__playlist__audio.bl9');
const playerEpisode = document.querySelector('.audio__top__episode');
const playerTitle = document.querySelector('.audio__top__title');
const playerDescription = document.querySelector('.player__description__text')
const volumePrecent = document.querySelector('.player__volume__progress');
const volumeLine = document.querySelector('.player__volume__line');
const currTime = document.querySelector('.player__volume__cur');
const totalDuration = document.querySelector('.player__volume__full');
const volumeOffline = document.querySelector('.audio__volume__offline');

const curTrack = document.querySelector('.player__cur__audio');
let trackIndex = 0;
let isPlaying = false;
let updateTimer;
let valueFlag = true;

trackLoader(trackIndex);

function trackLoader(index) {
    clearInterval(updateTimer);
    curTrack.src = playList[index].src;
    curTrack.load();
    updateTimer = setInterval(setUpdate, 1000);
}

function playTrack() {
    curTrack.play();
    curTrack.addEventListener('timeupdate', updateProgress);
    playerDescription.textContent = playList[trackIndex].description;
    playerEpisode.textContent = playList[trackIndex].episode;
    playerTitle.textContent = playList[trackIndex].title;
    document.querySelector('.player__disc__img').classList.add('player__disc__animation');
    document.querySelector('.player__disc__absolute').classList.add('player__animation__absolute');
    document.querySelector('.audio__player__pause').src = 'img/player_pause.svg';
    isPlaying = true;
    if(trackIndex === 0) {
        defaultStyles();
        audioBlock1.classList.add('active');
        audioButton1.src = 'img/audio_but_on.svg';
        audioClock1.src = 'img/audio_icon_clock.svg';
        if(screen.width < 996) {
            $(document).ready(function(){
                $(window).scrollTop(1000);
            });
        }
    } else if(trackIndex === 1) {
        defaultStyles();
        audioBlock2.classList.add('active');
        audioButton2.src = 'img/audio_but_on.svg';
        audioClock2.src = 'img/audio_icon_clock.svg';
        if(screen.width < 996) {
            $(document).ready(function(){
                $(window).scrollTop(1000);
            });
        }
    } else if(trackIndex === 2) {
        defaultStyles();
        audioBlock3.classList.add('active');
        audioButton3.src = 'img/audio_but_on.svg';
        audioClock3.src = 'img/audio_icon_clock.svg';
        if(screen.width < 996) {
            $(document).ready(function(){
                $(window).scrollTop(1000);
            });
        }
    } else if(trackIndex === 3) {
        defaultStyles();
        audioBlock4.classList.add('active');
        audioButton4.src = 'img/audio_but_on.svg';
        audioClock4.src = 'img/audio_icon_clock.svg';
        if(screen.width < 996) {
            $(document).ready(function(){
                $(window).scrollTop(1000);
            });
        }
    } else if(trackIndex === 4) {
        defaultStyles();
        audioBlock5.classList.add('active');
        audioButton5.src = 'img/audio_but_on.svg';
        audioClock5.src = 'img/audio_icon_clock.svg';
        $(document).ready(function(){
            $(window).scrollTop(1000);
        });
    } else if(trackIndex === 5) {
        defaultStyles();
        audioBlock6.classList.add('active');
        audioButton6.src = 'img/audio_but_on.svg';
        audioClock6.src = 'img/audio_icon_clock.svg';
        $(document).ready(function(){
            $(window).scrollTop(1000);
        });
    } else if(trackIndex === 6) {
        defaultStyles();
        audioBlock7.classList.add('active');
        audioButton7.src = 'img/audio_but_on.svg';
        audioClock7.src = 'img/audio_icon_clock.svg';
        $(document).ready(function(){
            $(window).scrollTop(1000);
        });
    } else if(trackIndex === 7) {
        defaultStyles();
        audioBlock8.classList.add('active');
        audioButton8.src = 'img/audio_but_on.svg';
        audioClock8.src = 'img/audio_icon_clock.svg';
        $(document).ready(function(){
            $(window).scrollTop(1000);
        });
    } else if(trackIndex === 8) {
        defaultStyles();
        audioBlock9.classList.add('active');
        audioButton9.src = 'img/audio_but_on.svg';
        audioClock9.src = 'img/audio_icon_clock.svg';
        $(document).ready(function(){
            $(window).scrollTop(1000);
        });
    }
}

function pauseTrack() {
    curTrack.pause();
    isPlaying = false;
    document.querySelector('.player__disc__img').classList.remove('player__disc__animation');
    document.querySelector('.player__disc__absolute').classList.remove('player__animation__absolute');
    document.querySelector('.audio__player__pause').src = 'img/player_pause_img.svg';
}

function playPauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
    if(!isPlaying) {
        defaultStyles();
    }
}

function nextTrack(){
    if(trackIndex < playList.length - 1){
        trackIndex += 1;
    }else{
        trackIndex = 0;
    }
    trackLoader(trackIndex);
    playTrack();
}
function prevTrack(){
    if(trackIndex > 0){
        trackIndex -= 1;
    }else{
        trackIndex = playList.length -1;
    }
    trackLoader(trackIndex);
    playTrack();
}

function lineTrack(blockIndex) {
    trackIndex = blockIndex;
    trackLoader(trackIndex);
    playPauseTrack();
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    volumePrecent.style.width = `${progressPercent}%`;
}

volumeLine.addEventListener('click', setProgress)

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = curTrack.duration;
    curTrack.currentTime = (clickX / width) * duration;
}

function defaultStyles() {
    audios.forEach(element => element.pause());
    audioButtons.forEach(element => element.src = 'img/audio_but_off.svg');
    audioBlocks.forEach(element => element.classList.remove('active'));
    audioClocks.forEach(element => element.src = 'img/audio_icon_clock_b.svg');
}

function reset(){
    currTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    volumePrecent.width = 0;
    curTrack.currentTime = 0;
}

function f() {
    if(valueFlag) {
        curTrack.volume = 0;
        valueFlag = false;
        volumeOffline.style.display = 'block';
    } else {
        curTrack.volume = 1;
        valueFlag = true;
        volumeOffline.style.display = 'none';
    }
}

function setUpdate(){
    if(!isNaN(curTrack.duration)){

        let currentMinutes = Math.floor(curTrack.currentTime / 60);
        let currentSeconds = Math.floor(curTrack.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curTrack.duration / 60);
        let durationSeconds = Math.floor(curTrack.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

// PopUp Audio

const options = document.querySelectorAll('.audio__block__options');

options.forEach(function(element) {
    element.addEventListener('click', () => {
        if(element.previousSibling.previousSibling.style.display === "flex") {
            element.previousSibling.previousSibling.style.display = "none";
        }  else {
            element.previousSibling.previousSibling.style.display = "flex";
        }
    })

    document.addEventListener('click', (e) => {
        if(e.target !== element ){
            element.previousSibling.previousSibling.style.display = "none";
        }
    })
})

function openPopUpEpisode(episodeIndex){
    let popupBg = document.querySelector('.popup__bg');
    let popup = document.querySelector('.popup');
    let closePopupButton = document.querySelector('.close-popup');

    popupBg.classList.add('active');
    popup.classList.add('active');
    document.querySelector('.popup__text__episode').textContent = playList[episodeIndex].description;

    closePopupButton.addEventListener('click',() => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if(e.target === popupBg) {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        }
    });
}

$('.popup__share__button').click(function(event){

    event.preventDefault();
    let id = $(this).attr('data-id').toString();
    $('.audio__share__block[data-id="'+ id +'"]').toggle();

});






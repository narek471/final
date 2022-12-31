const hamb = document.querySelector("#hamb");
const popupMobile = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu");

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popupMobile.classList.toggle("open");
    hamb.classList.toggle("active");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popupMobile.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    // popupMobile.classList.remove("open");
    // hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

function getSearch() {
    document.querySelector('.header__search').style.display = 'flex';
    document.querySelector('.header__top__right').style.position = 'absolute';
    document.querySelector('.header__top__right').style.width = '120%';
    document.querySelector('.header__search').style.width = '90%';
    document.querySelector('.header__top__right').style.marginRight = '0';
}

let dropDown1 = document.getElementById('dropdown__mobile1');
let dropDown2 = document.getElementById('dropdown__mobile2');
let dropDown3 = document.getElementById('dropdown__mobile3');
let dropDown4 = document.getElementById('dropdown__mobile4');


function myFunction4() {
    if(dropDown4.style.display === 'none') {
        dropDown4.style.display = 'block';
        $('#img4').addClass('img__rotate');
        $('#dropdown__open4').addClass('mobile__dropdown__active');
    }
    else {
        dropDown4.style.display = 'none';
        $('#img4').removeClass('img__rotate');
        $('#dropdown__open4').removeClass('mobile__dropdown__active');
    }
}

function myFunction3() {
    if(dropDown3.style.display === 'none') {
        dropDown3.style.display = 'block';
        $('#img3').addClass('img__rotate');
        $('#dropdown__open3').addClass('mobile__dropdown__active');
    }
    else {
        dropDown3.style.display = 'none';
        $('#img3').removeClass('img__rotate');
        $('#dropdown__open3').removeClass('mobile__dropdown__active');
    }
}

function myFunction2() {
    if(dropDown2.style.display === 'none') {
        dropDown2.style.display = 'block';
        $('#img2').addClass('img__rotate');
        $('#dropdown__open2').addClass('mobile__dropdown__active');
    }
    else {
        dropDown2.style.display = 'none';
        $('#img2').removeClass('img__rotate');
        $('#dropdown__open2').removeClass('mobile__dropdown__active');
    }
}

function myFunction1() {
    if(dropDown1.style.display === 'none') {
        dropDown1.style.display = 'block';
        $('#img1').addClass('img__rotate');
        $('#dropdown__open1').addClass('mobile__dropdown__active');
    }
    else {
        dropDown1.style.display = 'none';
        $('#img1').removeClass('img__rotate');
        $('#dropdown__open1').removeClass('mobile__dropdown__active');
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem('theme');
    const lang = localStorage.getItem('lang');
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("lang", lang);
    currentLang = lang;
    loadLang(lang);
    toggleMode();
});

let modal;
let currentLang;

let toggle_button = document.getElementById('toggle-button');
let toggle_icon = document.getElementById('toggle-icon');

let github = document.getElementById('github');
let instagram = document.getElementById('instagram');
let linkedin = document.getElementById('linkedin');

try {
    instagram.addEventListener('click', () => {
        location.href = "https://www.instagram.com/gustavo_gberti/";
    });
} catch (error) { }

try {

    linkedin.addEventListener('click', () => {
        location.href = "https://www.linkedin.com/in/gustavo-gimenez-berti-70797a250/";
    });
} catch (error) { }

try {

    github.addEventListener('click', () => {
        location.href = "https://github.com/gustavo-berti";
    });
} catch (error) { }


document.getElementById('navbar-toggle').addEventListener('click', () => {
    const menu = document.getElementById('navbar-menu');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";

    }
});

function toggleMode() {
    let body = document.querySelector('body');
    let theme = body.getAttribute('data-theme');

    if (theme === 'light') {
        body.setAttribute('data-theme', '');
        toggle_icon.src = "assets/sun.png"
    } else {
        body.setAttribute('data-theme', 'light');
        toggle_icon.src = "assets/moon.png"
    }
    localStorage.setItem('theme', theme);
}

async function showModal(element) {
    modal = document.getElementById(element);
    modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    modal.addEventListener("click", (e) => {
        if (e.target === modal)
            closeModal();
    });
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

function changeLang() {
    currentLang = currentLang === "pt" ? "en" : "pt";
    console.log(currentLang);
    
    localStorage.setItem("lang", currentLang);
    loadLang(currentLang);
}

function loadLang(lang) {
    fetch(`json/${lang}.json`).then(data => data.json().then(data => translatePage(data)));
}

function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(e => {
        let item = e.getAttribute('data-i18n');
        e.textContent = lang[item];
    })
    document.querySelectorAll('[data-i18n-nav] li').forEach(e => {
        e.children[0].textContent = lang.navbar[e.id];
    })
    document.querySelectorAll('[data-i18n-ul] li').forEach(e => {
        e.textContent = lang["itens-text"][e.id];
    })
    document.querySelectorAll('[data-i18n-alt]').forEach(e => {
        let item = e.getAttribute('data-i18n-alt');
        e.setAttribute("alt", lang[item]);
    })
}